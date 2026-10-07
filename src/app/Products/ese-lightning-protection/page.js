import Solution5 from "./solution5";

export const metadata = {
  title: "Ese Lightning Protection System | JEF Techno  [44 chars]",
  description: "",
  keywords: "ESE lightning protection system, early streamer emission air terminal, ESE lightning arrester, early streamer emission technology, ESE lightning protection system services, ESE lightning protection system company, ESE lightning protection system for industrial plants, ESE lightning protection system consultant, ESE lightning protection system design and installation, best ESE lightning protection system company in India, ESE lightning protection system company in UAE, how to select a ESE lightning protection system provider for a factory, ESE lightning protection system as per IS/IEC 62305, turnkey ESE lightning protection system for industrial plants, ESE lightning protection system cost for commercial building, certified ESE lightning protection system consultant near me, ESE lightning protection system for data centers and warehouses, earthing system, lightning arrester, surge protection device, soil resistivity, earth pit testing, risk assessment IEC 62305, equipotential bonding, down conductor, air termination network, touch and step potential, electrical safety compliance, power system reliability, industrial electrical audit",
  alternates: {
    canonical: "https://www.jeftechno.com/products/ese-lightning-protection",
  },
  openGraph: {
    title: "Ese Lightning Protection System | JEF Techno  [44 chars]",
    description: "",
    url: "https://www.jeftechno.com/products/ese-lightning-protection",
    type: "website",
    siteName: "Jef Techno",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ese Lightning Protection System | JEF Techno  [44 chars]",
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
        "name": "What is Early Streamer Emission (ESE) technology?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ESE technology uses the atmospheric gradient to generate ionization, which effectively increases the protected volume compared to conventional lightning rods. This allows a single ESE rod to protect a much larger area."
        }
      },
      {
        "@type": "Question",
        "name": "Is ESE technology compliant with international standards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ESE systems like Nimbus® and NLP 2200 are designed and tested according to the NFC 17-102 standard."
        }
      }
    ]
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ESE Lightning Protection",
    "description": "Next-generation ESE lightning rods with protection radius up to 120m.",
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
      <Solution5 />
    </>
  );
}
