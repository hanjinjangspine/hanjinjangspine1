import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  SITE_ORIGIN,
  assertRobotsAllowsCrawling,
  discoverIndexNowKey,
  extractSitemapUrls,
  selectUrlsForChanges,
  submitIndexNow
} from "./submit-indexnow.mjs";

const sitemapUrls = [
  `${SITE_ORIGIN}/`,
  `${SITE_ORIGIN}/about`,
  `${SITE_ORIGIN}/case-based-education`,
  `${SITE_ORIGIN}/operative-concepts`,
  `${SITE_ORIGIN}/operative-concepts/ube-far-lateral-l5s1`,
  `${SITE_ORIGIN}/patient-education`,
  `${SITE_ORIGIN}/patient-education/lumbar-disc-herniation`
];

test("extractSitemapUrls keeps unique canonical HTTPS URLs", () => {
  const xml = `
    <urlset>
      <url><loc>${SITE_ORIGIN}/</loc></url>
      <url><loc>${SITE_ORIGIN}/about</loc></url>
      <url><loc>${SITE_ORIGIN}/about</loc></url>
    </urlset>`;

  assert.deepEqual(extractSitemapUrls(xml), [`${SITE_ORIGIN}/`, `${SITE_ORIGIN}/about`]);
});

test("extractSitemapUrls rejects a non-canonical host or scheme", () => {
  assert.throws(
    () => extractSitemapUrls("<urlset><url><loc>https://hanjinjangspine1.com/</loc></url></urlset>"),
    /non-canonical/u
  );
  assert.throws(
    () => extractSitemapUrls(`<urlset><url><loc>http://www.hanjinjangspine1.com/</loc></url></urlset>`),
    /non-canonical/u
  );
});

test("a route page change selects only that canonical route", () => {
  const result = selectUrlsForChanges({ changedFiles: ["app/about/page.tsx"], sitemapUrls });
  assert.deepEqual(result, { mode: "changed", urls: [`${SITE_ORIGIN}/about`] });
});

test("a dynamic page change selects its complete route family", () => {
  const result = selectUrlsForChanges({
    changedFiles: ["app/patient-education/[slug]/page.tsx"],
    sitemapUrls
  });

  assert.deepEqual(result.urls, [
    `${SITE_ORIGIN}/patient-education`,
    `${SITE_ORIGIN}/patient-education/lumbar-disc-herniation`
  ]);
});

test("shared code changes fall back to the complete sitemap", () => {
  for (const changedFile of ["components/Header.tsx", "lib/site.ts", "app/layout.tsx"]) {
    assert.deepEqual(
      selectUrlsForChanges({ changedFiles: [changedFile], sitemapUrls }),
      { mode: "all", urls: sitemapUrls }
    );
  }
});

test("clinical media changes select the pages that use the media", () => {
  const cases = selectUrlsForChanges({
    changedFiles: ["public/cases/case-01/preop-mri.webp"],
    sitemapUrls
  });
  const education = selectUrlsForChanges({
    changedFiles: ["public/patient-education/illustrations/lumbar-disc-herniation-board.png"],
    sitemapUrls
  });

  assert.deepEqual(cases.urls, [`${SITE_ORIGIN}/case-based-education`]);
  assert.deepEqual(education.urls, [
    `${SITE_ORIGIN}/patient-education`,
    `${SITE_ORIGIN}/patient-education/lumbar-disc-herniation`
  ]);
});

test("automation-only changes do not submit content URLs", () => {
  const result = selectUrlsForChanges({
    changedFiles: [
      ".github/workflows/indexnow.yml",
      "scripts/submit-indexnow.mjs",
      "package.json",
      "public/0123456789abcdef0123456789abcdef.txt"
    ],
    sitemapUrls
  });

  assert.deepEqual(result, { mode: "none", urls: [] });
});

test("manual submit-all selects every sitemap URL", () => {
  const result = selectUrlsForChanges({ changedFiles: [], sitemapUrls, submitAll: true });
  assert.deepEqual(result, { mode: "all", urls: sitemapUrls });
});

test("robots validation requires crawling and the canonical sitemap", () => {
  assert.doesNotThrow(() =>
    assertRobotsAllowsCrawling(`User-agent: *\nAllow: /\nSitemap: ${SITE_ORIGIN}/sitemap.xml`)
  );
  assert.throws(
    () => assertRobotsAllowsCrawling(`User-agent: *\nDisallow: /\nSitemap: ${SITE_ORIGIN}/sitemap.xml`),
    /blocks the entire site/u
  );
  assert.throws(() => assertRobotsAllowsCrawling("User-agent: *\nAllow: /"), /canonical sitemap/u);
});

test("key discovery requires one exact 32-character filename-content match", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "indexnow-key-test-"));
  const dummyKey = "0123456789abcdef0123456789abcdef";

  try {
    await writeFile(path.join(directory, `${dummyKey}.txt`), `${dummyKey}\n`, "utf8");
    const discovered = await discoverIndexNowKey(directory);
    assert.equal(discovered.key, dummyKey);
    assert.equal(discovered.file, `${dummyKey}.txt`);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test("IndexNow treats both 200 and 202 as successful responses", async () => {
  const originalFetch = globalThis.fetch;
  try {
    for (const status of [200, 202]) {
      globalThis.fetch = async () => new Response(null, { status });
      assert.equal(await submitIndexNow({ urlList: [] }, "https://example.test/indexnow"), status);
    }
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("workflow filters the exact Vercel project and current main revision", async () => {
  const workflow = await import("node:fs/promises").then(({ readFile }) =>
    readFile(new URL("../.github/workflows/indexnow.yml", import.meta.url), "utf8")
  );

  assert.match(workflow, /deployment_status\.state == 'success'/u);
  assert.match(workflow, /deployment\.creator\.login == 'vercel\[bot\]'/u);
  assert.match(workflow, /deployment\.environment == 'Production – hanjinjangspine1-bf6u'/u);
  assert.match(workflow, /git rev-parse origin\/main/u);
  assert.match(workflow, /actions\/checkout@v6/u);
  assert.match(workflow, /actions\/setup-node@v6/u);
  assert.match(workflow, /node-version: 24/u);
  assert.match(workflow, /cache: pnpm/u);
  assert.match(workflow, /dry_run:[\s\S]*?default: true/u);
});
