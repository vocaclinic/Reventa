import { Reveal } from "@/components/ui/Reveal";

export type ProcessStep = { title: string; description: string };

/** Horizontal timeline on desktop, vertical timeline on smaller screens. */
export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute top-10 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-gold-500 via-gold-200 to-line lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute top-10 bottom-10 left-10 w-px bg-gradient-to-b from-gold-500 via-gold-200 to-line lg:hidden"
      />
      <ol className="relative grid gap-12 lg:grid-cols-4 lg:gap-8">
        {steps.map((step, index) => (
          <li key={step.title}>
            <Reveal delay={index * 0.08} className="flex gap-7 lg:block lg:text-center">
              <span className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white font-display text-3xl text-royal-900 italic shadow-soft ring-1 ring-gold-200 lg:mx-auto">
                <span aria-hidden="true" className="absolute inset-1.5 rounded-full ring-1 ring-line" />
                {String(index + 1).padStart(2, "0")}
                {index === 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-1 right-1 h-3 w-3 rotate-45 bg-gold-400 ring-4 ring-white"
                  />
                )}
              </span>
              <div>
                <h3 className="pt-4 text-3xl lg:mt-8 lg:pt-0">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-body lg:mx-auto lg:max-w-[16rem]">{step.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
