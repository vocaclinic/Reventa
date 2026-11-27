import { ImageResponse } from "next/og";
import {
  CROSS_GRADIENT,
  CROSS_PATH,
  MARK_BODY_WIDTH,
  MARK_VIEWBOX,
  R_BODY_PATH,
  R_LEG_PATH,
  V_ARM_GRADIENT_Y,
  V_ARM_PATH,
  V_ARM_WIDTH,
  markColors,
} from "@/components/brand/paths";

const mark = markColors.dark;
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
          background: "#243F70",
          backgroundImage:
            "radial-gradient(circle at 88% 0%, rgba(212,175,103,0.38), transparent 48%), radial-gradient(circle at 0% 100%, rgba(36,63,112,0.7), transparent 52%)",
          color: "#FFFFFF",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width="84" height="84" viewBox={MARK_VIEWBOX}>
            <defs>
              <linearGradient
                id="arm"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1={V_ARM_GRADIENT_Y[0]}
                x2="0"
                y2={V_ARM_GRADIENT_Y[1]}
              >
                <stop offset="0" stopColor={mark.armTop} />
                <stop offset="1" stopColor={mark.body} />
              </linearGradient>
              <linearGradient id="cross" gradientUnits="userSpaceOnUse" {...CROSS_GRADIENT}>
                <stop offset="0" stopColor={mark.cross[0]} />
                <stop offset="0.5" stopColor={mark.cross[1]} />
                <stop offset="1" stopColor={mark.cross[2]} />
              </linearGradient>
            </defs>
            <path d={R_BODY_PATH} fill="none" stroke={mark.body} strokeWidth={MARK_BODY_WIDTH} />
            <path d={R_LEG_PATH} fill={mark.body} />
            <path d={V_ARM_PATH} fill="none" stroke="url(#arm)" strokeWidth={V_ARM_WIDTH} strokeLinecap="round" />
            <path d={CROSS_PATH} fill="url(#cross)" />
          </svg>
          <div style={{ fontSize: 52, fontWeight: 700, letterSpacing: -1, fontFamily: "sans-serif" }}>Revdian</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, lineHeight: 1, letterSpacing: -3 }}>Revenue,</div>
          <div style={{ fontSize: 104, lineHeight: 1.05, letterSpacing: -3, color: "#D4AF67", fontStyle: "italic" }}>
            guarded.
          </div>
          <div
            style={{
              marginTop: 36,
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 26,
              color: "#C8D1E2",
              fontFamily: "sans-serif",
              letterSpacing: 1,
            }}
          >
            <div style={{ width: 48, height: 1, background: "#D4AF67" }} />
            Healthcare Revenue Cycle Management · Home Health · Hospice
          </div>
        </div>
      </div>
    ),
    size,
  );
}
