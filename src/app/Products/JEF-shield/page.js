import Solution from "./solution";

export const metadata = {
  title: "Jef Shield Lightning Protection | JEF Techno  [44 chars]",
  description: "",
  keywords: "JEF Shield lightning and surge protection system, JEF Shield surge protection product, proprietary lightning protection system, maintenance-free earthing electrode, JEF Shield lightning protection services, JEF Shield lightning protection company, JEF Shield lightning protection for industrial plants, JEF Shield lightning protection consultant, JEF Shield lightning protection design and installation, best JEF Shield lightning protection company in India, JEF Shield lightning protection company in UAE, how to select a JEF Shield lightning protection provider for a factory, JEF Shield lightning protection as per IS/IEC 62305, turnkey JEF Shield lightning protection for industrial plants, JEF Shield lightning protection cost for commercial building, certified JEF Shield lightning protection consultant near me, JEF Shield lightning protection for data centers and warehouses, earthing system, lightning arrester, surge protection device, soil resistivity, earth pit testing, risk assessment IEC 62305, equipotential bonding, down conductor, air termination network, touch and step potential, electrical safety compliance, power system reliability, industrial electrical audit",
  alternates: {
    canonical: "https://www.jeftechno.com/products/jef-shield",
  },
  openGraph: {
    title: "Jef Shield Lightning Protection | JEF Techno  [44 chars]",
    description: "",
    url: "https://www.jeftechno.com/products/jef-shield",
    type: "website",
    siteName: "Jef Techno",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jef Shield Lightning Protection | JEF Techno  [44 chars]",
    description: "",
  },
};

export default function Page() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "JEF Shield",
    description:
      "Advanced lightning protection systems with wide-area coverage and high lightning current withstand capacity.",
    brand: {
      "@type": "Brand",
      name: "JEF",
    },
    category: "Electrical Safety / Lightning Protection",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Solution />
    </>
  );
}
