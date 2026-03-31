import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import platformImage from "@/assets/platform-dashboard.jpg";
import { ArrowRight, Activity, Bell, MapPin, Shield, BarChart3, Smartphone, Layers, Zap } from "lucide-react";

const capabilities = [
  { icon: Activity, title: "Análisis predictivo", description: "Identifique patrones de riesgo antes de que se conviertan en incidentes." },
  { icon: Bell, title: "Alertas clasificadas por IA", description: "Cada alerta se prioriza automáticamente según severidad y contexto." },
  { icon: MapPin, title: "Rastreo en tiempo real", description: "Visibilidad de cada unidad, ruta y estado operativo al momento." },
  { icon: Shield, title: "Supervisión de conductores", description: "Monitoreo de comportamiento, fatiga, distracción y cumplimiento." },
  { icon: BarChart3, title: "Reportes automatizados", description: "Informes operativos generados automáticamente con métricas clave." },
  { icon: Smartphone, title: "Acceso web y móvil", description: "Gestione su flota desde cualquier dispositivo, en cualquier momento." },
  { icon: Layers, title: "Integración de dispositivos", description: "Conecte cámaras, sensores, GPS y radares en un solo entorno." },
  { icon: Zap, title: "Respuesta inmediata", description: "Notificaciones push y protocolos de acción para eventos críticos." },
];

const PlataformaPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-[0.10]"
            loading="eager"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[200px] translate-x-1/3 -translate-y-1/2" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Plataforma</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold text-foreground tracking-tight leading-tight">
                GPT Monitor
              </h1>
              <p className="text-xl text-muted-foreground mt-2 font-display">Supervisión inteligente de flotas</p>
              <p className="text-muted-foreground mt-6 leading-relaxed max-w-lg">
                Centralice los datos de todos sus dispositivos — cámaras, sensores, GPS, radares — en una sola plataforma con análisis predictivo y clasificación de alertas por inteligencia artificial.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button variant="accent" size="xl" asChild>
                  <a href="/contacto">
                    Solicitar demostración
                    <ArrowRight size={18} />
                  </a>
                </Button>
                <Button variant="outline-dark" size="xl" asChild>
                  <a href="/contacto">Hablar con un especialista</a>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/[0.03] rounded-2xl blur-[60px]" />
                <img src={platformImage} alt="GPT Monitor dashboard" className="relative rounded-lg border border-white/[0.06]" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-dark">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
                Todo lo que necesita en un solo lugar
              </h2>
              <p className="text-muted-foreground mt-5">Capacidades diseñadas para operaciones de transporte reales.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 60}>
                <div className="bg-card/40 border border-white/[0.05] rounded-lg p-6 h-full hover:border-accent/15 transition-all">
                  <cap.icon size={18} className="text-accent mb-4" />
                  <h3 className="font-display font-semibold text-foreground text-sm mb-2">{cap.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground tracking-tight mb-5">
              Tome el control de su operación
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Solicite una demostración personalizada y vea cómo GPT Monitor puede transformar la supervisión de su flota.
            </p>
            <Button variant="accent" size="xl" asChild>
              <a href="/contacto">
                Solicitar demostración
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

export default PlataformaPage;
