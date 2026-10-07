import Link from "next/link";

export default function FAQBanner({ faqPath }) {
  return (
    <section className="w-full bg-[#1a1a1c] border-t border-white/10 py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white/50 text-xs font-montserrat uppercase tracking-widest mb-1">
            Have questions?
          </p>
          <h2 className="text-white font-bold font-montserrat text-xl md:text-2xl">
            Frequently Asked Questions
          </h2>
        </div>
        <Link
          href={faqPath}
          className="shrink-0 inline-flex items-center gap-3 bg-[#FF0000] hover:bg-[#cc0000] text-white font-montserrat text-sm uppercase tracking-widest px-7 py-3.5 rounded-full transition-all duration-200 hover:gap-4"
        >
          View All FAQs
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
