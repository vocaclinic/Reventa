import { ArrowRight, Inbox, ListChecks, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

/** Small decorative illustrations for the technology cards. All are aria-hidden. */

export function AutomationVisual() {
  const nodes = [
    { icon: Inbox, label: "Intake" },
    { icon: ListChecks, label: "Worklist" },
    { icon: UserCheck, label: "Review" },
  ];
  return (
    <div aria-hidden="true" className="flex h-[140px] items-center justify-between gap-1 rounded-2xl bg-ivory p-5 ring-1 ring-line">
      {nodes.map((node, i) => {
        const Icon = node.icon;
        return (
          <div key={node.label} className="flex items-center gap-1">
            <div className="flex flex-col items-center gap-2">
              <span
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-xl",
                  i === 2 ? "bg-royal-800 text-gold-400" : "bg-white text-gold-700 ring-1 ring-line",
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-[10.5px] font-semibold text-royal-700">{node.label}</span>
            </div>
            {i < nodes.length - 1 && <ArrowRight className="mx-1 mb-6 h-4 w-4 text-gold-500 sm:mx-2" />}
          </div>
        );
      })}
    </div>
  );
}

export function ReportingVisual() {
  const bars = [44, 58, 52, 70, 64, 82];
  return (
    <div aria-hidden="true" className="flex h-[140px] flex-col justify-end rounded-2xl bg-ivory p-5 ring-1 ring-line">
      <div className="flex items-end gap-2.5" style={{ height: 64 }}>
        {bars.map((h, i) => (
          <span
            key={i}
            className={cn("flex-1 rounded-t-md", i === bars.length - 1 ? "bg-gold-500" : "bg-royal-200")}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-line pt-2.5 text-[10.5px] font-medium text-muted">
        <span>Monthly RCM report</span>
        <span className="text-gold-700">Sample</span>
      </div>
    </div>
  );
}

export function VisibilityVisual() {
  const rows = [
    { label: "Claims", w: "w-4/5", dot: "bg-gold-500" },
    { label: "A/R follow-up", w: "w-3/5", dot: "bg-gold-500" },
    { label: "Denials", w: "w-2/5", dot: "bg-royal-600" },
  ];
  return (
    <div aria-hidden="true" className="flex h-[140px] flex-col justify-center gap-3.5 rounded-2xl bg-ivory p-5 ring-1 ring-line">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center gap-3">
          <span className={cn("h-2 w-2 shrink-0 rounded-full", row.dot)} />
          <span className="w-24 shrink-0 text-[11px] font-semibold text-royal-700">{row.label}</span>
          <span className="h-1.5 flex-1 rounded-full bg-royal-100">
            <span className={cn("block h-full rounded-full bg-gold-400", row.w)} />
          </span>
        </div>
      ))}
    </div>
  );
}
