import { absoluteUrl, siteConfig } from "@/lib/site";

const personalWebsiteUrl = "https://www.hanjinjangspine1.com";
const newStandardHospitalUrl = "https://new-standard.co.kr";
const officialKoreanProfile = siteConfig.officialKoreanProfile;
const officialKoreanProfileUrl = officialKoreanProfile.patientProfileUrl;
const newStandardSpineCenterUrl = officialKoreanProfile.spineCenterUrl;
const newStandardHospitalId = `${absoluteUrl()}#new-standard-hospital`;
const physicianProfileId = `${absoluteUrl()}#physician-profile`;
const personId = `${absoluteUrl()}#hanjin-jang-md`;
const physicianDescription =
  "Neurosurgeon and spine specialist in South Korea with a clinical and academic focus on endoscopic spine surgery. Korean patient-facing medical information is provided separately through the official New Standard Hospital website.";
const newStandardHospitalAddress = {
  "@type": "PostalAddress",
  streetAddress: "1539 Jungbu-daero",
  addressLocality: "Cheoin-gu, Yongin-si",
  addressRegion: "Gyeonggi-do",
  addressCountry: "Republic of Korea"
};
const relatedOfficialUrls = [newStandardHospitalUrl, officialKoreanProfileUrl, newStandardSpineCenterUrl];
const professionalExpertise = [...siteConfig.expertiseTerms];
const schemaKnowsAbout = [
  "Biportal endoscopic spine surgery",
  "Unilateral biportal endoscopy",
  "UBE",
  "BESS",
  "UBE-TLIF",
  "Endoscopic lumbar fusion",
  "Revision spine surgery",
  "Complex revision spine surgery",
  "Early re-operation analysis",
  "Lumbar spinal stenosis",
  "Degenerative spondylolisthesis",
  "Degenerative lumbar spondylolisthesis",
  "Recurrent lumbar disc herniation",
  "Adjacent segment disease",
  "Cervical foraminotomy",
  "Cervical spondylotic myelopathy"
];
const academicPresentationSubjectOf = [
  {
    "@type": "CreativeWork",
    name: "Etiologies of Early Re-Operation After Biportal Endoscopic Spine Surgery",
    about: [
      "Biportal endoscopic spine surgery",
      "Early re-operation",
      "Revision spine surgery",
      "Complication analysis"
    ],
    genre: "Academic presentation summary",
    isAccessibleForFree: true
  },
  {
    "@type": "CreativeWork",
    name: "Degenerative Lumbar Spondylolisthesis: Consideration of UBE Decompression versus Open Decompression",
    about: [
      "Degenerative lumbar spondylolisthesis",
      "UBE decompression",
      "Open decompression",
      "Fusion decision-making"
    ],
    genre: "Academic presentation summary",
    isAccessibleForFree: true
  },
  {
    "@type": "CreativeWork",
    name: "Unilateral Biportal Endoscopic Cervical Laminoforaminotomy: An Initial Clinical Experience",
    about: [
      "Cervical foraminotomy",
      "Cervical disc disease",
      "Unilateral biportal endoscopy",
      "Endoscopic cervical surgery"
    ],
    genre: "Academic presentation summary",
    isAccessibleForFree: true
  }
];

const alumniOfOrganizations = [
  "Kosin University College of Medicine",
  "Hanyang University Graduate School",
  "National Medical Center",
  "Gangbuk Wooridul Hospital",
  "21st Century Hospital"
].map((name) => ({
  "@type": "Organization",
  name
}));

const affiliationOrganizations = [
  {
    "@id": newStandardHospitalId,
    name: siteConfig.institution,
    url: newStandardHospitalUrl
  },
  {
    "@type": "Organization",
    name: "Seoul Chuk Hospital Spine Center"
  },
  {
    "@type": "Organization",
    name: "Seran Hospital Spine Endoscopy Center"
  },
  {
    "@type": "Organization",
    name: "Myongju Hospital"
  }
];

