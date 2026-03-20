import { ScrollReveal } from "@/components/ScrollReveal";
import { Factory, Globe, ShieldCheck, Headphones, Cpu, Award } from "lucide-react";

const differentiators = [
  { icon: Factory, title: "Fabricación propia", description: "Capacidad de producción en Shenzhen y Ciudad de México." },
  { icon: Cpu, title: "Hardware y software", description: "Diseñamos, desarrollamos e integramos ambos componentes." },
  { icon: Globe, title: "Presencia internacional", description: "Operaciones en México y manufactura en China para escala global." },
  { icon: ShieldCheck, title: "Enfoque en seguridad", description: "Cada producto existe para prevenir accidentes y salvar vidas." },
  { icon: Headphones, title: "Soporte integral", description: "Desde diagnóstico hasta mantenimiento postventa continuo." },
  { icon: Award, title: "Experiencia comprobada", description: "Más de 150 flotas confían en nuestra tecnología diariamente." },
];

export const WhyCarstore = () => {
  return (
    <section id="nosotros" className="relative py-28 bg-surface-dark">
      <div className="absolute inset-0 grid-overlay" />
      {/* Centered glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[150px]" />

      <div className="container relative">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">¿Por qué Carstore?</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight">
              No somos un distribuidor. Somos el fabricante.
            </h2>
            <p className="text-muted-foreground mt-5 text-base">
              Desarrollamos, fabricamos, instalamos y mantenemos la tecnología que protege su flota. Control total de la cadena de valor.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentiators.map((d, i) => (
            <ScrollReveal key={d.title} delay={i * 80}>
              <div className="flex gap-4 bg-card/50 backdrop-blur-sm rounded-lg p-5 border border-white/[0.06] hover:border-accent/15 transition-all duration-300">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <d.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1 font-display">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
