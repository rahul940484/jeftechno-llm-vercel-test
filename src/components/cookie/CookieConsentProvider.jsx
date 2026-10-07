"use client";
import { useState, useEffect } from "react";
import CookieTriggerButton from "./CookieTriggerButton";
import CookieModal from "./CookieModal";

const COOKIE_KEY = "jef_cookie_consent";

const defaultConsent = {
  performance: false,
  functional: false,
  targeting: false,
};

export default function CookieConsentProvider() {
  const [visible, setVisible]         = useState(false);
  const [detailView, setDetailView]   = useState(false);
  const [expanded, setExpanded]       = useState({});
  const [consent, setConsent]         = useState(defaultConsent);

  // Auto-show on first visit
  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  // ── Helpers ──────────────────────────────────────────────
  const saveAndClose = (consentObj) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(consentObj));
    setVisible(false);
  };

  const handleAllowAll = () => {
    const all = { performance: true, functional: true, targeting: true };
    setConsent(all);
    saveAndClose(all);
  };

  const handleRejectAll = () => {
    setConsent(defaultConsent);
    saveAndClose(defaultConsent);
  };

  const handleConfirm = () => saveAndClose(consent);

  const handleToggleConsent = (id) =>
    setConsent((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleToggleExpand = (id) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  // Navigate to manage view, optionally opening a specific category
  const handleSetDetailView = (value, openCatId) => {
    setDetailView(value);
    if (value && openCatId) {
      setExpanded({ [openCatId]: true });
    }
  };

  const handleOpenModal = () => {
    setDetailView(false);
    setVisible(true);
  };

  // ── Render ───────────────────────────────────────────────
  return (
    <>
      <CookieTriggerButton onClick={handleOpenModal} />

      <CookieModal
        visible={visible}
        onClose={() => setVisible(false)}
        detailView={detailView}
        setDetailView={handleSetDetailView}
        consent={consent}
        onToggleConsent={handleToggleConsent}
        expanded={expanded}
        onToggleExpand={handleToggleExpand}
        onAllowAll={handleAllowAll}
        onRejectAll={handleRejectAll}
        onConfirm={handleConfirm}
      />
    </>
  );
}
