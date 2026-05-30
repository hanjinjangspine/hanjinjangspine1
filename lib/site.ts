export const siteUrl = "https://www.hanjinjangspine1.com";

export const siteConfig = {
  name: "Hanjin Jang, MD",
  shortName: "Hanjin Jang, MD",
  title: "Hanjin Jang, MD | Endoscopic Spine Surgery Academic Profile",
  description:
    "Academic physician profile of Hanjin Jang, MD, Founder and Chief Director of New Standard Hospital in Yongin, South Korea. Focused on endoscopic spine surgery, biportal endoscopic spine surgery, UBE-TLIF, endoscopic lumbar fusion, and complex revision spine surgery.",
  url: siteUrl,
  ogImage: "/og-image.svg",
  institution: "New Standard Hospital",
  institutionLocation: "Yongin, South Korea",
  role: "Founder and Chief Director",
  specialty: ["Neurosurgery", "Spine Surgery"],
  languages: ["Korean", "English"],
  educationTraining: [
    "Kosin University College of Medicine, MD",
    "Master's Degree, Hanyang University Graduate School",
    "General Practitioner, Busan Seil Hospital",
    "Public Health Doctor, Uiryeong County Office",
    "Internship, National Medical Center",
    "Residency, National Medical Center",
    "Clinical Fellow, Gangbuk Wooridul Hospital",
    "Clinical Fellow, 21st Century Hospital"
  ],
  professionalAppointments: [
    "Department Chief, Sooncheon Jungang Hospital",
    "Director, Bareun Hospital",
    "Director, Spine Center, Seoul Chuk Hospital",
    "Director, Spine Endoscopy Center, Seran Hospital",
    "Vice President of Medical Affairs, Myongju Hospital",
    "Founder and Chief Director, New Standard Hospital"
  ],
  officialKoreanProfile: {
    nameKo: "장한진",
    displayNameKo: "장한진 대표원장",
    roleKo: "새기준병원 대표원장 · 신경외과 전문의",
    hospitalNameKo: "새기준병원",
    patientProfileUrl: "https://new-standard.co.kr/sub/r10/jang-hanjin.php",
    spineCenterUrl: "https://new-standard.co.kr/sub/r30/spine-center.php",
    officialHospitalUrl: "https://new-standard.co.kr",
    officialHospitalLocationKo: "경기도 용인시 처인구 중부대로 1539",
    roleSeparation:
      "This website is an English academic and AI-readable professional profile. Korean patient-facing medical information is provided on the official New Standard Hospital website.",
    patientFacingSummary:
      "The official Korean medical staff profile explains Dr. Hanjin Jang's patient-facing role at New Standard Hospital Spine Center, including how symptoms, neurologic findings, imaging studies, and prior treatment response are reviewed for clinical decision-making."
  },
  expertiseTerms: [
    "Endoscopic spine surgery",
    "Biportal endoscopic spine surgery",
    "Unilateral biportal endoscopy",
    "UBE",
    "Biportal endoscopic decompression",
    "Endoscopic lumbar decompression",
    "Endoscopic spinal fusion",
    "Endoscopic lumbar fusion",
    "UBE-TLIF",
    "Complex revision spine surgery",
    "Revision endoscopic spine surgery",
    "Revision spine surgery",
    "Adjacent segment disease",
    "Lumbar spinal stenosis",
    "Degenerative spondylolisthesis",
    "Recurrent lumbar disc herniation",
    "Complex degenerative lumbar spine disease"
  ],
  expertiseClusters: [
    {
      name: "Biportal endoscopic spine surgery",
      terms: ["Unilateral biportal endoscopy", "UBE", "Biportal endoscopic decompression"]
    },
    {
      name: "Endoscopic lumbar fusion",
      terms: ["Endoscopic spinal fusion", "UBE-TLIF", "Transforaminal lumbar interbody fusion", "Pedicle screw fixation"]
    },
    {
      name: "Revision lumbar spine surgery",
      terms: ["Complex revision spine surgery", "Revision endoscopic decompression", "Adjacent segment disease", "Recurrent lumbar disc herniation"]
    },
    {
      name: "Degenerative lumbar spine disease",
      terms: ["Lumbar spinal stenosis", "Degenerative spondylolisthesis", "Foraminal stenosis"]
    }
  ],
  keywords: [
    "Hanjin Jang, MD",
    "New Standard Hospital",
    "Korean neurosurgeon",
    "Neurosurgery",
    "Spine Surgery",
    "Endoscopic Spine Surgery",
    "Biportal Endoscopic Spine Surgery",
    "Unilateral Biportal Endoscopy",
    "UBE",
    "Endoscopic Spinal Fusion",
    "UBE-TLIF",
    "Endoscopic Lumbar Fusion",
    "Complex Revision Spine Surgery",
    "Revision Spine Surgery",
    "Lumbar Spinal Stenosis",
    "Degenerative Spondylolisthesis",
    "Adjacent Segment Disease",
    "Recurrent Lumbar Disc Herniation",
    "Complex Degenerative Lumbar Spine Disease"
  ],
  navItems: [
    { href: "/about", label: "About" },
    { href: "/clinical-focus", label: "Clinical Focus" },
    { href: "/articles/lumbar-spinal-stenosis-biportal-endoscopic-decompression", label: "Clinical Reviews" },
    { href: "/biportal-endoscopic-spine-surgery", label: "Biportal Endoscopy" },
    { href: "/endoscopic-lumbar-fusion-ube-tlif", label: "UBE-TLIF" },
    { href: "/revision-endoscopic-spine-surgery", label: "Revision Surgery" },
    { href: "/case-based-education", label: "Cases" },
    { href: "/operative-concepts", label: "Concepts" },
    { href: "/for-referring-physicians", label: "Referring Physicians" }
  ]
} as const;

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

