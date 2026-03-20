import { ScrollReveal } from "@/components/ScrollReveal";
import { Truck, Container, Bus, Factory, HardHat } from "lucide-react";

const industries = [
  { icon: Truck, name: "Transporte de carga", description: "Protección y eficiencia para flotas de largo recorrido y última milla." },
  { icon: Bus, name: "Transporte de pasajeros", description: "Seguridad del conductor y pasajeros con monitoreo en ruta." },
  { icon: Container, name: "Logística y distribución", description: "Visibilidad en cadena de suministro y control de activos." },
  { icon: Factory, name: "Industria y manufactura", description: "Seguridad operativa en patios, plantas y zonas de maniobra." },
  { icon: HardHat, name: "Construcción y minería", description: "Tecnología anti-colisión para maquinaria pesada y vehículos en obra." },
];

export const IndustriesSection = () => {
  return (
    <section id="industrias" className="relative py-28 bg-background">
      <div className="absolute inset-0 grid-overlay-fine" />
      
      <div className="container relative">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Industrias</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight">
              Soluciones adaptadas a su sector
            </h2>
            <p className="text-muted-foreground mt-5 text-base">
              Servimos a empresas que dependen del transporte seguro y la supervisión operativa de sus activos.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.name} delay={i * 80}>
              <div className="bg-card/50 backdrop-blur-sm border border-white/[0.06] rounded-lg p-6 text-center hover:border-accent/20 transition-all duration-300 group h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/15 transition-colors">
                  <ind.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-1.5 font-display">{ind.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{ind.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
