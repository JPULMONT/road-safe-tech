import { ScrollReveal } from "@/components/ScrollReveal";
import { Settings, Headphones, BarChart3, Truck } from "lucide-react";

const steps = [
  { icon: BarChart3, step: "01", title: "Diagnóstico", description: "Evaluamos su operación, riesgos y necesidades específicas de su flota." },
  { icon: Settings, step: "02", title: "Diseño e integración", description: "Configuramos la solución tecnológica ideal para sus vehículos y operación." },
  { icon: Truck, step: "03", title: "Instalación profesional", description: "Equipo técnico certificado realiza la instalación en sus unidades." },
  { icon: Headphones, step: "04", title: "Soporte continuo", description: "Mantenimiento preventivo, capacitación y servicio postventa permanente." },
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="relative py-28 bg-background">
      <div className="absolute inset-0 grid-overlay-fine" />

      <div className="container relative">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Servicios</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight">
              De la consultoría a la operación
            </h2>
            <p className="text-muted-foreground mt-5 text-base">
              No solo vendemos tecnología. Implementamos, instalamos, capacitamos y damos soporte a largo plazo.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 100}>
              <div className="relative bg-card/50 backdrop-blur-sm border border-white/[0.06] rounded-lg p-6 h-full">
                <span className="text-5xl font-display font-bold text-white/[0.04] absolute top-4 right-4 select-none">{s.step}</span>
                <div className="relative">
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-5">
                    <s.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 font-display">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
