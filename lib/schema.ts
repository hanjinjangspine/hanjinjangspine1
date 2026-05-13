import { absoluteUrl, siteConfig } from "@/lib/site";

const personalWebsiteUrl = "https://www.hanjinjangspine1.com";
const newStandardHospitalUrl = "https://new-standard.co.kr";
const newStandardHospitalId = `${absoluteUrl()}#new-standard-hospital`;
const physicianProfileId = `${absoluteUrl()}#physician-profile`;
const personId = `${absoluteUrl()}#hanjin-jang-md`;
const physicianDescription =
  "Neurosurgeon and spine specialist in South Korea with a clinical and academic focus on endoscopic spine surgery.";
const newStandardHospitalAddress = {
  "@type": "PostalAddress",
  streetAddress: "1539 Jungbu-daero",
  addressLocality: "Cheoin-gu, Yongin-si",
  addressRegion: "Gyeonggi-do",
  addressCountry: "Republic of Korea"
};
const relatedOfficialUrls = [newStandardHospitalUrl];
const professionalExpertise = [...siteConfig.expertiseTerms];
const schemaKnowsAbout = [
  "Biportal endoscopic spine surgery",
  "Unilateral biportal endoscopy",
  "UBE-TLIF",
  "Endoscopic lumbar fusion",
  "Complex revision spine surgery",
  "Lumbar spinal stenosis",
  "Degenerative spondylolisthesis",
  "Recurrent lumbar disc herniation",
  "Adjacent segment disease"
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
    mainEntityOfPage: absoluteUrl("/structured-professional-profile"),
    subjectOf: absoluteUrl("/operative-concepts"),
    url: personalWebsiteUrl,
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
    additionalProperty: siteConfig.expertiseClusters.map((cluster) => ({
      "@type": "PropertyValue",
      name: cluster.name,
      value: cluster.terms.join(", ")
    })),
    url: personalWebsiteUrl,
    sameAs: relatedOfficialUrls
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
