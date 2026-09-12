import { casebankArchive } from "@/lib/casebank-archive";
import { casebankCards } from "@/lib/casebank";
import { absoluteUrl } from "@/lib/site";
import { driveVideoInventory } from "@/lib/drive-video-inventory";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    title: "Casebank public aggregate summary",
    version: "2026-09-12-v2",
    source: absoluteUrl("/casebank#count-method"),
    custodian: "Hanjin Jang, MD",
    ...casebankArchive,
    driveVideoInventory,
    publishedTeachingEntries: casebankCards.length,
    teachingLevelDistribution: [1, 2, 3, null].map((levels) => ({
      treatedLevels: levels,
      entries: casebankCards.filter((entry) => entry.levelCount === levels).length,
    })),
    definitions: {
      clinicalRecords: "Retained records attributed to Hanjin Jang after whitespace-normalized exact-duplicate removal, excluding internal row identifiers from comparison.",
      historicalVideoCases: "Case records in the historical database; linked media-file records include video and images.",
      videoCatalogueCases: "Case records in the separate August 2026 catalogue; listed file locations are not a verified unique-video count.",
      publishedTeachingEntries: "Seven clinical summaries, one operative-video example and one published-paper case. Not a consecutive patient registry.",
      teachingLevelDistribution: "Only the open teaching collection. null means the treated level count is unreported; a treated motion segment counts once.",
      annualZero: "No records for that year in the available collection; not proof of zero clinical activity.",
    },
    limitations: [
      "Collections may overlap and must not be added together.",
      "Counts do not establish unique patients, lifetime operations, UBE volume or treatment success.",
      "Source snapshots do not reconstruct every year of practice.",
      "The technical recount is not an independent clinical audit or patient-level outcome verification.",
      "Underlying patient records and private media are not included.",
    ],
  }, { headers: { "X-Robots-Tag": "noindex", "Content-Disposition": "attachment; filename=casebank-aggregate-summary.json" } });
}
