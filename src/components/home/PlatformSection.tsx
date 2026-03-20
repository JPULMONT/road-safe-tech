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
    <section id="plataforma" className="py-24 bg-surface-dark text-surface-dark-foreground overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Plataforma</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                GPT Monitor: supervisión inteligente de su flota
              </h2>
              <p className="text-surface-dark-foreground/60 mt-4 text-base leading-relaxed max-w-lg">
                Nuestra plataforma centraliza datos de todos sus dispositivos para ofrecer análisis predictivo, clasificación de alertas con IA, y visibilidad total de su operación en tiempo real.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <div className="space-y-4 mt-8">
                {features.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <f.icon size={16} className="text-accent" />
                    </div>
                    <span className="text-sm font-medium text-surface-dark-foreground/80">{f.label}</span>
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
            <div className="relative">
              <img
                src={platformImage}
                alt="GPT Monitor dashboard"
                className="rounded-lg shadow-2xl border border-white/5"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
