import { Reveal } from "@/components/ui/Reveal";

export type ProcessStep = { title: string; description: string };

/** Horizontal timeline on desktop, vertical timeline on smaller screens. */
export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute top-7 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-teal-500 via-teal-200 to-navy-200 lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute top-7 bottom-7 left-7 w-px bg-gradient-to-b from-teal-500 via-teal-200 to-navy-200 lg:hidden"
      />
      <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
        {steps.map((step, index) => (
          <li key={step.title}>
            <Reveal delay={index * 0.08} className="flex gap-6 lg:block lg:text-center">
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white font-display text-lg font-bold text-navy-800 shadow-soft ring-1 ring-line lg:mx-auto">
                {String(index + 1).padStart(2, "0")}
                {index === 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-teal-500 ring-4 ring-white"
                  />
                )}
              </span>
              <div>
                <h3 className="pt-3 text-xl font-bold lg:mt-7 lg:pt-0">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-body lg:mx-auto lg:max-w-[16rem]">{step.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
