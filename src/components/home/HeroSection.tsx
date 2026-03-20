import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fleet.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay" />
      
      {/* Background image — very subtle */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fleet technology monitoring"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
      </div>

      {/* Red glow accent — bottom right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/[0.06] rounded-full blur-[150px] translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl space-y-8">
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center gap-2 border border-white/[0.08] rounded-full px-4 py-1.5 bg-white/[0.03]">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                Tecnología para flotas
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[0.95] tracking-tight">
              Seguridad vial y
              <br />
              <span className="text-accent">control operativo</span>
              <br />
              para su flota
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Desarrollamos e integramos tecnología de prevención de riesgos, visibilidad en tiempo real y supervisión inteligente para operaciones de transporte.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero-primary" size="xl" asChild>
                <a href="#catalogo">
                  Ver catálogo
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="hero-secondary" size="xl" asChild>
                <a href="#contacto">Contactar a ventas</a>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={650}>
            <div className="flex gap-12 pt-8 border-t border-white/[0.06]">
              {[
                { value: "8,400+", label: "Unidades protegidas" },
                { value: "150+", label: "Flotas activas" },
                { value: "37%", label: "Reducción de siniestros" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-display font-bold text-foreground tabular-nums">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
