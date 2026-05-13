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
