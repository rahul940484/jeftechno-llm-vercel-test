// src/app/location/data/cityMatch.js
import { cities } from "./cities";

// Other names a geolocation database may return for the same city.
// Keys are lowercase; values are slugs from cities.js.
const ALIASES = {
  bengaluru: "bangalore",
  bombay: "mumbai",
  calcutta: "kolkata",
  madras: "chennai",
  "new delhi": "delhi",
  vizag: "visakhapatnam",
  thiruvananthapuram: "trivandrum",
  belagavi: "belgaum",
  mangaluru: "mangalore",
  baroda: "vadodara",
  ahmadabad: "ahmedabad",
  cochin: "kochi",
};

// Returns the matching city object from cities.js, or null if JEF doesn't list it.
export function matchCity(rawName) {
  if (!rawName) return null;

  let name = rawName;
  try {
    name = decodeURIComponent(rawName); // Vercel sends "New%20Delhi"
  } catch {
    // keep the raw value if it can't be decoded
  }

  const key = name.trim().toLowerCase();
  const slug = ALIASES[key] ?? key.replace(/\s+/g, "-");

  return cities.find((city) => city.slug === slug) ?? null;
}
