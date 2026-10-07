import Solution6 from "./solution6";

export const metadata = {
  title: "Conventional Lightning Protection System | JEF Techno  [53 chars]",
  description: "",
  keywords: "conventional lightning protection system (CLPS), Franklin rod lightning arrester, mesh cage lightning protection, air termination network, conventional lightning protection system services, conventional lightning protection system company, conventional lightning protection system for industrial plants, conventional lightning protection system consultant, conventional lightning protection system design and installation, best conventional lightning protection system company in India, conventional lightning protection system company in UAE, how to select a conventional lightning protection system provider for a factory, conventional lightning protection system as per IS/IEC 62305, turnkey conventional lightning protection system for industrial plants, conventional lightning protection system cost for commercial building, certified conventional lightning protection system consultant near me, conventional lightning protection system for data centers and warehouses, earthing system, lightning arrester, surge protection device, soil resistivity, earth pit testing, risk assessment IEC 62305, equipotential bonding, down conductor, touch and step potential, electrical safety compliance, power system reliability, industrial electrical audit, grounding and bonding",
  alternates: {
    canonical: "https://www.jeftechno.com/products/clps-products",
  },
  openGraph: {
    title: "Conventional Lightning Protection System | JEF Techno  [53 chars]",
    description: "",
    url: "https://www.jeftechno.com/products/clps-products",
    type: "website",
    siteName: "Jef Techno",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conventional Lightning Protection System | JEF Techno  [53 chars]",
    description: "",
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is lightning protection a legal requirement in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For certain building types and uses, yes. The National Building Code 2016 (NBC 2016) requires lightning protection for buildings above defined heights and for buildings that house hazardous, explosive, or particularly sensitive contents."
        }
      },
      {
        "@type": "Question",
        "name": "Should the lightning protection earthing system be kept separate from the electrical system earth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. IS/IEC 62305 requires the LPS earthing system to be interconnected with all other earthing systems in the structure to prevent destructive arcing between equipment connected to different earth references."
        }
      },
      {
        "@type": "Question",
        "name": "How often does a lightning protection system need to be inspected?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IEC 62305-3 requires periodic inspection and maintenance. Intervals depend on the Lightning Protection Level (LPL) and environmental conditions. Full inspections are also required after any confirmed lightning strike event."
        }
      },
      {
        "@type": "Question",
        "name": "What changed practically with the 2024 edition of IEC 62305?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 2024 revision introduces updated risk assessment methods using ground strike-point density (NSG), specified minimum thicknesses for metal components, and strengthened requirements for SPD dimensioning and electronic system protection."
        }
      },
      {
        "@type": "Question",
        "name": "What does JEF's 200 kA type test mean for a specifier?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It means every JEF component has been verified to withstand twice the current magnitude (200 kA) demanded by the IEC 62561 standard (100 kA), providing a significant margin of safety and confidence."
        }
      }
    ]
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Comprehensive Lightning Protection Solutions (CLPS)",
    "description": "A standards-compliant lightning protection system including air termination, down conductors, earthing, equipotential bonding, and surge protective devices.",
    "brand": {
      "@type": "Brand",
      "name": "JEF"
    },
    "category": "Electrical Safety / Lightning Protection"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Solution6 />
    </>
  );
}
