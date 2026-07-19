interface ImagePlaceholderProps {
  alt: string;
  caption?: string;
  width?: string;
  height?: string;
}

export function ImagePlaceholder({
  alt,
  caption,
  width = "800",
  height = "400",
}: ImagePlaceholderProps) {
  return (
    <div
      style={{
        border: "2px dashed #94a3b8",
        borderRadius: "8px",
        backgroundColor: "#f1f5f9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: "32px 16px",
        width: "100%",
        minHeight: "160px",
        color: "#64748b",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
        boxSizing: "border-box",
      }}
    >
      {/* Camera/image icon */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="7" width="18" height="14" rx="2" ry="2" />
        <circle cx="9" cy="13" r="2" />
        <path d="M21 15l-5-5L5 21" />
        <line x1="8" y1="3" x2="16" y2="3" />
        <line x1="12" y1="3" x2="12" y2="7" />
      </svg>

      {/* Alt text */}
      <strong
        style={{
          fontSize: "14px",
          textAlign: "center",
          color: "#475569",
          lineHeight: 1.4,
        }}
      >
        {alt}
      </strong>

      {/* Optional caption */}
      {caption && (
        <span
          style={{
            fontSize: "12px",
            textAlign: "center",
            color: "#94a3b8",
            lineHeight: 1.4,
          }}
        >
          {caption}
        </span>
      )}

      {/* Dimensions label */}
      <span
        style={{
          fontSize: "11px",
          textAlign: "center",
          color: "#94a3b8",
          marginTop: "8px",
        }}
      >
        {width} x {height}px — Replace with actual screenshot
      </span>
    </div>
  );
}
