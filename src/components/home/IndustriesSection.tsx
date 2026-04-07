import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";

export const IndustriesSection = () => {
  return (
    <section id="industrias" className="relative py-28 bg-background overflow-hidden">
      <ParallaxBackground
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
        opacity="opacity-[0.35]"
      />
      <div className="absolute inset-0 grid-overlay-fine" />
      <div className="absolute inset-0 bg-background/75" />
      
      <div className="container relative">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Industrias</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground tracking-tight leading-tight">
                Soluciones adaptadas a cada sector
              </h2>
              <p className="text-foreground/60 mt-5 text-base">
                Servimos a empresas que dependen del transporte seguro y la supervisión operativa de sus activos.
              </p>
            </div>
            <Button variant="outline-dark" size="lg" asChild className="self-start lg:self-auto">
              <a href="/industrias">
                Ver industrias
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.slice(0, 4).map((ind, i) => (
            <ScrollReveal key={ind.slug} delay={i * 80}>
              <a href={`/industrias/${ind.slug}`} className="group block bg-card/60 backdrop-blur-sm border border-white/[0.05] rounded-lg p-6 hover:border-accent/20 transition-all duration-300 h-full">
                <div className="w-11 h-11 rounded-lg bg-accent/8 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                  <ind.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-1.5 font-display">{ind.name}</h3>
                <p className="text-[13px] text-foreground/70 leading-relaxed">{ind.heroDescription.slice(0, 80)}…</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          {industries.slice(4).map((ind, i) => (
            <ScrollReveal key={ind.slug} delay={(i + 4) * 80}>
              <a href={`/industrias/${ind.slug}`} className="group block bg-card/60 backdrop-blur-sm border border-white/[0.05] rounded-lg p-6 hover:border-accent/20 transition-all duration-300 h-full">
                <div className="w-11 h-11 rounded-lg bg-accent/8 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                  <ind.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-1.5 font-display">{ind.name}</h3>
                <p className="text-[13px] text-foreground/70 leading-relaxed">{ind.heroDescription.slice(0, 80)}…</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
