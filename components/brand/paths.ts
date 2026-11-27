/**
 * Shared SVG geometry for the Revdian "+RV" symbol.
 *
 * Redrawn from the approved artwork ("Final logo — light and dark.pdf"):
 * a gold medical cross set into the stem of an "R", whose leg runs down into a
 * "V" (Revenue) whose right arm rises from navy into gold.
 *
 * All values share one square viewBox, so the mark drops into any square box.
 */
export const MARK_VIEWBOX = "48 41 576 576";

/** R stem, top bar and bowl: one stroke of MARK_BODY_WIDTH, square corner, butt ends. */
export const R_BODY_PATH = "M164.5 169.5V122H296A99 99 0 0 1 296 320H280";
export const MARK_BODY_WIDTH = 66;

/** R leg flowing into the rounded base of the V (filled shape). */
export const R_LEG_PATH =
  "M280 317.5V376.3L371.2 586A48.2 48.2 0 0 0 462 579.9L484.5 500H425.5L414.6 538.6L318.4 317.5Z";

/** Rising right arm of the V: a round-capped stroke painted with the arm gradient. */
export const V_ARM_PATH = "M576.1 72.5L436.4 568";
export const V_ARM_WIDTH = 58.5;
/** The arm gradient runs top (gold) to bottom (body colour) between these y values. */
export const V_ARM_GRADIENT_Y = [75, 465] as const;

/** Medical cross that replaces the lower part of the R stem (filled shape). */
export const CROSS_PATH = "M130 197h72v80h55v68h-55v63h-72v-63H66v-68h64Z";
/** Diagonal gradient across the cross, top-left (light) to bottom-right (deep). */
export const CROSS_GRADIENT = { x1: 66, y1: 197, x2: 257, y2: 408 } as const;

export const markColors = {
  light: {
    body: "#1C335F",
    armTop: "#C6A15B",
    cross: ["#DEBE85", "#C19C56", "#9C7A3D"],
  },
  dark: {
    body: "#F7F4ED",
    armTop: "#DBBA75",
    cross: ["#E8C990", "#CFAD66", "#A8843F"],
  },
} as const;
