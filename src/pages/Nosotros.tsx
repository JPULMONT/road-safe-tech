import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { ArrowRight, Factory, Globe, ShieldCheck, Cpu, Calendar, Users, Headphones, Award } from "lucide-react";
import bgIndustries from "@/assets/bg-industries.jpg";
import certEsr from "@/assets/cert-esr-only.png";
import certHechoMx from "@/assets/cert-hecho-mx.png";

/* ── Section 3: Differentiators ── */
const differentiators = [
  { icon: Factory, title: "Fabricación propia", description: "Producción en Shenzhen y Ciudad de México. Control total de calidad." },
  { icon: Cpu, title: "Hardware + software", description: "Diseñamos, desarrollamos e integramos ambos componentes como sistema." },
  { icon: Globe, title: "Capacidad internacional", description: "Manufactura en China, integración y soporte desde México." },
  { icon: ShieldCheck, title: "Enfoque en seguridad vial", description: "Cada producto existe para prevenir accidentes y proteger vidas." },
  { icon: Headphones, title: "Soporte integral", description: "Desde diagnóstico hasta mantenimiento postventa continuo." },
  { icon: Award, title: "Experiencia comprobada", description: "Más de 8,400 unidades y 150 flotas protegidas activamente." },
];

/* ── Section 4: Milestones ── */
const milestones = [
  { icon: Calendar, label: "+25 años de experiencia" },
  { icon: Factory, label: "Manufactura en Shenzhen y CDMX" },
  { icon: Globe, label: "Presencia internacional" },
  { icon: Users, label: "150+ flotas activas" },
  { icon: ShieldCheck, label: "8,400+ unidades protegidas" },
  { icon: Cpu, label: "Hardware + software + plataforma" },
];

/* ── Section 5: Certifications ── */
const certifications = [
  { image: certEsr, title: "ESR — Empresa Socialmente Responsable", description: "Reconocimiento por nuestras prácticas de responsabilidad social empresarial y compromiso con la comunidad." },
  { image: certHechoMx, title: "Hecho en México", description: "Orgullosamente diseñamos e integramos nuestras soluciones en territorio mexicano, generando empleo y valor local." },
];

const NosotrosPage = () => {
  return (
    <PageTransition className="min-h-screen">
      <Navbar />

      {/* ── SECTION 1: Hero ── */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container relative">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Nosotros</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight leading-tight max-w-3xl">
              Tecnología mexicana para la seguridad vial
            </h1>
            <p className="text-lg text-foreground/70 mt-6 max-w-2xl leading-relaxed">
              Creando dispositivos de seguridad vial desde hace más de 25 años. Esforzándonos y creando soluciones que intervengan de forma directa en la seguridad vial.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 2: Misión / Visión / Valores ── */}
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
                <p className="text-foreground/70 leading-relaxed">
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
                <p className="text-foreground/70 leading-relaxed">
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

      {/* ── SECTION 3: Fabricante (from WhyCarstore) ── */}
      <section className="relative py-28 bg-surface-dark overflow-hidden">
        <ParallaxBackground src={bgIndustries} opacity="opacity-[0.10]" />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/[0.03] rounded-full blur-[200px]" />

        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground tracking-tight" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9)' }}>
                No somos un distribuidor. Somos el fabricante.
              </h2>
              <p className="text-foreground/80 mt-5 text-base max-w-xl mx-auto" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9)' }}>
                Desarrollamos, fabricamos, instalamos y mantenemos la tecnología que protege su flota. Control total de la cadena de valor.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentiators.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 70}>
                <div className="flex gap-4 bg-card/40 rounded-lg p-5 border border-white/[0.05] hover:border-accent/15 transition-all duration-300">
                  <div className="w-10 h-10 rounded-md bg-accent/8 flex items-center justify-center flex-shrink-0">
                    <d.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1 font-display">{d.title}</h3>
                    <p className="text-[13px] text-foreground/70 leading-relaxed">{d.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Milestones ── */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-foreground">Lo que nos hace diferentes</h2>
                <p className="text-foreground/70 leading-relaxed">
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

      {/* ── SECTION 5: Certifications ── */}
      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-2xl font-display font-bold text-foreground tracking-tight mb-8 text-center">
              Respaldo y certificaciones
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.title} delay={i * 100}>
                <div className="bg-card/40 border border-white/[0.05] rounded-xl p-8 text-center flex flex-col items-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-28 w-auto object-contain mb-6 brightness-0 invert opacity-90"
                    loading="lazy"
                  />
                  <h3 className="font-display font-semibold text-foreground text-base mb-2">{cert.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{cert.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Social Media ── */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <ScrollReveal>
            <h3 className="text-2xl font-display font-bold text-foreground tracking-tight mb-6">
              Síguenos
            </h3>
            <div className="flex justify-center">
              <SocialLinks size="lg" variant="accent" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 7: Final CTA ── */}
      <section className="py-24 bg-surface-dark">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground tracking-tight mb-5">
              Conozca nuestras soluciones
            </h2>
            <p className="text-foreground/70 mb-8 max-w-lg mx-auto">
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
