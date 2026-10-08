import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "../data/cities";

export default function CityGrid() {
  return (
    <section className="section-container py-16">
      {/* Section heading */}
      <p className="text-base uppercase text-red-600">National Explorer</p>
      <h2 className="mt-2 text-xl font-semibold uppercase text-neutral-900 md:text-2xl">
        Explore by City
      </h2>
      <p className="mt-3 max-w-2xl text-base text-neutral-700">
        Discover information, resources and opportunities across India. Select a
        city to find what&apos;s relevant for your business needs.
      </p>

      {/* City cards */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/location/${city.slug}`}
            className="group flex items-center justify-between rounded-lg border border-neutral-300 bg-white px-6 py-6 transition hover:border-red-600 hover:shadow-md"
          >
            <span className="flex items-center gap-4">
              <img
                src="/PanIndia/PinIcon.svg"
                alt=""
                aria-hidden="true"
                className="h-8 w-8 shrink-0"
              />
              <span className="text-base font-normal uppercase text-neutral-900 md:text-lg">
                {city.name}
              </span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 text-neutral-900 transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </section>
  );
}
