import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Radio, ShieldCheck, Cpu, BarChart3, CircuitBoard, Zap, Wrench } from "lucide-react";

const solutions = [
  {
    icon: Eye,
    slug: "seguridad-vial-inteligente",
    title: "Seguridad vial inteligente",
    description: "Dashcam + ADAS + DSM para monitoreo del conductor, prevención de colisiones y asistencia avanzada en tiempo real.",
    features: ["Detección de fatiga y distracción", "Alerta de colisión frontal", "Aviso de cambio de carril", "Grabación continua con IA"],
  },
  {
    icon: Cpu,
    slug: "camaras-y-visibilidad-avanzada",
    title: "Cámaras y visibilidad avanzada",
    description: "Sistemas de visión 360°, cámaras de reversa con IA, monitoreo exterior e interior para eliminación total de puntos ciegos.",
    features: ["Visión perimetral completa", "Cámaras inalámbricas", "Monitoreo nocturno", "Integración con plataforma"],
  },
  {
    icon: Radio,
    slug: "deteccion-de-riesgos",
    title: "Detección de riesgos y puntos ciegos",
    description: "Radares de punto ciego por microondas, sensores de reversa, sistemas BSIS y detección lateral para maniobras seguras.",
    features: ["Radar de microondas", "Smart BSIS", "Sensores ultrasónicos", "Sistemas redundantes"],
  },
  {
    icon: CircuitBoard,
    slug: "telemetria-y-gps",
    title: "GPS, telemetría y analítica",
    description: "Rastreo en tiempo real, control de ralentí, geofencing, corte de corriente y análisis operativo de su flota.",
    features: ["GPS OBD2 / GV300 / GV600", "Apagado por inactividad", "Geofencing inteligente", "Reportes automatizados"],
  },
  {
    icon: BarChart3,
    slug: "monitoreo-y-control-operativo",
    title: "Monitoreo y control operativo",
    description: "Plataforma GPT Monitor con análisis predictivo, clasificación de alertas con IA y supervisión centralizada de flotas.",
    features: ["Dashboard en tiempo real", "Alertas clasificadas por IA", "Análisis predictivo", "Acceso web y móvil"],
  },
  {
    icon: ShieldCheck,
    slug: "seguridad-montacargas",
    title: "Seguridad para montacargas",
    description: "Soluciones especializadas para operación en patios, naves industriales y almacenes con vehículos de interior.",
    features: ["Alarmas de proximidad", "Limitadores de velocidad", "Cámaras de zona", "Señalización inteligente"],
  },
  {
    icon: Zap,
    slug: "vehiculos-electricos",
    title: "Vehículos eléctricos e infraestructura",
    description: "Cargadores, telemetría EV y gestión de infraestructura de carga para flotas eléctricas e híbridas.",
    features: ["Cargadores nivel 2 y DC", "Telemetría de batería", "Gestión de carga", "Reportes de consumo"],
  },
  {
    icon: Wrench,
    slug: "implementacion-y-soporte",
    title: "Implementación, instalación y soporte",
    description: "Diagnóstico, diseño de solución, instalación profesional, capacitación, mantenimiento y servicio postventa.",
    features: ["Diagnóstico operativo", "Instalación certificada", "Capacitación de usuarios", "Soporte postventa"],
  },
];

const SolucionesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-background">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[200px]" />
        <div className="container relative">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Soluciones</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight leading-tight max-w-3xl">
              Tecnología integral para la seguridad de su flota
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Cada solución está diseñada para resolver problemas operativos reales: prevenir accidentes, dar visibilidad y optimizar su operación de transporte.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container space-y-6">
          {solutions.map((sol, i) => (
            <ScrollReveal key={sol.slug} delay={i * 50}>
              <div className="group bg-card/40 border border-white/[0.05] rounded-lg p-8 hover:border-accent/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-11 h-11 rounded-md bg-accent/8 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                        <sol.icon size={20} className="text-accent" />
                      </div>
                      <h2 className="text-xl font-display font-bold text-foreground">{sol.title}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">{sol.description}</p>
                    <Button variant="outline-dark" size="sm" asChild>
                      <a href={`/soluciones/${sol.slug}`}>
                        Conocer más
                        <ArrowRight size={14} />
                      </a>
                    </Button>
                  </div>
                  <div className="lg:w-72 flex-shrink-0">
                    <ul className="space-y-2">
                      {sol.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-foreground/60">
                          <div className="w-1 h-1 rounded-full bg-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface-dark">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground tracking-tight mb-5">
              ¿No sabe qué solución necesita?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Nuestro equipo puede diagnosticar su operación y recomendar la combinación ideal de tecnología.
            </p>
            <Button variant="accent" size="xl" asChild>
              <a href="/contacto">
                Hablar con un especialista
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

export default SolucionesPage;
