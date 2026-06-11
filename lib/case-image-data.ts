export type CaseImageType = "history" | "preoperative" | "postoperative";

export type CaseImage = {
  src: string;
  type: CaseImageType;
  caption: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseImageSet = {
  imagesAvailable: boolean;
  images: CaseImage[];
};

export const caseImageData = {
  case01: {
    imagesAvailable: true,
    images: [
      {
        src: "/cases/case-01/preop-xray.webp",
        type: "preoperative",
        caption:
          "De-identified preoperative radiograph used for lumbar level and alignment assessment.",
        alt:
          "De-identified preoperative lumbar radiograph for severe lumbar spinal stenosis case.",
        width: 1787,
        height: 853
      },
      {
        src: "/cases/case-01/preop-mri-sagittal.webp",
        type: "preoperative",
        caption:
          "De-identified preoperative sagittal MRI demonstrating severe lumbar stenosis.",
        alt:
          "De-identified preoperative sagittal lumbar MRI demonstrating severe stenosis.",
        width: 1781,
        height: 878
      },
      {
        src: "/cases/case-01/preop-mri-axial.webp",
        type: "preoperative",
        caption:
          "De-identified preoperative axial MRI demonstrating neural canal narrowing at the clinically concordant level.",
        alt:
          "De-identified preoperative axial lumbar MRI demonstrating severe stenosis.",
        width: 1778,
        height: 864
      },
      {
        src: "/cases/case-01/postop-mri-sagittal.webp",
        type: "postoperative",
        caption:
          "De-identified postoperative sagittal MRI after biportal endoscopic decompression.",
        alt:
          "De-identified postoperative sagittal lumbar MRI after endoscopic decompression.",
        width: 1781,
        height: 848
      },
      {
        src: "/cases/case-01/postop-mri-axial.webp",
        type: "postoperative",
        caption:
          "De-identified postoperative axial MRI after decompression at the operated level.",
        alt:
          "De-identified postoperative axial lumbar MRI after endoscopic decompression.",
        width: 1784,
        height: 856
      }
    ]
  },

  case02: {
    imagesAvailable: true,
    images: [
      {
        src: "/cases/case-02/history.webp",
        type: "history",
        caption:
          "De-identified clinical history summary used for educational discussion.",
        alt:
          "De-identified clinical history summary for UBE-TLIF educational case.",
        width: 1200,
        height: 560
      },
      {
        src: "/cases/case-02/preop-xray.webp",
        type: "preoperative",
        caption:
          "De-identified preoperative radiograph demonstrating L4-L5 degenerative spondylolisthesis and alignment assessment.",
        alt:
          "De-identified preoperative lumbar radiograph demonstrating degenerative spondylolisthesis.",
        width: 1787,
        height: 861
      },
      {
        src: "/cases/case-02/preop-mri-sagittal.webp",
        type: "preoperative",
        caption:
          "De-identified preoperative sagittal MRI demonstrating L4-L5 degenerative pathology.",
        alt:
          "De-identified preoperative sagittal lumbar MRI for UBE-TLIF case.",
        width: 1778,
        height: 856
      },
      {
        src: "/cases/case-02/preop-mri-axial.webp",
        type: "preoperative",
        caption:
          "De-identified preoperative axial MRI demonstrating foraminal stenosis and neural compression.",
        alt:
          "De-identified preoperative axial lumbar MRI demonstrating foraminal stenosis.",
        width: 1777,
        height: 855
      },
      {
        src: "/cases/case-02/postop-xray.webp",
        type: "postoperative",
        caption:
          "De-identified postoperative radiograph after L4-L5 interbody fusion and posterior fixation.",
        alt:
          "De-identified postoperative lumbar radiograph after L4-L5 UBE-TLIF.",
        width: 1778,
        height: 853
      },
      {
        src: "/cases/case-02/postop-mri-sagittal.webp",
        type: "postoperative",
        caption:
          "De-identified postoperative sagittal MRI after decompression and fusion.",
        alt:
          "De-identified postoperative sagittal lumbar MRI after UBE-TLIF.",
        width: 1783,
        height: 857
      },
      {
        src: "/cases/case-02/postop-mri-axial.webp",
        type: "postoperative",
        caption:
          "De-identified postoperative axial MRI after decompression at the operated level.",
        alt:
          "De-identified postoperative axial lumbar MRI after UBE-TLIF.",
        width: 1779,
        height: 860
      }
    ]
  },

  case03: {
    imagesAvailable: true,
    images: [
      {
        src: "/cases/case-03/history.webp",
        type: "history",
        caption:
          "De-identified preoperative history summary for revision endoscopic lumbar interbody fusion.",
        alt:
          "De-identified history summary for revision endoscopic lumbar interbody fusion case.",
        width: 1200,
        height: 560
      },
      {
        src: "/cases/case-03/preop-xray.webp",
        type: "preoperative",
        caption:
          "De-identified preoperative radiograph used for lumbar alignment and revision assessment.",
        alt:
          "De-identified preoperative lumbar radiograph for revision fusion assessment.",
        width: 1787,
        height: 853
      },
      {
        src: "/cases/case-03/preop-mri-sagittal.webp",
        type: "preoperative",
        caption:
          "De-identified preoperative sagittal MRI demonstrating recurrent or residual lumbar pathology after previous surgery.",
        alt:
          "De-identified preoperative sagittal lumbar MRI for revision endoscopic fusion case.",
        width: 1781,
        height: 878
      },
      {
        src: "/cases/case-03/preop-mri-axial.webp",
        type: "preoperative",
        caption:
          "De-identified preoperative axial MRI demonstrating recurrent or residual neural compression.",
        alt:
          "De-identified preoperative axial lumbar MRI for revision endoscopic fusion case.",
        width: 1778,
        height: 864
      },
      {
        src: "/cases/case-03/postop-mri-sagittal.webp",
        type: "postoperative",
        caption:
          "De-identified postoperative sagittal MRI after revision endoscopic lumbar interbody fusion.",
        alt:
          "De-identified postoperative sagittal lumbar MRI after revision endoscopic fusion.",
        width: 1781,
        height: 848
      },
      {
        src: "/cases/case-03/postop-mri-axial.webp",
        type: "postoperative",
        caption:
          "De-identified postoperative axial MRI after revision decompression and fusion.",
        alt:
          "De-identified postoperative axial lumbar MRI after revision endoscopic fusion.",
        width: 1784,
        height: 856
      }
    ]
  },

  case04: {
    imagesAvailable: true,
    images: [
      {
        src: "/cases/case-04/history.webp",
        type: "history",
        caption:
          "De-identified clinical history summary for adjacent segment disease after previous lumbar fusion.",
        alt:
          "De-identified clinical history summary for adjacent segment disease case.",
        width: 1200,
        height: 560
      },
      {
        src: "/cases/case-04/preop-xray.webp",
        type: "preoperative",
        caption:
          "De-identified preoperative radiograph demonstrating previous fusion construct and adjacent segment evaluation.",
        alt:
          "De-identified preoperative lumbar radiograph demonstrating prior fusion construct.",
        width: 1784,
        height: 853
      },
      {
        src: "/cases/case-04/preop-mri-sagittal.webp",
        type: "preoperative",
        caption:
          "De-identified preoperative sagittal MRI demonstrating adjacent segment pathology above the prior fusion construct.",
        alt:
          "De-identified preoperative sagittal lumbar MRI demonstrating adjacent segment disease.",
        width: 1775,
        height: 856
      },
      {
        src: "/cases/case-04/preop-mri-axial.webp",
        type: "preoperative",
        caption:
          "De-identified preoperative axial MRI demonstrating adjacent segment stenosis and neural compression.",
        alt:
          "De-identified preoperative axial lumbar MRI demonstrating adjacent segment stenosis.",
        width: 1775,
        height: 856
      },
      {
        src: "/cases/case-04/postop-xray.webp",
        type: "postoperative",
        caption:
          "De-identified postoperative radiograph after extension fusion for adjacent segment disease.",
        alt:
          "De-identified postoperative lumbar radiograph after extension fusion.",
        width: 1789,
        height: 856
      }
    ]
  },

  case05: {
    imagesAvailable: true,
    images: [
      {
        src: "/cases/case-05/history.webp",
        type: "history",
        caption:
          "De-identified clinical history summary for cervical spondylotic myelopathy.",
        alt:
          "De-identified clinical history summary for cervical spondylotic myelopathy case.",
        width: 1200,
        height: 560
      },
      {
        src: "/cases/case-05/preop-xray.webp",
        type: "preoperative",
        caption:
          "De-identified preoperative cervical radiograph used for alignment assessment.",
        alt:
          "De-identified preoperative cervical radiograph for CSM case.",
        width: 1779,
        height: 851
      },
      {
        src: "/cases/case-05/preop-mri-sagittal.webp",
        type: "preoperative",
        caption:
          "De-identified preoperative sagittal cervical MRI demonstrating multilevel cervical stenosis.",
        alt:
          "De-identified preoperative sagittal cervical MRI demonstrating cervical stenosis.",
        width: 1698,
        height: 848
      },
      {
        src: "/cases/case-05/preop-mri-axial.webp",
        type: "preoperative",
        caption:
          "De-identified preoperative axial cervical MRI demonstrating cervical canal stenosis.",
        alt:
          "De-identified preoperative axial cervical MRI demonstrating cervical stenosis.",
        width: 1708,
        height: 848
      },
      {
        src: "/cases/case-05/postop-xray.webp",
        type: "postoperative",
        caption:
          "De-identified postoperative cervical radiograph after endoscopic decompression.",
        alt:
          "De-identified postoperative cervical radiograph after endoscopic cervical decompression.",
        width: 1789,
        height: 868
      },
      {
        src: "/cases/case-05/postop-mri-sagittal.webp",
        type: "postoperative",
        caption:
          "De-identified postoperative sagittal cervical MRI after endoscopic decompression.",
        alt:
          "De-identified postoperative sagittal cervical MRI after endoscopic decompression.",
        width: 1774,
        height: 859
      },
      {
        src: "/cases/case-05/postop-mri-axial.webp",
        type: "postoperative",
        caption:
          "De-identified postoperative axial cervical MRI after decompression at the operated level.",
        alt:
          "De-identified postoperative axial cervical MRI after decompression.",
        width: 1775,
        height: 857
      }
    ]
  },

  case06: {
    imagesAvailable: true,
    images: [
      {
        src: "/cases/case-06-l6-lumbarization/images/gait-comparison-lowerbody.jpg",
        type: "history",
        caption:
          "De-identified comparative lower-body gait observation used for functional assessment and educational discussion in this transitional-anatomy case.",
        alt:
          "De-identified comparative lower-body gait observation for a lumbosacral transitional vertebra educational case.",
        width: 1590,
        height: 1130
      },
      {
        src: "/cases/case-06-l6-lumbarization/images/xray-mri-montage.jpg",
        type: "preoperative",
        caption:
          "De-identified preoperative radiograph and MRI montage demonstrating the lumbarized transitional segment and the clinically concordant level.",
        alt:
          "De-identified preoperative radiograph and MRI montage for a lumbosacral transitional vertebra educational case.",
        width: 1200,
        height: 1920
      }
    ]
  }
} satisfies Record<"case01" | "case02" | "case03" | "case04" | "case05" | "case06", CaseImageSet>;
