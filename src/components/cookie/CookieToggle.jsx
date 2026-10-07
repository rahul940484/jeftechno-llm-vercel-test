"use client";

export default function CookieToggle({ checked, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={{
        width: 44,
        height: 24,
        borderRadius: 12,
        border: "none",
        cursor: "pointer",
        padding: 2,
        background: checked ? "#FF0000" : "#ccc",
        transition: "background 0.25s",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
      }}
    >
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "#fff",
          display: "block",
          transition: "transform 0.25s",
          transform: checked ? "translateX(20px)" : "translateX(0)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
        }}
      />
    </button>
  );
}