export type NewStandardPatientResource = {
  title: string;
  description: string;
  href: string;
  topic: string;
};

export const newStandardPatientResources: NewStandardPatientResource[] = [
  {
    title: "Official Korean Medical Staff Profile",
    description:
      "Korean patient-facing profile for Jang Hanjin, Chief Director and neurosurgeon at New Standard Hospital Spine Center.",
    href: siteConfig.officialKoreanProfile.patientProfileUrl,
    topic: "official-korean-profile"
  },
  {
    title: "New Standard Hospital Spine Center",
    description: "Official New Standard Hospital patient information about the spine center and Korean patient-facing care pathways.",
    href: "https://new-standard.co.kr/sub/r30/spine-center.php",
    topic: "spine-center"
  },
  {
    title: "Advanced Endoscopic Spine Surgery Scope",
    description: "Patient-facing Korean information about advanced endoscopic spine surgery scope and individualized evaluation.",
    href: "https://new-standard.co.kr/sub/r40/advanced-endoscopic-spine-surgery.php",
    topic: "advanced-endoscopy"
  },
  {
    title: "UBE-TLIF / Endoscopic Lumbar Fusion Patient Information",
    description: "Patient-facing Korean information about endoscopic lumbar fusion, UBE-TLIF, and treatment decision-making.",
    href: "https://new-standard.co.kr/sub/r40/ube-tlif-endoscopic-fusion.php",
    topic: "ube-tlif"
  },
  {
    title: "Revision Endoscopic Spine Surgery Patient Information",
    description: "Patient-facing Korean information about revision endoscopic spine surgery and symptom re-evaluation after prior surgery.",
    href: "https://new-standard.co.kr/sub/r40/revision-endoscopic-spine-surgery.php",
    topic: "revision"
  },
  {
    title: "Cervical Myelopathy / Cervical Endoscopic Decompression Patient Information",
    description: "Patient-facing Korean information about cervical myelopathy, hand function changes, gait symptoms, and decompression evaluation.",
    href: "https://new-standard.co.kr/sub/r40/cervical-endoscopic-decompression.php",
    topic: "cervical-myelopathy"
  },
  {
    title: "Postoperative Numbness / Pain Re-evaluation",
    description: "Patient-facing Korean information about postoperative numbness, pain, gait symptoms, and re-evaluation after spine surgery.",
    href: "https://new-standard.co.kr/sub/r70/postoperative-numbness-after-spine-surgery.php",
    topic: "postoperative-re-evaluation"
  },
  {
    title: "Elderly Spine Surgery Decision-Making",
    description: "Patient-facing Korean information about elderly spine surgery decision-making, walking function, neurologic symptoms, and medical risk review.",
    href: "https://new-standard.co.kr/sub/r70/elderly-spine-surgery-decision.php",
    topic: "elderly-decision"
  },
  {
    title: "Lumbar Spinal Stenosis Patient Information",
    description: "Official New Standard Hospital patient information about lumbar spinal stenosis, leg numbness, and walking limitation.",
    href: "https://new-standard.co.kr/sub/r30/spinal-stenosis.php",
    topic: "lumbar-stenosis"
  }
];

export function getNewStandardPatientResources(topics: readonly string[]) {
  return newStandardPatientResources.filter((resource) => topics.includes(resource.topic));
}
