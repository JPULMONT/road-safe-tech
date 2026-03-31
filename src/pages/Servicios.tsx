import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Settings, Truck, Headphones, Wrench, GraduationCap } from "lucide-react";

const services = [
  { icon: BarChart3, title: "Diagnóstico operativo", description: "Evaluamos su flota, identificamos riesgos operativos y definimos prioridades de seguridad para recomendar la solución óptima." },
  { icon: Settings, title: "Diseño de solución", description: "Configuramos la combinación ideal de hardware, software y plataforma según su tipo de flota, vehículos y operación." },
  { icon: Truck, title: "Instalación profesional", description: "Técnicos certificados realizan la instalación en sus unidades con protocolos de calidad y verificación funcional." },
  { icon: GraduationCap, title: "Capacitación", description: "Entrenamos a sus operadores, supervisores y equipo técnico en el uso correcto de cada tecnología instalada." },
  { icon: Wrench, title: "Mantenimiento preventivo", description: "Programa de revisiones periódicas para garantizar el funcionamiento continuo y óptimo de cada dispositivo." },
  { icon: Headphones, title: "Soporte postventa", description: "Mesa de ayuda dedicada, diagnóstico remoto, reparaciones y reemplazo de equipos cuando sea necesario." },
];

const ServiciosPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80"
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
        <div className="container relative">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Servicios</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight leading-tight max-w-3xl">
              De la consultoría a la operación continua
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              No solo vendemos tecnología. Diagnosticamos, diseñamos, instalamos, capacitamos y damos soporte permanente.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 70}>
                <div className="bg-card/40 border border-white/[0.05] rounded-lg p-7 h-full hover:border-accent/15 transition-all">
                  <div className="w-11 h-11 rounded-md bg-accent/8 flex items-center justify-center mb-5">
                    <svc.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{svc.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{svc.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-dark">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground tracking-tight mb-5">
              ¿Listo para implementar?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Comience con un diagnóstico gratuito de su operación. Nuestro equipo le ayudará a definir el plan ideal.
            </p>
            <Button variant="accent" size="xl" asChild>
              <a href="/contacto">
                Solicitar diagnóstico
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

export default ServiciosPage;
