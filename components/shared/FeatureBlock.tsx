import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Container, Eyebrow, IconTile } from "@/components/ui/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { CheckList } from "./CheckList";

export type Feature = {
  id: string;
  eyebrow: string;
  title: string;
  description: ReactNode;
  icon: LucideIcon;
  points: string[];
  pointsTitle?: string;
  note?: string;
};

/**
 * Two-column detail block: narrative on one side, a "what's included" card on the other.
 * Pass `reverse` to alternate the layout down a page.
 */
export function FeatureBlock({ feature, reverse = false }: { feature: Feature; reverse?: boolean }) {
  const Icon = feature.icon;
  return (
    <div id={feature.id} className="py-14 first:pt-0 last:pb-0 sm:py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className={cn(reverse && "lg:order-2")}>
            <Eyebrow>{feature.eyebrow}</Eyebrow>
            <h3 className="mt-5 text-3xl leading-[1.1] sm:text-[2.6rem]">{feature.title}</h3>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-body">{feature.description}</div>
            {feature.note && (
              <p className="mt-7 rounded-r-2xl border-l-2 border-gold-500 bg-gold-50 px-5 py-4 text-[0.94rem] leading-relaxed text-royal-700">
                {feature.note}
              </p>
            )}
          </Reveal>
          <Reveal delay={0.1} className={cn(reverse && "lg:order-1")}>
            <div className="relative rounded-[32px] border border-line bg-white p-7 shadow-lift sm:p-10">
              <div aria-hidden="true" className="absolute inset-x-9 top-0 h-px rule-gold" />
              <div className="flex items-center gap-4">
                <IconTile tone="royal">
                  <Icon aria-hidden="true" />
                </IconTile>
                <p className="font-display text-2xl text-royal-900">
                  {feature.pointsTitle ?? "What this includes"}
                </p>
              </div>
              <CheckList items={feature.points} className="mt-7" />
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}

export function FeatureList({ features }: { features: Feature[] }) {
  return (
    <div className="divide-y divide-line">
      {features.map((feature, index) => (
        <FeatureBlock key={feature.id} feature={feature} reverse={index % 2 === 1} />
      ))}
    </div>
  );
}
