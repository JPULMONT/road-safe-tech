import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Radar, MonitorSmartphone, Cpu, CircuitBoard, Zap, Wrench, Brain } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";

const categories = [
  {
    icon: Brain,
    name: "Inteligencia artificial",
    count: 6,
    description: "Dashcams ADAS+DSM, cámaras con detección IA",
  },
  {
    icon: Camera,
    name: "Cámaras y video",
    count: 14,
    description: "Reversa, 360°, monitoreo exterior, inalámbricas",
  },
  {
    icon: Cpu,
    name: "Limitadores y control",
    count: 5,
    description: "Limitadores de velocidad, corte de corriente",
  },
  {
    icon: Radar,
    name: "Sensores y detección",
    count: 8,
    description: "Punto ciego, BSIS, reversa, redundantes",
  },
  {
    icon: Wrench,
    name: "Montacargas",
    count: 4,
    description: "Seguridad específica para operación en interiores",
  },
  {
    icon: CircuitBoard,
    name: "GPS y telemetría",
    count: 6,
    description: "OBD2, GV300, GV600, ralentí, geofencing",
  },
  {
    icon: MonitorSmartphone,
    name: "Complementarios",
    count: 10,
    description: "Presión de llantas, espejos, sirenas, ventiladores",
  },
  {
    icon: Zap,
    name: "Vehículos eléctricos",
    count: 4,
    description: "Cargadores, telemetría EV, infraestructura",
  },
];

export const CatalogPreview = () => {
  return (
    <section id="catalogo" className="relative py-28 bg-surface-dark">
      <div className="absolute inset-0 grid-overlay" />
      
      <div className="container relative">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Catálogo 2025</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground tracking-tight">
                Explore nuestra tecnología
              </h2>
              <p className="text-muted-foreground mt-4 text-base max-w-lg">
                Más de 60 productos organizados por categoría. Encuentre la solución exacta para su operación.
              </p>
            </div>
            <Button variant="accent" size="lg" asChild>
              <Link to="/catalogo">
                Ver catálogo completo
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={i * 70}>
              <a href={`/catalogo/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} className="group block bg-card/40 rounded-lg border border-white/[0.05] p-6 hover:border-accent/20 transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-white/[0.03] flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <cat.icon size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-accent tabular-nums">{cat.count} productos</span>
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1.5 font-display">{cat.name}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{cat.description}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
