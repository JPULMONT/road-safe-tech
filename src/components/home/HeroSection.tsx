import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, ChevronRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-background">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay" />
      
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
          alt="Tecnología de seguridad para flotas de transporte"
          className="w-full h-full object-cover opacity-[0.55]"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
      </div>

      {/* Red glow — bottom right, very subtle */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-accent/[0.04] rounded-full blur-[200px] translate-x-1/4 translate-y-1/4" />

      <div className="container relative z-10 pt-32 pb-24">
        <div className="max-w-3xl space-y-10">
          <ScrollReveal delay={100}>
            <a href="#soluciones" className="inline-flex items-center gap-2 border border-white/[0.06] rounded-full px-5 py-2 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                Tecnología para flotas
              </span>
              <ChevronRight size={12} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-display font-bold text-foreground leading-[1.05] tracking-tight">
              Prevención, visibilidad
              <br />
              y control para
              <br />
              <span className="text-accent">cada unidad</span> de su flota
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Desarrollamos e integramos tecnología de seguridad vial, monitoreo inteligente y supervisión operativa para empresas de transporte y flotas comerciales.
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
            <div className="flex flex-wrap gap-x-16 gap-y-6 pt-10 border-t border-white/[0.05]">
              {[
                { value: "8,400+", label: "Unidades protegidas" },
                { value: "150+", label: "Flotas activas" },
                { value: "37%", label: "Reducción de siniestros" },
                { value: "24/7", label: "Monitoreo en tiempo real" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-display font-bold text-foreground tabular-nums tracking-tight">{stat.value}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
