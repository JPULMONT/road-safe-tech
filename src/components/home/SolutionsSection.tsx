import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { ArrowRight, Eye, Radio, ShieldCheck, Cpu, BarChart3, Wrench, Zap, CircuitBoard } from "lucide-react";

const solutions = [
  { icon: Eye, title: "Dashcam + ADAS + DSM", description: "Cámaras inteligentes con asistencia avanzada al conductor y monitoreo de fatiga en tiempo real.", tag: "Visión" },
  { icon: Radio, title: "Radares de punto ciego", description: "Detección lateral por microondas para maniobras seguras en vehículos pesados y urbanos.", tag: "Detección" },
  { icon: ShieldCheck, title: "Cámaras con IA de reversa", description: "Visión trasera con inteligencia artificial para prevención de colisiones en operaciones de carga.", tag: "Seguridad" },
  { icon: Cpu, title: "Sistemas de visión 360°", description: "Cobertura perimetral completa para eliminación de puntos ciegos en unidades de gran tamaño.", tag: "Visibilidad" },
  { icon: BarChart3, title: "GPT Monitor", description: "Plataforma de análisis predictivo con clasificación inteligente de alertas y supervisión operativa.", tag: "Plataforma" },
  { icon: CircuitBoard, title: "Telemetría y GPS", description: "Rastreo en tiempo real, análisis de ralentí, corte de corriente y geofencing inteligente.", tag: "Control" },
  { icon: Zap, title: "Vehículos eléctricos", description: "Infraestructura de carga, telemetría EV y soluciones para flotas eléctricas e híbridas.", tag: "EV" },
  { icon: Wrench, title: "Implementación y soporte", description: "Instalación profesional, mantenimiento preventivo, servicio postventa y acompañamiento técnico.", tag: "Servicios" },
];

export const SolutionsSection = () => {
  return (
    <section id="soluciones" className="relative py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.30]"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/60" />
      </div>
      <div className="absolute inset-0 grid-overlay-fine" />
      
      <div className="container relative">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Soluciones</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground tracking-tight leading-tight">
                Tecnología integral para la seguridad de su operación
              </h2>
              <p className="text-muted-foreground mt-5 text-base leading-relaxed">
                Desde cámaras con IA hasta plataformas de supervisión inteligente. Cada solución está diseñada para prevenir riesgos y proteger su flota.
              </p>
            </div>
            <Button variant="outline-dark" size="lg" asChild className="self-start lg:self-auto">
              <a href="/soluciones">
                Ver todas las soluciones
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((sol, i) => (
            <ScrollReveal key={sol.title} delay={i * 60}>
              <div className="group bg-card/40 rounded-lg p-6 border border-white/[0.05] hover:border-accent/20 transition-all duration-300 hover:bg-card/70 h-full flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-md bg-accent/8 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                    <sol.icon size={18} className="text-accent" />
                  </div>
                  <span className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-widest">{sol.tag}</span>
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-2 font-display">{sol.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed flex-1">{sol.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
