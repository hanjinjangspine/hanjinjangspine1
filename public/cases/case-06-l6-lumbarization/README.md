# Case 06 L6 Lumbarization Asset Package

Purpose: paper-style and academic-page asset organization for a de-identified Case 06.

## Folder structure

- `source_renamed/preop_xray/` — preoperative X-ray images, renamed without patient identifiers.
- `source_renamed/postop_xray/` — postoperative X-ray images, renamed without patient identifiers.
- `source_renamed/preop_mri/` — preoperative MRI and level-counting scout images, renamed without patient identifiers.
- `source_renamed/postop_mri/` — postoperative MRI images, renamed without patient identifiers.
- `public_ready/images/` — web-ready montages for the academic page.
- `review_contact_sheets/` — labeled contact sheets for review and selection.
- `asset_manifest.csv` — mapping from original filenames to renamed files.

## Series mapping used

- Preoperative X-ray: series 05, 06, 07, 08, 09, 10, 19, 20, 21, 22.
- Postoperative X-ray: series 01, 02, 03, 04.
- Preoperative MRI / Scout: series 11, 12, 13, 14, 15, 16.
- Postoperative MRI: series 17, 18.

## Public page image paths

Use these paths after copying `public_ready/images/*` into:
`public/cases/case-06-l6-lumbarization/images/`

- `/cases/case-06-l6-lumbarization/images/preop-xray-montage.jpg`
- `/cases/case-06-l6-lumbarization/images/postop-xray-montage.jpg`
- `/cases/case-06-l6-lumbarization/images/preop-mri-montage.jpg`
- `/cases/case-06-l6-lumbarization/images/postop-mri-montage.jpg`
- `/cases/case-06-l6-lumbarization/images/gait-comparison-lowerbody.jpg` if retained after final consent/privacy review.

## Suggested section labels

1. Preoperative X-ray
2. Postoperative X-ray
3. Preoperative MRI
4. Postoperative MRI
5. Functional Gait Observation

## Privacy note

The filenames have been de-identified. This package does not guarantee that no burned-in DICOM text exists inside the images. Before public use, manually inspect every selected image at 100–200% magnification for name, ID, date of birth, chart number, accession number, and visible hospital identifiers.

## Video note

No video clip is included in this package. Video should be prepared as a separate, muted, cropped/blurred, consent-cleared asset.

## Paper-selected assets

The `paper_selected/` folder contains a smaller, manuscript-style selection for figure preparation. The corresponding panels are also saved in `public_ready/images/` as:

- `preop-xray-selected-panel.jpg`
- `postop-xray-selected-panel.jpg`
- `preop-mri-selected-panel.jpg`
- `postop-mri-selected-panel.jpg`
