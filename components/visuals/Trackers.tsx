import { Check, Clock3, Dot } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Status = "done" | "pending" | "watch" | "upcoming";

const statusStyles: Record<Status, string> = {
  done: "bg-teal-50 text-teal-700 ring-teal-100",
  pending: "bg-navy-800 text-white ring-navy-800",
  watch: "bg-navy-50 text-navy-700 ring-navy-100",
  upcoming: "bg-white text-muted ring-line",
};

function StatusIcon({ status }: { status: Status }) {
  if (status === "done")
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    );
  if (status === "pending")
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-800 text-teal-400">
        <Clock3 className="h-3.5 w-3.5" />
      </span>
    );
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-muted ring-1 ring-line">
      <Dot className="h-5 w-5" />
    </span>
  );
}

function Row({ label, sub, status, chip }: { label: string; sub?: string; status: Status; chip: string }) {
  return (
    <li className="flex items-center gap-3 py-3">
      <StatusIcon status={status} />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13px] font-semibold text-navy-800">{label}</span>
        {sub && <span className="block truncate text-[11px] text-muted">{sub}</span>}
      </span>
      <span className={cn("rounded-full px-2.5 py-1 text-[10.5px] font-semibold whitespace-nowrap ring-1", statusStyles[status])}>
        {chip}
      </span>
    </li>
  );
}

function TrackerCard({
  title,
  subtitle,
  children,
  footnote,
  srLabel,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footnote: string;
  srLabel: string;
}) {
  return (
    <figure className="relative mx-auto w-full max-w-[520px]">
      <div aria-hidden="true" className="absolute -inset-5 -z-10 rounded-[32px] bg-gradient-to-br from-teal-100/80 to-navy-100/60 blur-2xl" />
      <div aria-hidden="true" className="overflow-hidden rounded-[22px] border border-line bg-white shadow-lift">
        <div className="flex items-center justify-between border-b border-line bg-offwhite/80 px-5 py-3.5">
          <div>
            <p className="font-display text-[14px] font-semibold text-navy-800">{title}</p>
            <p className="text-[11px] text-muted">{subtitle}</p>
          </div>
          <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-teal-700 uppercase ring-1 ring-teal-100">
            Illustrative
          </span>
        </div>
        <div className="px-5 pt-4 pb-2">{children}</div>
        <p className="border-t border-line bg-offwhite/60 px-5 py-3 text-[11px] leading-relaxed text-muted">{footnote}</p>
      </div>
      <figcaption className="sr-only">{srLabel}</figcaption>
    </figure>
  );
}

export function HomeHealthTracker() {
  return (
    <TrackerCard
      title="Period of Care Tracker"
      subtitle="Sample admission · 30-day period 1 of 2"
      footnote="Sample only. Documentation items are confirmed by authorized agency personnel — billing staff do not create or alter clinical records."
      srLabel="Illustration of a home health period-of-care tracker showing NOA, OASIS, Plan of Care, visit utilization and claim readiness statuses."
    >
      <div>
        <div className="flex justify-between text-[10.5px] font-medium text-muted">
          <span>Start of care</span>
          <span>NOA window</span>
          <span>Period end</span>
        </div>
        <div className="relative mt-2 h-2 rounded-full bg-navy-50">
          <span className="absolute inset-y-0 left-0 w-[17%] rounded-full bg-teal-500" />
          <span className="absolute inset-y-0 left-[17%] w-[38%] rounded-r-full bg-teal-200" />
          <span className="absolute top-1/2 left-[17%] h-4 w-0.5 -translate-y-1/2 rounded bg-navy-800" />
        </div>
      </div>
      <ul className="mt-2 divide-y divide-line">
        <Row label="Notice of Admission (NOA)" sub="Submitted within required window" status="done" chip="Accepted" />
        <Row label="OASIS completion status" sub="Confirmed with agency staff" status="done" chip="Confirmed" />
        <Row label="Plan of Care · signed orders" sub="Routed to agency for signature" status="pending" chip="Awaiting" />
        <Row label="Visit utilization review" sub="LUPA threshold visibility" status="watch" chip="Monitoring" />
        <Row label="30-day period claim" sub="Pre-billing review" status="upcoming" chip="Not ready" />
      </ul>
    </TrackerCard>
  );
}

export function HospiceTracker() {
  return (
    <TrackerCard
      title="Hospice Billing Tracker"
      subtitle="Sample patient · Benefit period 2"
      footnote="Sample only. Hospice eligibility and certification are determined by the hospice's physicians — we track documentation status for billing."
      srLabel="Illustration of a hospice billing tracker showing benefit periods, NOE, election statement, certification, level of care and monthly claim statuses."
    >
      <div className="grid grid-cols-[90fr_90fr_60fr] gap-1.5">
        {[
          { label: "Period 1 · 90 days", style: "bg-teal-500" },
          { label: "Period 2 · 90 days", style: "bg-teal-200" },
          { label: "Period 3+ · 60 days", style: "bg-navy-100" },
        ].map((p) => (
          <div key={p.label}>
            <span className={cn("block h-2 rounded-full", p.style)} />
            <span className="mt-1.5 block truncate text-[10px] font-medium text-muted">{p.label}</span>
          </div>
        ))}
      </div>
      <ul className="mt-2 divide-y divide-line">
        <Row label="Notice of Election (NOE)" sub="Filed within required window" status="done" chip="Accepted" />
        <Row label="Election statement & CTI" sub="Status confirmed with hospice" status="done" chip="On file" />
        <Row label="Level of care billed" sub="Per diem by level of care" status="watch" chip="Routine Home Care" />
        <Row label="Monthly claim" sub="Billed in sequence" status="pending" chip="In preparation" />
        <Row label="Face-to-face before period 3" sub="Clinical — tracked for billing" status="upcoming" chip="Upcoming" />
      </ul>
    </TrackerCard>
  );
}
