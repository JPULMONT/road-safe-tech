import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import platformImage from "@/assets/platform-dashboard.jpg";
import { ArrowRight, Activity, Bell, MapPin, Shield, BarChart3, Smartphone } from "lucide-react";

const features = [
  { icon: Activity, label: "Análisis predictivo de riesgos" },
  { icon: Bell, label: "Alertas inteligentes clasificadas por IA" },
  { icon: MapPin, label: "Rastreo y visibilidad en tiempo real" },
  { icon: Shield, label: "Supervisión de comportamiento del conductor" },
  { icon: BarChart3, label: "Reportes operativos automatizados" },
  { icon: Smartphone, label: "Acceso web y móvil" },
];

export const PlatformSection = () => {
  return (
    <section id="plataforma" className="relative py-28 bg-surface-dark overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.06]"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/80" />
      </div>
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[200px] translate-x-1/3 -translate-y-1/2" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Plataforma</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground tracking-tight leading-tight">
                GPT Monitor: supervisión inteligente de su flota
              </h2>
              <p className="text-muted-foreground mt-5 text-base leading-relaxed max-w-lg">
                Centralice datos de todos sus dispositivos en una plataforma con análisis predictivo, clasificación de alertas con IA, y visibilidad total de su operación.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <div className="grid grid-cols-2 gap-3 mt-8">
                {features.map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5">
                    <f.icon size={14} className="text-accent flex-shrink-0" />
                    <span className="text-[13px] text-foreground/60">{f.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={350}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Button variant="accent" size="lg" asChild>
                  <a href="#contacto">
                    Solicitar demostración
                    <ArrowRight size={16} />
                  </a>
                </Button>
                <Button variant="outline-dark" size="lg" asChild>
                  <a href="/plataforma">Conocer más</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/[0.03] rounded-2xl blur-[60px]" />
              <img
                src={platformImage}
                alt="GPT Monitor — plataforma de supervisión inteligente"
                className="relative rounded-lg border border-white/[0.06]"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
