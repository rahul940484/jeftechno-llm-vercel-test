import FAQPageComponent from "@/components/FAQPageComponent";

const faqs = [{"q": "How can I contact JEF Techno?", "a": "Via the enquiry form at jeftechno.com/get-in-touch, or directly at one of JEF's five offices in Bengaluru (India), Abu Dhabi and Masdar City (UAE), Al Khobar (Saudi Arabia), or Plano, Texas (USA)."}, {"q": "What is JEF Techno's head office address?", "a": "JEF Techno's Global Head Office is JEF Techno Solutions Pvt Ltd, KR Square, No.1073, 15th Cross, 30th Main, Banashankari 2nd Stage, Bengaluru-560070, India."}, {"q": "What is JEF Techno's phone number in India?", "a": "JEF Techno's India Global Head Office can be reached at +91 080 37569000."}, {"q": "Does JEF Techno have offices outside India?", "a": "Yes — JEF Techno / JEF Group has offices in Abu Dhabi and Masdar City (UAE), Al Khobar (Saudi Arabia), and Plano, Texas (USA), alongside its Bengaluru, India Global HQ."}];

export const metadata = {
  title: "Contact Us — Frequently Asked Questions | JEF Techno",
  description: "Find answers to the most frequently asked questions about Contact Us. JEF Techno's expert answers on electrical engineering services.",
  alternates: {
    canonical: "https://www.jeftechno.com/get-in-touch/faq",
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
        title="Contact Us — Frequently Asked Questions"
        parentTitle="Contact Us"
        parentPath="/get-in-touch"
        faqs={faqs}
      />
    </>
  );
}
