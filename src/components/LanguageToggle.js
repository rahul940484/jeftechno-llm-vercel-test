"use client";

// src/components/LanguageToggle.js
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { TranslationContext } from "@/context/TranslationContext";
import { CITY_LANGUAGES, LANGUAGE_NAMES } from "@/app/location/data/cityLanguages";

export default function LanguageToggle() {
  const { language, setLanguage } = useContext(TranslationContext);
  const pathname = usePathname() || "";

  const match = pathname.match(/^\/location\/([^/]+)/);
  const cityLanguage = match ? CITY_LANGUAGES[match[1]] : null;

  // City page: English + that city's language.
  // Other pages: English + whichever language is currently on (so visitors can switch back).
  const regional = cityLanguage ?? (language !== "en" ? language : null);

  // Nothing to switch between (for example the home page in English)
  if (!regional) return null;

  return (
    // notranslate: stops Google Translate from translating the button labels themselves
    <div
      translate="no"
      role="group"
      aria-label="Language"
      className="notranslate flex items-center gap-3 text-xs font-medium uppercase tracking-[2px]"
    >
      {["en", regional].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
          className={`border-b-2 pb-1 transition-colors duration-300 ${
            language === code
              ? "border-[#FF0000] text-white"
              : "border-transparent text-white/60 hover:text-white"
          }`}
        >
          {LANGUAGE_NAMES[code] ?? code}
        </button>
      ))}
    </div>
  );
}