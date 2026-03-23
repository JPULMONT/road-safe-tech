import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Settings, Truck, Headphones } from "lucide-react";

const steps = [
  { icon: BarChart3, step: "01", title: "Diagnóstico", description: "Evaluamos su operación, identificamos riesgos y definimos necesidades." },
  { icon: Settings, step: "02", title: "Diseño de solución", description: "Configuramos la integración tecnológica ideal para su flota." },
  { icon: Truck, step: "03", title: "Instalación profesional", description: "Técnicos certificados implementan cada dispositivo en sus unidades." },
  { icon: Headphones, step: "04", title: "Soporte continuo", description: "Mantenimiento, capacitación y servicio postventa permanente." },
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="relative py-28 bg-background">
      <div className="absolute inset-0 grid-overlay-fine" />

      <div className="container relative">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Servicios</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground tracking-tight leading-tight">
                De la consultoría a la operación
              </h2>
              <p className="text-muted-foreground mt-5 text-base">
                No solo vendemos tecnología. Diagnosticamos, diseñamos, instalamos, capacitamos y damos soporte a largo plazo.
              </p>
            </div>
            <Button variant="outline-dark" size="lg" asChild className="self-start lg:self-auto">
              <a href="/servicios">
                Ver servicios
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 100}>
              <div className="relative bg-card/40 border border-white/[0.05] rounded-lg p-6 h-full overflow-hidden group hover:border-accent/15 transition-all duration-300">
                <span className="text-6xl font-display font-bold text-white/[0.03] absolute -top-2 right-2 select-none">{s.step}</span>
                <div className="relative">
                  <div className="w-10 h-10 rounded-md bg-accent/8 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                    <s.icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-2 font-display">{s.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
