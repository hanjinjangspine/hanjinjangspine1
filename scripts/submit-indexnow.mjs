import { execFileSync } from "node:child_process";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";

export const SITE_ORIGIN = "https://www.hanjinjangspine1.com";
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const GLOBAL_CONTENT_FILES = new Set([
  "app/layout.tsx",
  "app/sitemap.ts",
  "lib/metadata.ts",
  "lib/schema.ts",
  "lib/site.ts",
  "next.config.mjs"
]);

const NON_CONTENT_PREFIXES = [".github/", "scripts/"];
const NON_CONTENT_FILES = new Set([
  ".gitignore",
  "README.md",
  "app/globals.css",
  "app/not-found.tsx",
  "app/robots.ts",
  "eslint.config.mjs",
  "next-env.d.ts",
  "package.json",
  "pnpm-lock.yaml",
  "pnpm-workspace.yaml",
  "postcss.config.mjs",
  "tailwind.config.ts",
  "tsconfig.json"
]);

function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

export function extractSitemapUrls(xml, origin = SITE_ORIGIN) {
  const expectedOrigin = new URL(origin).origin;
  const urls = [];

  for (const match of xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/giu)) {
    const url = new URL(decodeXml(match[1]));

    if (url.protocol !== "https:" || url.origin !== expectedOrigin) {
      throw new Error(`Sitemap contains a non-canonical URL: ${url.origin}`);
    }

    url.hash = "";
    urls.push(url.toString());
  }

  const uniqueUrls = [...new Set(urls)];
  if (uniqueUrls.length === 0 || uniqueUrls.length > 10_000) {
    throw new Error(`Sitemap URL count must be between 1 and 10000; got ${uniqueUrls.length}.`);
  }

  return uniqueUrls;
}

function routeFromPageFile(file) {
  if (file === "app/page.tsx") return "/";

  const match = file.match(/^app\/(.+)\/page\.tsx$/u);
  return match ? `/${match[1]}` : null;
}

function addRouteAndMatches(selected, route, sitemapUrls, origin) {
  const dynamicIndex = route.indexOf("/[");
  if (dynamicIndex === -1) {
    selected.add(new URL(route, origin).toString());
    return;
  }

  addMatchingPrefix(selected, route.slice(0, dynamicIndex) || "/", sitemapUrls);
}

function addMatchingPrefix(selected, prefix, sitemapUrls) {
  for (const url of sitemapUrls) {
    const pathname = new URL(url).pathname;
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) selected.add(url);
  }
}

function isVerificationFile(file) {
  return /^public\/[a-f0-9]{32}\.txt$/u.test(file);
}

export function selectUrlsForChanges({
  changedFiles,
  sitemapUrls,
  origin = SITE_ORIGIN,
  submitAll = false
}) {
  if (submitAll) return { mode: "all", urls: [...sitemapUrls] };

  const selected = new Set();

  for (const rawFile of changedFiles) {
    const file = rawFile.replaceAll("\\", "/");

    if (GLOBAL_CONTENT_FILES.has(file)) return { mode: "all", urls: [...sitemapUrls] };
    if (NON_CONTENT_FILES.has(file) || isVerificationFile(file)) continue;
    if (NON_CONTENT_PREFIXES.some((prefix) => file.startsWith(prefix))) continue;

    if (file.startsWith("lib/") || file.startsWith("components/")) {
      return { mode: "all", urls: [...sitemapUrls] };
    }

    if (file.startsWith("public/patient-education/")) {
      addMatchingPrefix(selected, "/patient-education", sitemapUrls);
      continue;
    }

    if (file.startsWith("public/cases/")) {
      selected.add(new URL("/case-based-education", origin).toString());
      continue;
    }

    if (file.startsWith("public/media/operative-concepts/")) {
      addMatchingPrefix(selected, "/operative-concepts", sitemapUrls);
      continue;
    }

    if (file.startsWith("public/")) {
      return { mode: "all", urls: [...sitemapUrls] };
    }

    const pageRoute = routeFromPageFile(file);
    if (pageRoute) {
      addRouteAndMatches(selected, pageRoute, sitemapUrls, origin);
      continue;
    }

    const appRouteFile = file.match(/^app\/(.+)\/[^/]+\.(?:ts|tsx|js|jsx|mdx)$/u);
    if (appRouteFile) {
      addRouteAndMatches(selected, `/${appRouteFile[1]}`, sitemapUrls, origin);
    }
  }

  const expectedOrigin = new URL(origin).origin;
  const urls = [...selected].filter((value) => {
    const url = new URL(value);
    return url.protocol === "https:" && url.origin === expectedOrigin;
  });

  return { mode: urls.length > 0 ? "changed" : "none", urls: [...new Set(urls)] };
}

function git(args) {
  return execFileSync("git", args, {
    cwd: process.cwd(),
    encoding: "utf8",
    maxBuffer: 10 * 1024 * 1024
  }).trim();
}

function getChangedFiles(base, head) {
  if (!base || !head) return [];
  const output = git(["diff", "--name-only", "--diff-filter=ACDMRTUXB", base, head, "--"]);
  return output ? output.split(/\r?\n/u) : [];
}

export async function discoverIndexNowKey(publicDir) {
  const candidates = [];

  for (const file of await readdir(publicDir, { withFileTypes: true })) {
    if (!file.isFile() || !/^[a-f0-9]{32}\.txt$/u.test(file.name)) continue;

    const key = path.basename(file.name, ".txt");
    const content = (await readFile(path.join(publicDir, file.name), "utf8")).trim();
    if (content === key) candidates.push({ key, file: file.name });
  }

  if (candidates.length !== 1) {
    throw new Error(`Expected exactly one valid IndexNow key file; found ${candidates.length}.`);
  }

  return candidates[0];
}

