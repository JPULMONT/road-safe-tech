import { ScrollReveal } from "@/components/ScrollReveal";
import { ShieldCheck, Eye, Cpu, Wrench, BarChart3, Radio } from "lucide-react";

const solutions = [
  {
    icon: Eye,
    title: "Dashcam + ADAS + DSM",
    description: "Cámaras inteligentes con asistencia avanzada al conductor y monitoreo de fatiga en tiempo real.",
  },
  {
    icon: Radio,
    title: "Radares de punto ciego",
    description: "Detección lateral por microondas para maniobras seguras en vehículos pesados y urbanos.",
  },
  {
    icon: ShieldCheck,
    title: "Cámaras con IA de reversa",
    description: "Visión trasera con inteligencia artificial para prevención de colisiones en operaciones de carga.",
  },
  {
    icon: Cpu,
    title: "Sistemas de visión 360°",
    description: "Cobertura perimetral completa para eliminación de puntos ciegos en unidades de gran tamaño.",
  },
  {
    icon: BarChart3,
    title: "GPT Monitor",
    description: "Plataforma de análisis predictivo con clasificación inteligente de alertas y supervisión operativa.",
  },
  {
    icon: Wrench,
    title: "Implementación y soporte",
    description: "Instalación profesional, mantenimiento preventivo, servicio postventa y acompañamiento técnico continuo.",
  },
];

export const SolutionsSection = () => {
  return (
    <section id="soluciones" className="relative py-28 bg-background">
      <div className="absolute inset-0 grid-overlay-fine" />
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px]" />
      
      <div className="container relative">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Soluciones</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight leading-tight">
              Tecnología integral para la seguridad de su operación
            </h2>
            <p className="text-muted-foreground mt-5 text-base leading-relaxed">
              Desde hardware avanzado hasta plataformas de supervisión inteligente, cada solución está diseñada para prevenir riesgos y optimizar su flota.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((sol, i) => (
            <ScrollReveal key={sol.title} delay={i * 80}>
              <div className="group bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-white/[0.06] hover:border-accent/20 transition-all duration-300 hover:bg-card h-full">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                  <sol.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-display">{sol.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{sol.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
