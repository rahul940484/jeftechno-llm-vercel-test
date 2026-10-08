import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DiscussProject() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="section-container grid items-center gap-10 md:grid-cols-2">
        {/* Map */}
        <img
          src="/PanIndia/IndiaMap.png"
          alt="Map of India showing JEF locations"
          loading="lazy"
          className="mx-auto w-full max-w-md"
        />

        {/* Text + button */}
        <div>
          <h2 className="text-3xl font-bold uppercase text-red-600 md:text-5xl">
            Discuss Your Project
          </h2>
          <p className="mt-6 max-w-xl text-base text-neutral-800 md:text-lg">
            Let&apos;s talk about your business needs. Our team is here to
            understand your requirements and help you find the right solutions.
          </p>
          <a
            href="/get-in-touch"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-red-600 px-6 py-3 text-sm font-medium uppercase text-white transition hover:bg-red-700"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
