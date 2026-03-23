import { ScrollReveal } from "@/components/ScrollReveal";
import { ShieldCheck, Cog, Headphones } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Desarrollo e integración",
    description: "Diseñamos, fabricamos e integramos hardware y software de seguridad vial.",
  },
  {
    icon: Cog,
    title: "Instalación profesional",
    description: "Equipos técnicos certificados implementan cada solución en sus unidades.",
  },
  {
    icon: Headphones,
    title: "Soporte continuo",
    description: "Mantenimiento preventivo, capacitación y servicio postventa permanente.",
  },
];

export const TrustBar = () => {
  return (
    <section className="relative py-16 bg-surface-dark border-y border-white/[0.04]">
      <div className="container">
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {pillars.map((p, i) => (
              <div key={p.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <p.icon size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
