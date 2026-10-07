import Navigation from "@/components/Navigation";
import FAQPageComponent from "@/components/FAQPageComponent";

export const metadata = {
  title: "FAQ | JEF Group of Companies",
  description: "Frequently Asked Questions about our electrical engineering, earthing, lightning protection, and safety audits services.",
};

import { faqData } from "./faqData";

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQPageComponent 
        title="Frequently Asked Questions" 
        parentTitle="Home" 
        parentPath="/" 
        faqs={faqData.map(item => ({ q: item.question, a: item.answer }))} 
      />
    </>
  );
}
