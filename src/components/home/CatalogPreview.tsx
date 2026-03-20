import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Radar, MonitorSmartphone, Cpu } from "lucide-react";

const categories = [
  {
    icon: Camera,
    name: "Cámaras y visión",
    count: 12,
    description: "Dashcams, cámaras de reversa con IA, sistemas 360°",
  },
  {
    icon: Radar,
    name: "Sensores y radares",
    count: 8,
    description: "Radares de punto ciego, detección lateral por microondas",
  },
  {
    icon: MonitorSmartphone,
    name: "Plataformas y software",
    count: 4,
    description: "GPT Monitor, apps móviles, integraciones API",
  },
  {
    icon: Cpu,
    name: "Kits de seguridad",
    count: 6,
    description: "Soluciones completas pre-configuradas por tipo de vehículo",
  },
];

export const CatalogPreview = () => {
  return (
    <section id="catalogo" className="relative py-28 bg-surface-dark">
      <div className="absolute inset-0 grid-overlay" />
      
      <div className="container relative">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Catálogo</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight">
                Explore nuestra tecnología
              </h2>
              <p className="text-muted-foreground mt-4 text-base max-w-lg">
                Productos y soluciones curados para cada necesidad operativa de su flota.
              </p>
            </div>
            <Button variant="outline-dark" size="lg" asChild>
              <a href="#catalogo">
                Ver catálogo completo
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={i * 100}>
              <a href="#" className="group block bg-card/50 backdrop-blur-sm rounded-lg border border-white/[0.06] p-6 hover:border-accent/20 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-white/[0.04] flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                  <cat.icon size={22} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 font-display">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{cat.description}</p>
                <span className="text-xs font-medium text-accent">{cat.count} productos →</span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
