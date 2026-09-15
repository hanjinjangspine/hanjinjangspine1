// Aggregate-only recount of the local clinical archive and video catalogues.
// No patient rows, identifiers, source paths, or private media belong here.
export const casebankArchive = {
  updated: "2026-09-15",
  clinicalSnapshot: "May 2026",
  videoCatalogueSnapshot: "14 August 2026",
  clinicalRecords: 5159,
  attributedSourceRecords: 5160,
  exactDuplicatesRemoved: 1,
  clinicalSourceSites: 4,
  historicalVideoCases: 334,
  historicalMediaRecords: 3126,
  videoCatalogueCases: 100,
  videoPublishedExcerpts: 91,
  videoExcludedRecords: 9,
  videoCatalogueFileLocations: 341,
  sourceKeyConflictGroups: 3,
  annual: [
    { year: 2016, clinical: 486, historicalVideo: 0, videoCatalogue: 0 },
    { year: 2017, clinical: 496, historicalVideo: 0, videoCatalogue: 0 },
    { year: 2018, clinical: 0, historicalVideo: 238, videoCatalogue: 0 },
    { year: 2019, clinical: 557, historicalVideo: 96, videoCatalogue: 1 },
    { year: 2020, clinical: 795, historicalVideo: 0, videoCatalogue: 0 },
    { year: 2021, clinical: 944, historicalVideo: 0, videoCatalogue: 0 },
    { year: 2022, clinical: 1025, historicalVideo: 0, videoCatalogue: 85 },
    { year: 2023, clinical: 304, historicalVideo: 0, videoCatalogue: 0 },
    { year: 2024, clinical: 73, historicalVideo: 0, videoCatalogue: 0 },
    { year: 2025, clinical: 365, historicalVideo: 0, videoCatalogue: 6 },
    { year: 2026, clinical: 114, historicalVideo: 0, videoCatalogue: 8 },
  ],
} as const;

export const formatArchiveCount = (value: number) => value.toLocaleString("en-US");

export function archiveMetrics(publishedEntries: number) {
  return [
    { count: casebankArchive.clinicalRecords, label: "Archived clinical records", detail: "2016–2026 · 4 source institutions" },
    { count: casebankArchive.historicalVideoCases, label: "Historical video cases", detail: "2018–2019 video archive" },
    { count: casebankArchive.videoPublishedExcerpts, label: "Published video excerpts", detail: "91 of 100 catalogue records · 9 excluded" },
    { count: publishedEntries, label: "Published teaching entries", detail: "Open case summaries, video and literature" },
  ];
}