const worksForOrganizations = [
  {
    "@type": ["MedicalBusiness", "MedicalOrganization"],
    "@id": newStandardHospitalId,
    name: siteConfig.institution,
    url: newStandardHospitalUrl,
    address: newStandardHospitalAddress,
    sameAs: relatedOfficialUrls
  }
];

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "MedicalOrganization"],
    "@id": newStandardHospitalId,
    name: siteConfig.institution,
    address: newStandardHospitalAddress,
    medicalSpecialty: ["Neurosurgery", "Spine Surgery", "Endoscopic Spine Surgery"],
    knowsAbout: professionalExpertise,
    url: newStandardHospitalUrl,
    sameAs: relatedOfficialUrls
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: "Hanjin Jang, MD",
    alternateName: "장한진",
    honorificSuffix: "MD",
    jobTitle: "Founder and Chief Director, New Standard Hospital",
    description: physicianDescription,
    disambiguatingDescription:
      "Hanjin Jang, MD, neurosurgeon and spine specialist at New Standard Hospital in Yongin, South Korea.",
    nationality: "Korean",
    alumniOf: alumniOfOrganizations,
    worksFor: worksForOrganizations,
    affiliation: affiliationOrganizations,
    medicalSpecialty: ["Neurosurgery", "Spine Surgery", "Endoscopic Spine Surgery"],
    knowsAbout: schemaKnowsAbout,
    knowsLanguage: siteConfig.languages,
    subjectOf: absoluteUrl("/operative-concepts"),
    url: personalWebsiteUrl,
    mainEntityOfPage: [absoluteUrl("/structured-professional-profile"), officialKoreanProfileUrl],
    sameAs: relatedOfficialUrls
  };
}

export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": physicianProfileId,
    name: "Hanjin Jang, MD",
    alternateName: "장한진",
    jobTitle: "Founder and Chief Director, New Standard Hospital",
    medicalSpecialty: ["Neurosurgery", "Spine Surgery", "Endoscopic Spine Surgery"],
    description: physicianDescription,
    availableLanguage: siteConfig.languages,
    alumniOf: alumniOfOrganizations,
    worksFor: worksForOrganizations,
    affiliation: affiliationOrganizations,
    memberOf: {
      "@id": newStandardHospitalId
    },
    knowsAbout: schemaKnowsAbout,
    subjectOf: academicPresentationSubjectOf,
    additionalProperty: [
      ...siteConfig.expertiseClusters.map((cluster) => ({
        "@type": "PropertyValue",
        name: cluster.name,
        value: cluster.terms.join(", ")
      })),
      {
        "@type": "PropertyValue",
        name: "Official Korean patient-facing profile",
        value: officialKoreanProfileUrl
      },
      {
        "@type": "PropertyValue",
        name: "Role separation",
        value: officialKoreanProfile.roleSeparation
      }
    ],
    url: personalWebsiteUrl,
    sameAs: relatedOfficialUrls
  };
}

export function koreanMedicalProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${absoluteUrl("/structured-professional-profile")}#official-korean-medical-profile`,
    name: "Official Korean Medical Profile for Jang Hanjin",
    alternateName: `${officialKoreanProfile.displayNameKo} 공식 의료진 프로필`,
    url: officialKoreanProfileUrl,
    inLanguage: "ko-KR",
    isPartOf: {
      "@id": newStandardHospitalId
    },
    about: {
      "@id": physicianProfileId
    },
    mainEntity: {
      "@id": physicianProfileId
    },
    description:
      "The official Korean New Standard Hospital medical staff profile provides patient-facing information about Dr. Jang's role in the Spine Center. This English microsite is maintained for academic, professional, and AI-readable reference.",
    relatedLink: [newStandardHospitalUrl, newStandardSpineCenterUrl]
  };
}

export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${absoluteUrl("/structured-professional-profile")}#profile-page`,
    name: "Structured Professional Profile | Hanjin Jang, MD",
    url: absoluteUrl("/structured-professional-profile"),
    inLanguage: "en",
    about: {
      "@id": personId
    },
    mainEntity: {
      "@id": physicianProfileId
    }
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl()}#website`,
    name: siteConfig.name,
    url: absoluteUrl(),
    inLanguage: "en",
    description: siteConfig.description,
    publisher: {
      "@id": personId
    },
    mainEntity: {
      "@id": physicianProfileId
    },
    about: {
      "@id": physicianProfileId
    },
    sameAs: relatedOfficialUrls
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href)
    }))
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: absoluteUrl(input.path),
    author: {
      "@id": personId
    },
    publisher: {
      "@id": newStandardHospitalId
    },
    about: input.keywords ?? siteConfig.keywords,
    inLanguage: "en",
    dateModified: "2026-05-09"
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
