// Public aggregate only. The private reconciliation manifest is outside this repository.
export const driveVideoInventory = {
  auditedAt: "2026-09-12",
  sourceCollections: 8,
  foldersScanned: 767,
  videoFileRecords: 1188,
  nonemptyFileRecords: 1125,
  zeroByteFileRecords: 63,
  filenameSizeGroups: 992,
  extraRecordsInRepeatedMetadataGroups: 196,
  contentIdentityVerified: false,
  clinicalCaseIdentityVerified: false,
  scope: "Eight identified surgical-media collections in the connected Google Drive account, including their descendants. This is not an inventory of every Drive account or every folder.",
  countingMethod: "One record per distinct Drive file ID with a video MIME type. Original filenames, folder paths and file links remain private. File copies and alternate edits may remain in this total.",
  matchingMethod: "Filename-and-size grouping identifies review candidates only. A metadata match does not verify identical file contents or a unique clinical case.",
  publicationScope: "Private file listing does not authorize publication. The open video collection currently reuses the existing Case 08 teaching sequence."
} as const;
