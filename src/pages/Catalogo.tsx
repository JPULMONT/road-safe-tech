import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Camera, Cpu, Radar, Wrench, CircuitBoard, MonitorSmartphone, Zap } from "lucide-react";

const categories = [
  { icon: Brain, name: "Inteligencia artificial", slug: "inteligencia-artificial", count: 6, description: "Dashcams ADAS+DSM, cámaras con detección IA, cascos inteligentes" },
  { icon: Camera, name: "Cámaras y video", slug: "camaras-y-video", count: 14, description: "Reversa con monitor, 360°, monitoreo exterior, inalámbricas, side mirror" },
  { icon: Cpu, name: "Limitadores y control", slug: "limitadores-y-control", count: 5, description: "Limitadores de velocidad, corte de corriente, power box" },
  { icon: Radar, name: "Sensores y detección", slug: "sensores-y-deteccion", count: 8, description: "Punto ciego, Smart BSIS, sensores de reversa, sistema redundante" },
  { icon: Wrench, name: "Montacargas", slug: "montacargas", count: 4, description: "Seguridad específica para montacargas y operación interior" },
  { icon: CircuitBoard, name: "GPS y telemetría", slug: "gps-y-telemetria", count: 6, description: "OBD2, GV300, GV600, ralentí, velocímetro digital" },
  { icon: MonitorSmartphone, name: "Dispositivos complementarios", slug: "complementarios", count: 10, description: "Presión de llantas, tapón antirrobo, espejos, sirenas, ventiladores" },
  { icon: Zap, name: "Vehículos eléctricos", slug: "vehiculos-electricos", count: 4, description: "Cargadores eléctricos, telemetría EV, infraestructura de carga" },
];

const CatalogoPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-background">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container relative">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Catálogo 2025</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight leading-tight max-w-3xl">
              Tecnología para cada necesidad de su flota
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Más de 60 productos organizados por categoría. Encuentre la solución exacta para su operación.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.slug} delay={i * 70}>
                <a href={`/catalogo/${cat.slug}`} className="group block bg-card/40 rounded-lg border border-white/[0.05] p-7 hover:border-accent/20 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-white/[0.03] flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <cat.icon size={22} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-accent tabular-nums">{cat.count}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{cat.name}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{cat.description}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-dark">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground tracking-tight mb-5">
              ¿Necesita ayuda para elegir?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Nuestros especialistas pueden recomendar los productos ideales para su tipo de flota y operación.
            </p>
            <Button variant="accent" size="xl" asChild>
              <a href="/contacto">
                Solicitar asesoría
                <ArrowRight size={18} />
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CatalogoPage;
