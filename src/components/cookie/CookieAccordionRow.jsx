"use client";
import CookieToggle from "./CookieToggle";

export default function CookieAccordionRow({
  cat,
  expanded,
  onToggleExpand,
  consent,
  onToggleConsent,
}) {
  return (
    <div
      style={{
        border: "1px solid #e8e8e8",
        borderRadius: 4,
        overflow: "hidden",
        marginBottom: 8,
      }}
    >
      {/* ── Row Header ── */}
      <div
        onClick={onToggleExpand}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "13px 16px",
          cursor: "pointer",
          background: expanded ? "#f9f9f9" : "#fff",
          userSelect: "none",
          transition: "background 0.15s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontSize: 18,
              fontWeight: 300,
              color: "#FF0000",
              lineHeight: 1,
              minWidth: 14,
              textAlign: "center",
            }}
          >
            {expanded ? "−" : "+"}
          </span>
          <span style={{ fontWeight: 600, fontSize: 14, color: "#1a1a1a" }}>
            {cat.title}
          </span>
        </div>

        {cat.alwaysActive ? (
          <span style={{ fontSize: 12, color: "#FF0000", fontWeight: 600, flexShrink: 0 }}>
            Always Active
          </span>
        ) : (
          // Stop propagation so clicking the toggle doesn't collapse the row
          <div onClick={(e) => e.stopPropagation()}>
            <CookieToggle checked={consent} onChange={onToggleConsent} />
          </div>
        )}
      </div>

      {/* ── Expandable Description ── */}
      <div
        style={{
          maxHeight: expanded ? 300 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p
          style={{
            margin: 0,
            padding: "0 16px 16px",
            fontSize: 13,
            color: "#555",
            lineHeight: 1.75,
          }}
        >
          {cat.description}
        </p>
      </div>
    </div>
  );
}
