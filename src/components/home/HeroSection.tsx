import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import heroImage from "@/assets/hero-fleet-night.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-background">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay" />
      
      {/* Background image */}
      <ParallaxBackground
        src={heroImage}
        alt="Tecnología de seguridad para flotas de transporte"
        opacity="opacity-[0.70]"
        eager
        gradientDirection="hero"
      />

      <div className="container relative z-10 pt-32 pb-24">
        <div className="max-w-3xl space-y-10">
          <ScrollReveal delay={100}>
            <a href="#soluciones" className="inline-flex items-center gap-2 border border-white/[0.06] rounded-full px-5 py-2 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium text-foreground/70 tracking-widest uppercase">
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
            <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
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
            <StatsRow />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const StatsRow = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const units = useCountUp(8400, 2000, visible);
  const fleets = useCountUp(150, 2000, visible);
  const reduction = useCountUp(37, 2000, visible);

  const stats = [
    { value: `${units.toLocaleString()}+`, label: "Unidades protegidas" },
    { value: `${fleets}+`, label: "Flotas activas" },
    { value: `${reduction}%`, label: "Reducción de siniestros" },
    { value: "24/7", label: "Monitoreo en tiempo real" },
  ];

  return (
    <div ref={ref} className="flex flex-wrap gap-x-16 gap-y-6 pt-10 border-t border-white/[0.05]">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-3xl font-display font-bold text-foreground tabular-nums tracking-tight">{stat.value}</p>
          <p className="text-[11px] text-foreground/50 mt-1 tracking-wide uppercase">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};
