export type CaseLevels = {
  treated: string[] | null;
  decompression: string[] | null;
  fusion: string[] | null;
  construct?: string[];
  note: string;
};

// Explicitly transcribed from the published procedure descriptions. Do not infer
// a surgical level from a dermatome, an image, a title, or a generic singular noun.
export const caseLevels: Record<string, CaseLevels> = {
  "Case 01": { treated: null, decompression: null, fusion: [], note: "The source does not name the operated segment(s); the L5 dermatome is not a surgical level." },
  "Case 02": { treated: ["L4-L5"], decompression: ["L4-L5"], fusion: ["L4-L5"], note: "Decompression and fusion at the same segment count as one treated level." },
  "Case 03": { treated: null, decompression: null, fusion: null, note: "The source says clinically concordant revision level but does not identify the operated segment(s)." },
  "Case 04": { treated: ["L3-L4"], decompression: ["L3-L4"], fusion: ["L3-L4"], construct: ["L3-L4", "L4-L5", "L5-S1"], note: "One new extension-fusion level at L3-L4. The final L3-S1 construct spans three motion segments, including the two previously fused levels; it is not three new fusion levels." },
  "Case 05": { treated: ["C4-C5", "C5-C6"], decompression: ["C4-C5", "C5-C6"], fusion: [], note: "Bilateral decompression through one-sided access at two segments counts as two levels, not four." },
  "Case 06": { treated: ["L3-L4", "L4-L5", "L5-L6"], decompression: ["L3-L4", "L4-L5", "L5-L6"], fusion: ["L4-L5", "L5-L6"], note: "Three decompressed segments, including the two fusion segments. L3-L4 is decompression alone. Preserve the source's corrected numbering for the lumbarized L6 vertebra." },
  "Case 07": { treated: ["L4-L5", "L5-S1"], decompression: ["L4-L5", "L5-S1"], fusion: ["L4-L5", "L5-S1"], note: "Two fusion segments, each with decompression. Bilateral work and multiple procedures at the same segment do not create additional levels." },
  "Case 08": { treated: ["L5-S1"], decompression: ["L5-S1"], fusion: [], note: "One right foraminal target at L5-S1. Two portals and multiple video excerpts still describe one level." },
  "Case 09": { treated: ["L5-S1"], decompression: ["L5-S1"], fusion: [], note: "Figure 3 identifies one recurrent disc level, L5-S1. This is a publication-derived case; individual operator attribution is not established." },
};

export function levelCountLabel(levels: string[] | null) {
  return levels === null ? "Level count not reported" : `${levels.length} ${levels.length === 1 ? "level" : "levels"}`;
}
