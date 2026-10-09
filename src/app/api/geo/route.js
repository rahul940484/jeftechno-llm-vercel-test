// src/app/api/geo/route.js
import { NextResponse } from "next/server";
import { matchCity } from "@/app/location/data/cityMatch";

// Depends on the visitor's request, so it must never be cached or prerendered
export const dynamic = "force-dynamic";

const NO_STORE = { "Cache-Control": "private, no-store" };

export async function GET(request) {
  try {
    // Vercel adds these headers in deployment. They don't exist on localhost.
    let rawCity = request.headers.get("x-vercel-ip-city");
    const country = request.headers.get("x-vercel-ip-country");

    // Local testing only: /api/geo?city=Mumbai
    if (!rawCity && process.env.NODE_ENV !== "production") {
      rawCity = new URL(request.url).searchParams.get("city");
    }

    // JEF's cities are all in India, so ignore visitors from elsewhere
    // (this also covers Google's crawler, which usually crawls from the US)
    if (country && country !== "IN") {
      return NextResponse.json({ city: null }, { headers: NO_STORE });
    }

    const city = matchCity(rawCity);

    return NextResponse.json(
      { city: city ? { name: city.name, slug: city.slug } : null },
      { headers: NO_STORE }
    );
  } catch {
    // Location data is optional, so never fail loudly
    return NextResponse.json({ city: null }, { headers: NO_STORE });
  }
}
