import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { getFeaturedCasos } from "@/data/casos";
import bgCasos from "@/assets/bg-casos.jpg";

export const CasosSection = () => {
  const featured = getFeaturedCasos();

  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={bgCasos} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/75 to-background/30" />
        <div className="absolute inset-0 grid-overlay" />
      </div>
      <div className="container">
        <ScrollReveal>
          <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Casos de éxito</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight leading-tight mb-12 max-w-2xl">
            Resultados que respaldan cada implementación
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((caso, i) => (
            <ScrollReveal key={caso.id} delay={i * 80}>
              <div className="border-t-2 border-accent bg-card/40 border border-white/[0.05] rounded-xl p-6 h-full flex flex-col">
                <span className="inline-block text-[11px] font-semibold text-accent bg-accent/10 rounded-full px-3 py-1 w-fit mb-4">
                  {caso.industryTag}
                </span>

                <p className="text-4xl font-display font-bold text-accent">{caso.metricaPrincipal.value}</p>
                <p className="text-sm text-foreground/60 mt-1 mb-5">{caso.metricaPrincipal.label}</p>

                <blockquote className="border-l-2 border-accent/30 pl-4 italic text-sm text-foreground/60 leading-relaxed mb-2">
                  "{caso.testimonioTexto}"
                </blockquote>
                <p className="text-xs text-foreground/40 pl-4">— {caso.testimonioAutor}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-10 text-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/casos-de-exito">
                Ver todos los casos de éxito <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
