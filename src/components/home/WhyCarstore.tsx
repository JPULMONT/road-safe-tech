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
    <section id="nosotros" className="py-24 bg-muted/50">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">¿Por qué Carstore?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              No somos un distribuidor. Somos el fabricante.
            </h2>
            <p className="text-muted-foreground mt-4 text-base">
              Desarrollamos, fabricamos, instalamos y mantenemos la tecnología que protege su flota. Control total de la cadena de valor.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((d, i) => (
            <ScrollReveal key={d.title} delay={i * 80}>
              <div className="flex gap-4 bg-card rounded-lg p-5 border border-border">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <d.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{d.title}</h3>
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
