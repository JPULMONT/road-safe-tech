import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import platformImage from "@/assets/platform-dashboard.jpg";
import { ArrowRight, Activity, Bell, MapPin } from "lucide-react";

const features = [
  { icon: Activity, label: "Análisis predictivo de riesgos" },
  { icon: Bell, label: "Alertas inteligentes en tiempo real" },
  { icon: MapPin, label: "Rastreo y visibilidad operativa" },
];

export const PlatformSection = () => {
  return (
    <section id="plataforma" className="relative py-28 bg-surface-dark overflow-hidden">
      <div className="absolute inset-0 grid-overlay" />
      {/* Glow behind dashboard image */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-[150px] translate-x-1/3 -translate-y-1/2" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Plataforma</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight leading-tight">
                GPT Monitor: supervisión inteligente de su flota
              </h2>
              <p className="text-muted-foreground mt-5 text-base leading-relaxed max-w-lg">
                Nuestra plataforma centraliza datos de todos sus dispositivos para ofrecer análisis predictivo, clasificación de alertas con IA, y visibilidad total de su operación en tiempo real.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <div className="space-y-4 mt-8">
                {features.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <f.icon size={16} className="text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground/70">{f.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={350}>
              <div className="mt-8">
                <Button variant="accent" size="lg" asChild>
                  <a href="#contacto">
                    Solicitar demostración
                    <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={200}>
            <div className="relative glow-red-subtle rounded-lg">
              <img
                src={platformImage}
                alt="GPT Monitor dashboard"
                className="rounded-lg border border-white/[0.06]"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
