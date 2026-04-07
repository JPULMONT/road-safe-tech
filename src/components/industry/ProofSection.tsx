import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import type { Industry } from "@/data/industries";

interface ProofSectionProps {
  industry: Industry;
}

export const ProofSection = ({ industry }: ProofSectionProps) => {
  const firstBenefit = industry.benefits[0];
  const firstStat = industry.stats[0];

  return (
    <section className="py-20 bg-surface-dark">
      <div className="container">
        <ScrollReveal>
          <div className="bg-card/40 border border-white/[0.05] border-l-4 border-l-accent rounded-xl p-8 sm:p-10 lg:p-12">
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-5">Resultado comprobado</p>
                <blockquote className="text-lg sm:text-xl text-foreground/80 italic leading-relaxed mb-5 max-w-2xl">
                  "{firstBenefit.description}"
                </blockquote>
                <p className="text-sm text-foreground/50">— Operador de {industry.name}, México</p>
                <div className="mt-8">
                  <Button variant="accent" size="lg" asChild>
                    <Link to="/contacto">
                      Solicitar diagnóstico gratuito para su operación
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-5xl sm:text-6xl font-display font-bold text-accent">{firstStat.value}</p>
                <p className="text-sm text-foreground/60 mt-2">{firstStat.label}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