async function fetchText(url, label) {
  const response = await fetch(url, {
    cache: "no-store",
    redirect: "error",
    signal: AbortSignal.timeout(15_000),
    headers: { "User-Agent": "hanjinjangspine1-indexnow/1.0" }
  });

  if (!response.ok) throw new Error(`${label} returned HTTP ${response.status}.`);
  return response.text();
}

export function assertRobotsAllowsCrawling(robotsText, origin = SITE_ORIGIN) {
  const lines = robotsText.split(/\r?\n/u).map((line) => line.trim());
  let appliesToAll = false;
  let canonicalSitemapFound = false;

  for (const line of lines) {
    const lowerLine = line.toLowerCase();
    if (lowerLine.startsWith("user-agent:")) {
      appliesToAll = lowerLine.slice("user-agent:".length).trim() === "*";
      continue;
    }

    if (appliesToAll && lowerLine === "disallow: /") {
      throw new Error("robots.txt blocks the entire site; IndexNow submission was stopped.");
    }

    if (lowerLine.startsWith("sitemap:")) {
      const sitemap = line.slice("sitemap:".length).trim();
      canonicalSitemapFound = sitemap === `${origin}/sitemap.xml`;
    }
  }

  if (!canonicalSitemapFound) {
    throw new Error("robots.txt does not declare the canonical sitemap URL.");
  }
}

function parseRetryAfter(value) {
  if (!value) return null;
  const seconds = Number(value);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);

  const date = Date.parse(value);
  return Number.isNaN(date) ? null : Math.max(0, date - Date.now());
}

export async function submitIndexNow(payload, endpoint = INDEXNOW_ENDPOINT) {
  const fallbackDelays = [2_000, 8_000];

  for (let attempt = 0; attempt < 3; attempt += 1) {
    let response;
    try {
      response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": "hanjinjangspine1-indexnow/1.0"
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15_000)
      });
    } catch (error) {
      if (attempt === 2) throw new Error(`IndexNow network request failed: ${error.message}`);
      await new Promise((resolve) => setTimeout(resolve, fallbackDelays[attempt]));
      continue;
    }

    if (response.status === 200 || response.status === 202) return response.status;

    const retryable = response.status === 429 || response.status >= 500;
    if (!retryable || attempt === 2) {
      throw new Error(`IndexNow returned HTTP ${response.status}.`);
    }

    const retryAfter = parseRetryAfter(response.headers.get("retry-after"));
    const delay = retryAfter ?? fallbackDelays[attempt];
    if (delay > 60_000) {
      throw new Error(`IndexNow returned HTTP ${response.status} with a retry delay over 60 seconds.`);
    }
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  throw new Error("IndexNow submission exhausted all retry attempts.");
}

function parseArgs(argv) {
  const options = { base: "", head: "", dryRun: false, submitAll: false };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--dry-run") options.dryRun = true;
    else if (arg === "--all") options.submitAll = true;
    else if (arg === "--base") options.base = argv[++index] ?? "";
    else if (arg === "--head") options.head = argv[++index] ?? "";
    else throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

export async function main(argv = process.argv.slice(2)) {
  const options = parseArgs(argv);
  const origin = process.env.INDEXNOW_SITE_ORIGIN || SITE_ORIGIN;
  const endpoint = process.env.INDEXNOW_ENDPOINT || INDEXNOW_ENDPOINT;
  const publicDir = path.join(process.cwd(), "public");
  const { key, file } = await discoverIndexNowKey(publicDir);

  if (process.env.GITHUB_ACTIONS === "true") console.log(`::add-mask::${key}`);

  const keyLocation = `${origin}/${file}`;
  const [liveKey, robotsText, sitemapXml] = await Promise.all([
    fetchText(keyLocation, "IndexNow key file"),
    fetchText(`${origin}/robots.txt`, "robots.txt"),
    fetchText(`${origin}/sitemap.xml`, "sitemap.xml")
  ]);

  if (liveKey.trim() !== key) {
    throw new Error("The deployed IndexNow key does not match the repository verification file.");
  }

  assertRobotsAllowsCrawling(robotsText, origin);
  const sitemapUrls = extractSitemapUrls(sitemapXml, origin);
  const selection = selectUrlsForChanges({
    changedFiles: getChangedFiles(options.base, options.head),
    sitemapUrls,
    origin,
    submitAll: options.submitAll
  });

  console.log(`IndexNow validation passed for ${sitemapUrls.length} canonical sitemap URLs.`);
  console.log(`Submission mode: ${selection.mode}; selected URL count: ${selection.urls.length}.`);

  if (selection.urls.length === 0) {
    console.log("No indexable content URLs changed; submission skipped.");
    return;
  }

  if (options.dryRun) {
    console.log("Dry run complete; no IndexNow request was sent.");
    return;
  }

  const status = await submitIndexNow(
    {
      host: new URL(origin).host,
      key,
      keyLocation,
      urlList: selection.urls
    },
    endpoint
  );

  console.log(`IndexNow accepted ${selection.urls.length} URLs with HTTP ${status}.`);
}

const invokedFile = process.argv[1] ? pathToFileURL(path.resolve(process.argv[1])).href : "";
if (import.meta.url === invokedFile) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
