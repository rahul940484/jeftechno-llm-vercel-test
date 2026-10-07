import FAQPageComponent from "@/components/FAQPageComponent";

const faqs = [{"q": "What is JEF Techno / JEF Group?", "a": "JEF is a specialist electrical engineering company founded in 1994, focused on earthing, lightning protection, power system studies and electrical safety audits, with a presence in 30+ countries and 10K+ customers."}, {"q": "How many patents does JEF hold?", "a": "JEF holds 9 granted patents across India, the United States and the European Union, covering its proprietary JEF Shield, JEF Safety Audit Tool and JEF E-Build technologies."}, {"q": "Where is JEF Techno headquartered?", "a": "JEF Techno's Global HQ is in Bengaluru, India, with a GCC HQ in Abu Dhabi, UAE, plus offices in Masdar City (UAE), Al Khobar (Saudi Arabia), and Plano, Texas (USA)."}, {"q": "Who leads JEF Group?", "a": "Prashanth BG is the Chairman and Managing Director of JEF Group."}, {"q": "What is JEF Shield?", "a": "JEF Shield is JEF's patented, automated software for lightning protection risk assessment to IEC 62305-2, producing a report and bill of materials in under 90 seconds."}];

export const metadata = {
  title: "About Us — Frequently Asked Questions | JEF Techno",
  description: "Find answers to the most frequently asked questions about About Us. JEF Techno's expert answers on electrical engineering services.",
  alternates: {
    canonical: "https://www.jeftechno.com/about-us/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQPageComponent
        title="About Us — Frequently Asked Questions"
        parentTitle="About Us"
        parentPath="/about-us"
        faqs={faqs}
      />
    </>
  );
}
