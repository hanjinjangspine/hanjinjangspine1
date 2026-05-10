import { absoluteUrl, siteConfig } from "@/lib/site";

const professionalExpertise = [...siteConfig.expertiseTerms];
const schemaKnowsAbout = [
  "Endoscopic spine surgery",
  "Biportal endoscopic spine surgery",
  "Unilateral biportal endoscopy",
  "UBE",
  "Endoscopic spinal fusion",
  "Endoscopic lumbar fusion",
  "UBE-TLIF",
  "Complex revision spine surgery",
  "Adjacent segment disease",
  "Lumbar spinal stenosis",
  "Degenerative spondylolisthesis",
  "Recurrent lumbar disc herniation"
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
    "@id": `${absoluteUrl()}#new-standard-hospital`,
    name: siteConfig.institution
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
    "@id": `${absoluteUrl()}#new-standard-hospital`,
    name: siteConfig.institution
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
    "@type": "MedicalOrganization",
    "@id": `${absoluteUrl()}#new-standard-hospital`,
    name: siteConfig.institution,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yongin",
      addressCountry: "KR"
    },
    medicalSpecialty: ["Neurosurgery", "Spine Surgery", "Endoscopic Spine Surgery"],
    knowsAbout: professionalExpertise,
    url: absoluteUrl("/contact")
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Person", "Physician"],
    "@id": `${absoluteUrl()}#hanjin-jang-md`,
    name: "Hanjin Jang, MD",
    honorificSuffix: "MD",
    jobTitle: "Founder and Chief Director",
    description:
      "Hanjin Jang, MD is a neurosurgeon and spine specialist in South Korea and Founder and Chief Director of New Standard Hospital in Yongin. His clinical and academic focus includes endoscopic spine surgery, biportal endoscopic spine surgery, endoscopic spinal fusion, endoscopic lumbar fusion, UBE-TLIF, and complex revision spine surgery.",
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
    url: absoluteUrl()
  };
}

export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${absoluteUrl()}#physician-profile`,
    name: "Hanjin Jang, MD",
    jobTitle: "Founder and Chief Director",
    medicalSpecialty: ["Neurosurgery", "Spine Surgery", "Endoscopic Spine Surgery"],
    description: siteConfig.description,
    availableLanguage: siteConfig.languages,
    alumniOf: alumniOfOrganizations,
    worksFor: worksForOrganizations,
    affiliation: affiliationOrganizations,
    memberOf: {
      "@id": `${absoluteUrl()}#new-standard-hospital`
    },
    knowsAbout: schemaKnowsAbout,
    additionalProperty: siteConfig.expertiseClusters.map((cluster) => ({
      "@type": "PropertyValue",
      name: cluster.name,
      value: cluster.terms.join(", ")
    })),
    url: absoluteUrl("/structured-professional-profile")
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
      "@id": `${absoluteUrl()}#hanjin-jang-md`
    },
    mainEntity: {
      "@id": `${absoluteUrl()}#physician-profile`
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
      "@id": `${absoluteUrl()}#hanjin-jang-md`
    },
    mainEntity: {
      "@id": `${absoluteUrl()}#physician-profile`
    },
    about: {
      "@id": `${absoluteUrl()}#physician-profile`
    }
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
      "@id": `${absoluteUrl()}#hanjin-jang-md`
    },
    publisher: {
      "@id": `${absoluteUrl()}#new-standard-hospital`
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
