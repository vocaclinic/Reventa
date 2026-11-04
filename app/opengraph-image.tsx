import { ImageResponse } from "next/og";

export const alt = "Revanta RCM — Smarter Revenue. Stronger Healthcare.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0B1F33",
          backgroundImage:
            "radial-gradient(circle at 85% 10%, rgba(22,166,161,0.35), transparent 45%), radial-gradient(circle at 0% 100%, rgba(40,75,110,0.6), transparent 50%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 40 40">
            <rect width="40" height="40" rx="10" fill="#102A43" stroke="rgba(255,255,255,0.2)" />
            <path
              d="M14 29.5V10.5h7.25a5.75 5.75 0 0 1 0 11.5H14"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.4 22.2 25.3 27.9c1.1 1.3 2.4 1.8 4.2 1.6"
              fill="none"
              stroke="#3FC3BD"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, fontSize: 40, fontWeight: 700 }}>
            <span>Revanta</span>
            <span style={{ fontSize: 24, color: "#3FC3BD", letterSpacing: 4 }}>RCM</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>Smarter Revenue.</div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, color: "#3FC3BD" }}>
            Stronger Healthcare.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#C9D6E3" }}>
            Healthcare Revenue Cycle Management · Home Health · Hospice
          </div>
        </div>
      </div>
    ),
    size,
  );
}
