import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import bgIndustries from "@/assets/bg-industries.jpg";
import { Factory, Globe, ShieldCheck, Headphones, Cpu, Award } from "lucide-react";

const differentiators = [
  { icon: Factory, title: "Fabricación propia", description: "Producción en Shenzhen y Ciudad de México. Control total de calidad." },
  { icon: Cpu, title: "Hardware + software", description: "Diseñamos, desarrollamos e integramos ambos componentes como sistema." },
  { icon: Globe, title: "Capacidad internacional", description: "Manufactura en China, integración y soporte desde México." },
  { icon: ShieldCheck, title: "Enfoque en seguridad vial", description: "Cada producto existe para prevenir accidentes y proteger vidas." },
  { icon: Headphones, title: "Soporte integral", description: "Desde diagnóstico hasta mantenimiento postventa continuo." },
  { icon: Award, title: "Experiencia comprobada", description: "Más de 8,400 unidades y 150 flotas protegidas activamente." },
];

export const WhyCarstore = () => {
  return (
    <section id="nosotros" className="relative py-28 bg-surface-dark overflow-hidden">
      <ParallaxBackground
        src={bgIndustries}
        opacity="opacity-[0.10]"
      />
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/[0.03] rounded-full blur-[200px]" />

      <div className="container relative">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">¿Por qué Carstore?</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground tracking-tight" style={{ textShadow: '0 2px 30px rgba(0,0,0,0.9)' }}>
              No somos un distribuidor. Somos el fabricante.
            </h2>
            <p className="text-foreground/80 mt-5 text-base max-w-xl mx-auto" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
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
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{d.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
