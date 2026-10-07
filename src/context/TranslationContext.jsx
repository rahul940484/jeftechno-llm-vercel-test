'use client';

import React, { createContext, useState, useEffect } from 'react';

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [isArabic, setIsArabic] = useState(false);

  const toggleTranslation = (lang) => {
    const selectLanguage = document.querySelector(".goog-te-combo");
    if (selectLanguage) {
      const newLanguage = lang || (isArabic ? "en" : "ar");
      selectLanguage.value = newLanguage;
      selectLanguage.dispatchEvent(new Event("change"));
      setIsArabic(newLanguage === "ar");
    }
  };

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <TranslationContext.Provider value={{ isArabic, toggleTranslation }}>
      {children}
    </TranslationContext.Provider>
  );
};