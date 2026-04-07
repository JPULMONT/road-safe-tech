import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { Button } from "@/components/ui/button";
import { Factory, ShieldCheck, Award, ArrowRight } from "lucide-react";
import bgMexicoChina from "@/assets/bg-mexico-china.png";
const highlights = [
  { icon: Factory, title: "Fabricación propia", description: "Producción en Shenzhen y Ciudad de México. Control total de calidad." },
  { icon: ShieldCheck, title: "Enfoque en seguridad vial", description: "Cada producto existe para prevenir accidentes y proteger vidas." },
  { icon: Award, title: "Experiencia comprobada", description: "Más de 8,400 unidades y 150 flotas protegidas activamente." },
];

export const WhyCarstoreTeaser = () => {
  return (
    <section className="relative py-20 bg-surface-dark overflow-hidden">
      <ParallaxBackground src={bgMexicoChina} opacity="opacity-[0.10]" />
      <div className="absolute inset-0 bg-background/90" />
      <div className="absolute inset-0 grid-overlay" />
      <div className="container relative">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">¿Por qué Carstore?</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
              No somos un distribuidor. Somos el fabricante.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {highlights.map((d, i) => (
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

        <ScrollReveal>
          <div className="text-center">
            <Button variant="outline-dark" size="lg" asChild>
              <Link to="/nosotros">
                Conocer más sobre Carstore <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
