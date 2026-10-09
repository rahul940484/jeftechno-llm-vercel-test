"use client";

// src/components/CitySuggestion.js
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";
import { cities } from "@/app/location/data/cities";

const STORAGE_KEY = "jef-city-choice";
const REMEMBER_DAYS = 30;

// false = only suggest (recommended). true = also redirect first-time visitors
// who land on the home page "/" (never redirects bots or people who chose a city).
const AUTO_REDIRECT = false;

function readChoice() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return null;
    const ageInDays = (Date.now() - saved.at) / (1000 * 60 * 60 * 24);
    return ageInDays < REMEMBER_DAYS ? saved.status : null;
  } catch {
    return null; // storage blocked or corrupted: act as if nothing was saved
  }
}

function saveChoice(status) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ status, at: Date.now() }));
  } catch {
    // ignore: the banner may show again next visit, which is acceptable
  }
}

function looksLikeBot() {
  const ua = navigator.userAgent || "";
  return navigator.webdriver || /bot|crawl|spider|slurp|headless|lighthouse/i.test(ua);
}

export default function CitySuggestion() {
  const pathname = usePathname() || "";
  const router = useRouter();
  const [suggested, setSuggested] = useState(null);

  useEffect(() => {
    // Already on the city hub or a city page: nothing to suggest
    if (pathname.startsWith("/location")) return;
    // Bots see the normal page, and returning visitors who chose are left alone
    if (looksLikeBot() || readChoice()) return;

    // Local testing: open any page with ?geoCity=Mumbai
    const testCity = new URLSearchParams(window.location.search).get("geoCity");
    const url = testCity
      ? `/api/geo?city=${encodeURIComponent(testCity)}`
      : "/api/geo";

    let cancelled = false;

    fetch(url)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data?.city) return; // unsupported city or no data: do nothing

        if (AUTO_REDIRECT && pathname === "/") {
          saveChoice("redirected"); // so the visitor is never redirected twice
          router.replace(`/location/${data.city.slug}`);
          return;
        }
        setSuggested(data.city);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [pathname, router]);

  if (!suggested) return null;

  const handleDismiss = () => {
    saveChoice("dismissed");
    setSuggested(null);
  };

  const handleSelect = (event) => {
    const slug = event.target.value;
    if (!slug) return;
    saveChoice("selected");
    setSuggested(null);
    router.push(`/location/${slug}`);
  };

  return (
    <div
      role="region"
      aria-label="Location suggestion"
      className="fixed bottom-4 left-1/2 z-[70] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 rounded-lg border border-white/10 bg-[#2D2E30] p-4 text-white shadow-lg"
    >
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Dismiss location suggestion"
        className="absolute right-2 top-2 p-1 text-white/60 transition-colors hover:text-white"
      >
        <X size={18} />
      </button>

      <p className="pr-6 text-sm">
        Looks like you&apos;re in {suggested.name}. See JEF services in your city?
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Link
          href={`/location/${suggested.slug}`}
          onClick={() => saveChoice("selected")}
          className="rounded-full bg-[#FF0000] px-5 py-2 text-xs font-medium uppercase text-white transition hover:bg-red-700"
        >
          View {suggested.name}
        </Link>

        <select
          defaultValue=""
          onChange={handleSelect}
          aria-label="Choose another city"
          className="rounded-full border border-white/20 bg-[#2D2E30] px-3 py-2 text-xs text-white"
        >
          <option value="" disabled>
            Choose another city
          </option>
          {cities.map((city) => (
            <option key={city.slug} value={city.slug}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
