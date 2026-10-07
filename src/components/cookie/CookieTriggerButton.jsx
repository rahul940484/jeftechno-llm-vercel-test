"use client";

export default function CookieTriggerButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Cookie Settings"
      title="Cookie Settings"
      style={{
        position: "fixed",
        bottom: 20,
        left: 20,
        zIndex: 9998,
        width: 42,
        height: 42,
        borderRadius: "50%",
        background: "#FF0000",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
        transition: "background 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#cc0000";
        e.currentTarget.style.transform = "scale(1.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#FF0000";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {/* Shield with checkmark icon */}
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1L2 5V10.5C2 15.3 5.6 19.7 10 21C14.4 19.7 18 15.3 18 10.5V5L10 1Z"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M7 11l2 2 4-4"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
