import { ImageResponse } from "next/og";
import { R_BOWL_PATH, R_LEG_PATH, SHIELD_PATH } from "@/components/brand/paths";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline} Healthcare revenue cycle management.`;
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
          padding: "72px 84px",
          background: "#05080F",
          backgroundImage:
            "radial-gradient(circle at 88% 0%, rgba(184,150,79,0.38), transparent 48%), radial-gradient(circle at 0% 100%, rgba(52,66,94,0.7), transparent 52%)",
          color: "#FFFFFF",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width="76" height="76" viewBox="0 0 40 40">
            <path d={SHIELD_PATH} fill="#111A2E" stroke="#D4B97F" strokeWidth="1.3" />
            <path
              d={R_BOWL_PATH}
              fill="none"
              stroke="#FAF8F3"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={R_LEG_PATH}
              fill="none"
              stroke="#D4B97F"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ fontSize: 50, letterSpacing: -1 }}>Revdian</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, lineHeight: 1, letterSpacing: -3 }}>Revenue,</div>
          <div style={{ fontSize: 104, lineHeight: 1.05, letterSpacing: -3, color: "#D4B97F", fontStyle: "italic" }}>
            guarded.
          </div>
          <div
            style={{
              marginTop: 36,
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 26,
              color: "#C3C9D6",
              fontFamily: "sans-serif",
              letterSpacing: 1,
            }}
          >
            <div style={{ width: 48, height: 1, background: "#D4B97F" }} />
            Healthcare Revenue Cycle Management · Home Health · Hospice
          </div>
        </div>
      </div>
    ),
    size,
  );
}
