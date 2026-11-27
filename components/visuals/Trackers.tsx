import { Check, Clock3, Dot } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Status = "done" | "pending" | "watch" | "upcoming";

const statusStyles: Record<Status, string> = {
  done: "bg-gold-50 text-gold-700 ring-gold-100",
  pending: "bg-ink-800 text-white ring-ink-800",
  watch: "bg-ink-50 text-ink-700 ring-ink-100",
  upcoming: "bg-white text-muted ring-line",
};

function StatusIcon({ status }: { status: Status }) {
  if (status === "done")
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500 text-white">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    );
  if (status === "pending")
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-800 text-gold-400">
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
        <span className="block truncate text-[13px] font-semibold text-ink-800">{label}</span>
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
      <div aria-hidden="true" className="absolute -inset-10 -z-10 rounded-[48px] bg-[radial-gradient(closest-side,rgb(194_154_78/0.32),transparent)] blur-2xl" />
      <div aria-hidden="true" className="overflow-hidden rounded-[26px] border border-white/10 bg-white shadow-[0_50px_100px_-40px_rgb(0_0_0/0.8)] ring-8 ring-white/[0.04]">
        <div className="flex items-center justify-between border-b border-line bg-ivory/80 px-5 py-3.5">
          <div>
            <p className="font-display text-[16px] font-medium text-ink-900">{title}</p>
            <p className="text-[11px] text-muted">{subtitle}</p>
          </div>
          <span className="rounded-full bg-gold-50 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-gold-700 uppercase ring-1 ring-gold-100">
            Illustrative
          </span>
        </div>
        <div className="px-5 pt-4 pb-2">{children}</div>
        <p className="border-t border-line bg-ivory/60 px-5 py-3 text-[11px] leading-relaxed text-muted">{footnote}</p>
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
        <div className="relative mt-2 h-2 rounded-full bg-ink-50">
          <span className="absolute inset-y-0 left-0 w-[17%] rounded-full bg-gold-500" />
          <span className="absolute inset-y-0 left-[17%] w-[38%] rounded-r-full bg-gold-200" />
          <span className="absolute top-1/2 left-[17%] h-4 w-0.5 -translate-y-1/2 rounded bg-ink-800" />
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
          { label: "Period 1 · 90 days", style: "bg-gold-500" },
          { label: "Period 2 · 90 days", style: "bg-gold-200" },
          { label: "Period 3+ · 60 days", style: "bg-ink-100" },
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
