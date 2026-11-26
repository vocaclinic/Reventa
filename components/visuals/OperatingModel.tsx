import { ChartColumnIncreasing, Cpu, Layers, MessagesSquare, UserCheck, Users } from "lucide-react";

/** Layered diagram of how Revdian combines specialty process, technology, people and reporting. */
export function OperatingModel() {
  const layers = [
    { icon: Layers, title: "Specialty-focused workflows", text: "Processes shaped around how your specialty bills" },
    { icon: Cpu, title: "Technology & automation", text: "Tools that organize and route repetitive work" },
    { icon: UserCheck, title: "Human expertise & QA", text: "Specialists review, decide and verify" },
    { icon: ChartColumnIncreasing, title: "Transparent reporting", text: "Agreed metrics, shared on a set schedule" },
  ];

  return (
    <figure className="relative mx-auto w-full max-w-[520px]">
      <div aria-hidden="true" className="absolute -inset-8 -z-10 rounded-full bg-gold-500/10 blur-3xl" />
      <div aria-hidden="true" className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-7">
        <div className="flex items-center justify-between">
          <p className="font-display text-sm font-medium text-white">Our operating model</p>
          <span className="rounded-full border border-gold-400/30 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-gold-400 uppercase">
            Approach
          </span>
        </div>
        <div className="relative mt-6 space-y-3">
          <span className="absolute top-6 bottom-6 left-[35px] w-px bg-gradient-to-b from-gold-400/70 to-white/10" />
          {layers.map((layer) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.title}
                className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-900/80 p-3.5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400 ring-1 ring-gold-400/25">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[14px] font-semibold text-white">{layer.title}</span>
                  <span className="block text-[12px] text-ink-200">{layer.text}</span>
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-gold-500 p-3.5 text-ink-950">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-950/10">
            <Users className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-[14px] font-bold">Your organization</span>
            <span className="block text-[12px] font-medium text-ink-900/80">Defined roles, regular updates</span>
          </span>
          <MessagesSquare className="ml-auto h-5 w-5 opacity-70" />
        </div>
      </div>
      <figcaption className="sr-only">
        Diagram of Revdian&apos;s approach: specialty-focused workflows, technology and automation, human
        expertise and quality assurance, and transparent reporting, all supporting the client organization.
      </figcaption>
    </figure>
  );
}
