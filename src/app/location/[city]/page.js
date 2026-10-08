import { notFound } from "next/navigation";
import Home from "../../page"; // the existing home page (src/app/page.js)
import { cities } from "../data/cities";

// Only these city URLs are valid; anything else shows the 404 page
export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }) {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return {};

  return {
    title: `JEF Techno in ${city.name} | Electrical Engineering Services`,
    alternates: {
      canonical: `https://www.jeftechno.com/location/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }) {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  return <Home />;
}