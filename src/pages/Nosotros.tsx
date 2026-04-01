import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Globe, ShieldCheck, Cpu, Calendar, Users } from "lucide-react";

const milestones = [
  { icon: Calendar, label: "Fundada en 2000" },
  { icon: Factory, label: "Manufactura en Shenzhen y CDMX" },
  { icon: Globe, label: "Presencia internacional" },
  { icon: Users, label: "150+ flotas activas" },
  { icon: ShieldCheck, label: "8,400+ unidades protegidas" },
  { icon: Cpu, label: "Hardware + software + plataforma" },
];

const NosotrosPage = () => {
  return (
    <PageTransition className="min-h-screen">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80"
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
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Nosotros</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight leading-tight max-w-3xl">
              Tecnología mexicana para la seguridad vial
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Creando dispositivos de seguridad vial desde hace más de 25 años. Esforzándonos y creando soluciones que intervengan de forma directa en la seguridad vial.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="font-display font-bold text-sm uppercase tracking-[0.15em]">
                  <span className="text-foreground">Nuestra </span>
                  <span className="text-accent">Misión</span>
                </h2>
                <div className="border-b-2 border-accent w-12" />
                <p className="text-muted-foreground leading-relaxed">
                  Nos inspiramos en diseñar e implementar soluciones con tecnología de punta, impactando en la seguridad vial de los clientes con sistemas de prevención de accidentes que representan un apoyo para consolidar cambios culturales en todo usuario de la vía.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-4">
                <h2 className="font-display font-bold text-sm uppercase tracking-[0.15em]">
                  <span className="text-foreground">Nuestra </span>
                  <span className="text-accent">Visión</span>
                </h2>
                <div className="border-b-2 border-accent w-12" />
                <p className="text-muted-foreground leading-relaxed">
                  Ser número uno como referente global integrando soluciones de seguridad vial y patrimonial, enfocadas al transporte con la convicción de salvar vidas.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-4">
                <h2 className="font-display font-bold text-sm uppercase tracking-[0.15em]">
                  <span className="text-foreground">Nuestros </span>
                  <span className="text-accent">Valores</span>
                </h2>
                <div className="border-b-2 border-accent w-12" />
                <div className="flex flex-wrap gap-2">
                  {["Honestidad", "Pasión", "Ética", "Responsabilidad", "Disciplina", "Trabajo en equipo", "Perseverancia", "Compromiso"].map((value) => (
                    <span key={value} className="bg-accent/10 text-accent/90 border border-accent/20 rounded-full px-4 py-2 text-sm font-medium">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-foreground">Lo que nos hace diferentes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Somos fabricantes, no distribuidores. Diseñamos y producimos nuestro propio hardware en Shenzhen, desarrollamos software y plataformas en México, e implementamos cada solución con equipos técnicos propios. Control total de la cadena de valor.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {milestones.map((m) => (
                  <div key={m.label} className="bg-card/40 border border-white/[0.05] rounded-lg p-5 flex items-start gap-3">
                    <m.icon size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70">{m.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-dark">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground tracking-tight mb-5">
              Conozca nuestras soluciones
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Explore cómo nuestra tecnología puede proteger su flota y optimizar su operación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <a href="/catalogo">
                  Ver catálogo
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="outline-dark" size="xl" asChild>
                <a href="/contacto">Contactar ventas</a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </PageTransition>
  );
};

export default NosotrosPage;
