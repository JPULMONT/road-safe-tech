import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fleet.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-dark">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fleet technology monitoring"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/80 to-surface-dark/40" />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-2xl space-y-8">
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
              <Shield size={14} className="text-accent" />
              <span className="text-xs font-medium text-accent tracking-wide uppercase">
                Tecnología para flotas
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-dark-foreground leading-[1.05] tracking-tight">
              Seguridad vial y control operativo para su flota
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <p className="text-lg text-surface-dark-foreground/70 max-w-xl leading-relaxed">
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
            <div className="flex gap-8 pt-4">
              {[
                { value: "8,400+", label: "Unidades protegidas" },
                { value: "150+", label: "Flotas activas" },
                { value: "37%", label: "Reducción de siniestros" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-surface-dark-foreground tabular-nums">{stat.value}</p>
                  <p className="text-xs text-surface-dark-foreground/50 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
