'use client';

import React, { createContext, useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { CITY_LANGUAGES } from '@/app/location/data/cityLanguages';

export const TranslationContext = createContext();

const STORAGE_KEY = 'jef-language';

// Saved shape: { code: "hi", manual: true|false, city: "delhi"|null }
// manual = the visitor picked it with the navbar toggle, while on the page of `city`
function readSaved() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

function save(code, manual, city) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ code, manual, city }));
  } catch {
    // storage blocked: the language still works for this visit
  }
}

// "/location/mumbai/..." -> "mumbai"; any other page (or unknown city) -> null
function getCitySlug(pathname) {
  const match = pathname.match(/^\/location\/([^/]+)/);
  return match && CITY_LANGUAGES[match[1]] ? match[1] : null;
}

// Which language is the page showing right now? (null = translated, target unknown)
function currentPageLanguage() {
  const html = document.documentElement;
  const translated =
    html.classList.contains('translated-ltr') || html.classList.contains('translated-rtl');
  if (!translated) return 'en';

  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]+\/([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

function pageShows(code) {
  const current = currentPageLanguage();
  if (code === 'en') return current === 'en';
  return current === null || current === code;
}

export const TranslationProvider = ({ children }) => {
  const pathname = usePathname() || '';
  const pathnameRef = useRef(pathname);
  pathnameRef.current = pathname;

  const [language, setLanguageState] = useState('en');
  const languageRef = useRef('en');

  // Asks Google's widget to switch, then checks that the page really changed.
  // Google sometimes ignores the first request, so it re-sends up to 3 times.
  const applyLanguage = useCallback((code, attempt = 0, waitTries = 0) => {
    if (languageRef.current !== code) return; // a newer choice replaced this one
    if (pageShows(code)) return; // already showing it

    const select = document.querySelector('.goog-te-combo');
    if (!select) {
      // Google's script loads late: keep waiting (up to ~10s)
      if (waitTries < 40) {
        setTimeout(() => applyLanguage(code, attempt, waitTries + 1), 250);
      }
      return;
    }

    select.value = code;
    select.dispatchEvent(new Event('change'));

    if (attempt < 3) {
      setTimeout(() => applyLanguage(code, attempt + 1), 800);
    }
  }, []);

  const setLanguage = useCallback(
    (code, manual = true) => {
      save(code, manual, getCitySlug(pathnameRef.current));
      languageRef.current = code;
      setLanguageState(code);
      applyLanguage(code);
    },
    [applyLanguage]
  );

  // Kept so existing code that calls toggleTranslation() keeps working
  const toggleTranslation = (lang) => {
    setLanguage(lang || (languageRef.current === 'ar' ? 'en' : 'ar'));
  };

  // Load the Google Translate widget once
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ar,mr,gu,hi,kn,ta,te,bn,pa,or,ml',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    if (document.querySelector('script[src*="translate_a/element.js"]')) return;

    const addScript = document.createElement('script');
    addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(addScript);
  }, []);

  // Restore the language saved on an earlier visit (runs once, on first load)
  useEffect(() => {
    const saved = readSaved();
    if (!saved || saved.code === 'en') return;

    // On a city page the city's own language wins,
    // unless the visitor chose a language on this very city page
    const slug = getCitySlug(pathname);
    if (slug && !(saved.manual && saved.city === slug)) return;

    languageRef.current = saved.code;
    setLanguageState(saved.code);
    applyLanguage(saved.code);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Opening a city page: switch to that city's language by default
  useEffect(() => {
    const slug = getCitySlug(pathname);
    if (!slug) return;

    // The visitor chose a language on this same city page (for example before a reload): keep it
    const saved = readSaved();
    if (saved?.manual && saved.city === slug) return;

    setLanguage(CITY_LANGUAGES[slug], false);
  }, [pathname, setLanguage]);

  return (
    <TranslationContext.Provider
      value={{
        language,
        setLanguage,
        isArabic: language === 'ar',
        toggleTranslation,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};