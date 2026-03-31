import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Package, Bus, Factory, HardHat, Car, Zap } from "lucide-react";

const industries = [
  { icon: Truck, name: "Transporte de carga", description: "Seguridad y eficiencia para flotas de largo recorrido.", href: "/industrias/transporte-de-carga" },
  { icon: Package, name: "Reparto y última milla", description: "Control operativo para entregas urbanas y suburbanas.", href: "/industrias/reparto-y-ultima-milla" },
  { icon: Bus, name: "Transporte de pasajeros", description: "Monitoreo de conductores y seguridad en ruta.", href: "/industrias/transporte-de-pasajeros" },
  { icon: Factory, name: "Vehículos vocacionales", description: "Tecnología para vehículos especializados y maquinaria.", href: "/industrias/vehiculos-vocacionales" },
  { icon: HardHat, name: "Montacargas e interiores", description: "Seguridad operativa en patios, naves y almacenes.", href: "/industrias/montacargas" },
  { icon: Car, name: "Flotas corporativas", description: "Visibilidad y control para flotas mixtas empresariales.", href: "/industrias/flotas-corporativas" },
  { icon: Zap, name: "Vehículos eléctricos", description: "Gestión de carga e infraestructura para flotas EV.", href: "/industrias/vehiculos-electricos" },
];

export const IndustriesSection = () => {
  return (
    <section id="industrias" className="relative py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.35]"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/80" />
      </div>
      <div className="absolute inset-0 grid-overlay-fine" />
      
      <div className="container relative">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Industrias</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground tracking-tight leading-tight">
                Soluciones adaptadas a cada sector
              </h2>
              <p className="text-muted-foreground mt-5 text-base">
                Servimos a empresas que dependen del transporte seguro y la supervisión operativa de sus activos.
              </p>
            </div>
            <Button variant="outline-dark" size="lg" asChild className="self-start lg:self-auto">
              <a href="/industrias">
                Ver industrias
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.slice(0, 4).map((ind, i) => (
            <ScrollReveal key={ind.name} delay={i * 80}>
              <a href={ind.href} className="group block bg-card/40 border border-white/[0.05] rounded-lg p-6 hover:border-accent/20 transition-all duration-300 h-full">
                <div className="w-11 h-11 rounded-lg bg-accent/8 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                  <ind.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-1.5 font-display">{ind.name}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{ind.description}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          {industries.slice(4).map((ind, i) => (
            <ScrollReveal key={ind.name} delay={(i + 4) * 80}>
              <a href={ind.href} className="group block bg-card/40 border border-white/[0.05] rounded-lg p-6 hover:border-accent/20 transition-all duration-300 h-full">
                <div className="w-11 h-11 rounded-lg bg-accent/8 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                  <ind.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-1.5 font-display">{ind.name}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{ind.description}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
