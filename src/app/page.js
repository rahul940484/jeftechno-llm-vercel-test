import HomeClient from "./HomeClient";

export const metadata = {
  title: "Electrical & Technical Engineering Service Provider | Jef Techno",
  description: "",
  keywords: "Electrical Engineering Consulting Company India, Lightning Protection And Earthing Company, Power Quality And Electrical Safety Audit Firm, Industrial Electrical Consultant, Electrical Engineering Consulting Company Services, Electrical Engineering Consulting Company Company, Electrical Engineering Consulting Company For Industrial Plants, Electrical Engineering Consulting Company Consultant, Electrical Engineering Consulting Company Design And Installation, Best Electrical Engineering Consulting Company Company In India, Electrical Engineering Consulting Company Company In UAE, How To Select A Electrical Engineering Consulting Company Provider For A Factory, Electrical Engineering Consulting Company As Per IS/IEC 62305, Turnkey Electrical Engineering Consulting Company For Industrial Plants, Electrical Engineering Consulting Company Cost For Commercial Building, Certified Electrical Engineering Consulting Company Consultant Near Me, Electrical Engineering Consulting Company For Data Centers And Warehouses, Earthing System, Lightning Arrester, Surge Protection Device, Soil Resistivity, Earth Pit Testing, Risk Assessment IEC 62305, Equipotential Bonding, Down Conductor, Air Termination Network, Touch And Step Potential, Electrical Safety Compliance, Power System Reliability, Industrial Electrical Audit",
  alternates: {
    canonical: "https://www.jeftechno.com/",
  },
  openGraph: {
    title: "Electrical & Technical Engineering Service Provider | Jef Techno",
    description: "",
    url: "https://www.jeftechno.com/",
    type: "website",
    siteName: "Jef Techno",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical & Technical Engineering Service Provider | Jef Techno",
    description: "",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://www.jeftechno.com/#organization",
      "name": "JEF Techno",
      "alternateName": "JEF Techno Solutions Private Limited",
      "url": "https://www.jeftechno.com/",
      "logo": "https://www.jeftechno.com/assets/logo.png",
      "image": "https://www.jeftechno.com/assets/logo.png",
      "description": "Electrical engineering consulting firm specializing in earthing, lightning protection, power quality, EMI/EMC and electrical safety audits since 1994.",
      "foundingDate": "1994",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "KR Square, No.1073, 15th Cross, 30th Main, Banashankari 2nd Stage",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560070",
        "addressCountry": "IN"
      },
      "areaServed": [
        "India",
        "UAE",
        "Saudi Arabia",
        "Qatar",
        "Oman",
        "Kuwait",
        "Bahrain",
        "Singapore",
        "Malaysia",
        "Australia",
        "United Kingdom",
        "United States"
      ],
      "sameAs": [
        "https://www.youtube.com/@JEFgroup",
        "https://www.facebook.com/JEFTECHNO/",
        "https://www.linkedin.com/company/jefgroup/",
        "https://x.com/JeftechnoIndia",
        "https://www.indiamart.com/jef-techno-solutions-pvt-ltd/"
      ],
      "knowsAbout": [
        "Lightning Protection",
        "Earthing System Design",
        "Power Quality",
        "EMI/EMC",
        "Electrical Safety Audit",
        "IS/IEC 62305"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.jeftechno.com/#website",
      "url": "https://www.jeftechno.com/",
      "name": "JEF Techno",
      "publisher": {
        "@id": "https://www.jeftechno.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.jeftechno.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.jeftechno.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Electrical Engineering Consulting Company",
          "item": "https://www.jeftechno.com/"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.jeftechno.com/#webpage",
      "url": "https://www.jeftechno.com/",
      "name": "Electrical Engineering Consulting Company | JEF Techno",
      "description": "Corporate homepage introducing JEF Techno's 30-year track record in earthing, lightning protection, power quality, EMI/EMC and electrical safety audits for industrial, commercial and utility clients across India and the Middle East.",
      "isPartOf": {
        "@id": "https://www.jeftechno.com/#website"
      },
      "about": {
        "@id": "https://www.jeftechno.com/#organization"
      },
      "inLanguage": "en-IN"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What electrical engineering consulting company do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Electrical Engineering Consulting Company is the engineering process JEF Techno uses to protect structures, equipment and personnel, delivered in compliance with IS/IEC 62305."
          }
        },
        {
          "@type": "Question",
          "name": "Why is electrical engineering consulting company important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Electrical Engineering Consulting Company reduces the risk of equipment damage, downtime, fire and injury caused by lightning strikes, earth faults or transient overvoltages in industrial and commercial facilities."
          }
        },
        {
          "@type": "Question",
          "name": "What standards apply to electrical engineering consulting company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In India, electrical engineering consulting company follows IS/IEC 62305 and IS 3043; internationally JEF Techno also aligns with NFPA 780, IEEE 80 and IEC 62561 depending on the project location."
          }
        },
        {
          "@type": "Question",
          "name": "How much does electrical engineering consulting company cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cost depends on facility size, soil/site conditions and scope; JEF Techno provides a free site assessment and itemized quote before starting electrical engineering consulting company."
          }
        },
        {
          "@type": "Question",
          "name": "How long does electrical engineering consulting company take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A typical electrical engineering consulting company project takes 2-6 weeks from site survey to commissioning, depending on facility size and site access."
          }
        },
        {
          "@type": "Question",
          "name": "Who needs electrical engineering consulting company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Factories, warehouses, data centers, substations, telecom towers, solar plants, commercial buildings and any facility handling critical or high-value equipment."
          }
        },
        {
          "@type": "Question",
          "name": "How often should electrical engineering consulting company be inspected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "JEF Techno recommends annual inspection of lightning protection and earthing company, with a full re-assessment every 3-5 years or after any major structural change."
          }
        },
        {
          "@type": "Question",
          "name": "Can electrical engineering consulting company be retrofitted to an existing building?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — electrical engineering consulting company is commonly retrofitted; JEF Techno's team conducts a site survey to adapt the design to existing structural and access constraints."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between electrical engineering consulting company and lightning protection and earthing company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Electrical Engineering Consulting Company provides comprehensive design and safety assessments in compliance with IS/IEC 62305, while lightning protection and earthing company addresses a related but distinct engineering requirement — our consultants advise which (or both) your facility needs."
          }
        },
        {
          "@type": "Question",
          "name": "Does JEF Techno provide electrical engineering consulting company outside India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, JEF Techno delivers electrical engineering consulting company across the Middle East (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain) and Southeast Asia (Singapore, Malaysia) in addition to India."
          }
        }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
