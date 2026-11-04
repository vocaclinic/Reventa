import {
  Banknote,
  CalendarClock,
  ChartColumnIncreasing,
  Check,
  FileText,
  RefreshCw,
  Send,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Decorative, dashboard-inspired illustration of revenue cycle operations.
 * It intentionally shows no real values: bars and lines are abstract shapes,
 * and the card is labeled as illustrative.
 */
export function HeroDashboard() {
  return (
    <figure className="relative mx-auto w-full max-w-[600px]" aria-labelledby="hero-visual-caption">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-br from-teal-100/80 via-white/0 to-navy-100/70 blur-2xl"
      />

      <div className="relative">
      <div className="overflow-hidden rounded-[22px] border border-line bg-white shadow-lift" aria-hidden="true">
        {/* Window bar */}
        <div className="flex items-center justify-between border-b border-line bg-offwhite/80 px-5 py-3">
          <div className="flex items-center gap-3">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-navy-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-navy-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-navy-200" />
            </span>
            <span className="font-display text-[13px] font-semibold text-navy-800">Revenue Cycle Overview</span>
            <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-teal-700 uppercase ring-1 ring-teal-100">
              Illustrative
            </span>
          </div>
        </div>

        <div className="grid gap-3.5 p-4 sm:p-5">
          {/* KPI tiles */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
            <Tile label="Claims in workflow" short="Claims">
              <div className="mt-3 flex h-2 overflow-hidden rounded-full">
                <span className="w-[38%] bg-teal-500" />
                <span className="w-[27%] bg-teal-200" />
                <span className="w-[20%] bg-navy-600" />
                <span className="w-[15%] bg-navy-100" />
              </div>
              <SkeletonLines />
            </Tile>
            <Tile label="A/R by aging" short="A/R aging">
              <div className="mt-2.5 flex h-9 items-end gap-1.5">
                {[88, 62, 40, 24].map((h, i) => (
                  <span
                    key={h}
                    className={cn("flex-1 rounded-t-[3px]", i === 0 ? "bg-teal-500" : i === 3 ? "bg-navy-200" : "bg-teal-200")}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-1 flex justify-between text-[8.5px] font-medium text-muted">
                <span>0–30</span>
                <span>90+</span>
              </div>
            </Tile>
            <Tile label="Payments posted" short="Payments">
              <svg viewBox="0 0 100 36" className="mt-2.5 h-9 w-full" preserveAspectRatio="none">
                <path
                  d="M0 30 C 12 28, 18 22, 30 23 S 50 14, 62 16 S 82 6, 100 5"
                  fill="none"
                  stroke="#16A6A1"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <SkeletonLines short />
            </Tile>
          </div>

          {/* Workflow stepper */}
          <div className="rounded-2xl border border-line p-3.5 sm:p-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-navy-800">Revenue cycle workflow</span>
              <span className="text-[10px] text-muted">Sample status</span>
            </div>
            <ol className="mt-3.5 grid grid-cols-6 gap-1">
              {[
                { label: "Eligibility", icon: UserCheck, state: "done" },
                { label: "Billing", icon: FileText, state: "done" },
                { label: "Claims", icon: Send, state: "done" },
                { label: "Follow-up", icon: RefreshCw, state: "active" },
                { label: "Posting", icon: Banknote, state: "next" },
                { label: "Reporting", icon: ChartColumnIncreasing, state: "next" },
              ].map((step, i, all) => {
                const Icon = step.icon;
                return (
                  <li key={step.label} className="relative flex flex-col items-center text-center">
                    {i < all.length - 1 && (
                      <span
                        className={cn(
                          "absolute top-4 left-[calc(50%+18px)] h-px w-[calc(100%-36px)]",
                          step.state === "done" ? "bg-teal-400" : "bg-line",
                        )}
                      />
                    )}
                    <span
                      className={cn(
                        "relative flex h-8 w-8 items-center justify-center rounded-full",
                        step.state === "done" && "bg-teal-500 text-white",
                        step.state === "active" && "bg-navy-800 text-teal-400",
                        step.state === "next" && "bg-white text-muted ring-1 ring-line",
                      )}
                    >
                      {step.state === "active" && (
                        <span className="animate-pulse-ring absolute inset-0 rounded-full bg-navy-800/30" />
                      )}
                      {step.state === "done" ? (
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      ) : (
                        <Icon className="h-3.5 w-3.5" />
                      )}
                    </span>
                    <span
                      className={cn(
                        "mt-2 text-[8.5px] font-medium sm:text-[10px]",
                        step.state === "next" ? "text-muted" : "text-navy-700",
                      )}
                    >
                      {step.label}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Chart + denial worklist */}
          <div className="grid gap-3.5 sm:grid-cols-5">
            <div className="rounded-2xl border border-line p-3.5 sm:col-span-3 sm:p-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-navy-800">Payment tracking</span>
                <span className="flex items-center gap-3 text-[9.5px] text-muted">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-3 rounded-full bg-teal-500" /> Posted
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-3 rounded-full border border-dashed border-navy-600" /> Expected
                  </span>
                </span>
              </div>
              <svg viewBox="0 0 300 110" className="mt-3 h-[104px] w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#16A6A1" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#16A6A1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[22, 50, 78].map((y) => (
                  <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="#E2E8F0" strokeWidth="1" />
                ))}
                <path
                  d="M0 86 C 30 80, 50 70, 75 66 S 125 60, 150 50 S 200 38, 225 34 S 270 22, 300 18"
                  fill="none"
                  stroke="#284B6E"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M0 92 C 30 88, 50 80, 75 76 S 125 72, 150 60 S 200 50, 225 42 S 270 30, 300 26 V110 H0 Z"
                  fill="url(#hero-area)"
                />
                <path
                  d="M0 92 C 30 88, 50 80, 75 76 S 125 72, 150 60 S 200 50, 225 42 S 270 30, 300 26"
                  fill="none"
                  stroke="#16A6A1"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <div className="mt-1.5 flex justify-between text-[9px] text-muted">
                {["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6"].map((w) => (
                  <span key={w}>{w}</span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-line p-3.5 sm:col-span-2 sm:p-4">
              <span className="text-[11px] font-semibold text-navy-800">Denial worklist</span>
              <ul className="mt-3 space-y-2.5">
                {[
                  { label: "Eligibility", status: "Corrected", style: "bg-teal-50 text-teal-700" },
                  { label: "Authorization", status: "Appeal prep", style: "bg-navy-50 text-navy-700" },
                  { label: "Documentation", status: "With provider", style: "bg-offwhite text-muted ring-1 ring-line" },
                  { label: "Coding", status: "In review", style: "bg-navy-50 text-navy-700" },
                ].map((row) => (
                  <li key={row.label} className="flex items-center justify-between gap-2">
                    <span className="text-[10.5px] font-medium text-navy-700">{row.label}</span>
                    <span className={cn("rounded-full px-2 py-0.5 text-[9px] font-semibold whitespace-nowrap", row.style)}>
                      {row.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Floating detail cards */}
      <div
        aria-hidden="true"
        className="absolute -top-5 -right-3 hidden items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-lift sm:flex lg:-right-8"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-800 text-teal-400">
          <CalendarClock className="h-[18px] w-[18px]" />
        </span>
        <span>
          <span className="block text-[11.5px] font-semibold text-navy-800">Payer follow-up scheduled</span>
          <span className="block text-[10px] text-muted">A/R worklist · sample</span>
        </span>
      </div>
      <div
        aria-hidden="true"
        className="absolute -bottom-6 -left-3 hidden items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-lift sm:flex lg:-left-10"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
          <ShieldCheck className="h-[18px] w-[18px]" />
        </span>
        <span>
          <span className="block text-[11.5px] font-semibold text-navy-800">Quality review complete</span>
          <span className="block text-[10px] text-muted">Human QA checkpoint</span>
        </span>
      </div>
      </div>

      <figcaption id="hero-visual-caption" className="mt-6 text-center text-xs text-muted sm:mt-12">
        <span className="sr-only">
          Illustration of a revenue cycle dashboard showing a claims workflow, accounts receivable aging, payment
          tracking and a denial worklist.{" "}
        </span>
        Illustrative interface for demonstration only — not actual client or performance data.
      </figcaption>
    </figure>
  );
}

function Tile({ label, short, children }: { label: string; short: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-line p-2.5 sm:rounded-2xl sm:p-3.5">
      <span className="block truncate text-[9.5px] font-semibold text-navy-700 sm:text-[11px]">
        <span className="sm:hidden">{short}</span>
        <span className="hidden sm:inline">{label}</span>
      </span>
      {children}
    </div>
  );
}

function SkeletonLines({ short = false }: { short?: boolean }) {
  return (
    <div className="mt-2.5 space-y-1.5">
      <span className={cn("block h-1.5 rounded-full bg-navy-100", short ? "w-3/5" : "w-4/5")} />
      <span className="block h-1.5 w-2/5 rounded-full bg-navy-50" />
    </div>
  );
}
