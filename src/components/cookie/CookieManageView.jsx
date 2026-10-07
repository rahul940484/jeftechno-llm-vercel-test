"use client";
import CookieAccordionRow from "./CookieAccordionRow";
import cookieCategories from "./cookieData";

export default function CookieManageView({
  consent,
  onToggleConsent,
  expanded,
  onToggleExpand,
  onBack,
}) {
  return (
    <>
      {/* Header with back arrow */}
      <div
        style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}
      >
        <button
          onClick={onBack}
          aria-label="Back to Privacy Center"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#FF0000",
            fontSize: 20,
            padding: 0,
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          ←
        </button>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#1a1a1a" }}>
          Manage Consent Preferences
        </h2>
      </div>

      {/* Accordion rows */}
      {cookieCategories.map((cat) => (
        <CookieAccordionRow
          key={cat.id}
          cat={cat}
          expanded={!!expanded[cat.id]}
          onToggleExpand={() => onToggleExpand(cat.id)}
          consent={consent[cat.id] || false}
          onToggleConsent={() => onToggleConsent(cat.id)}
        />
      ))}
    </>
  );
}
