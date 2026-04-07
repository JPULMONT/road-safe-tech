import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { solutions } from "@/data/solutions";

interface IndustrySolutionsProps {
  industrySlug: string;
}

export const IndustrySolutions = ({ industrySlug }: IndustrySolutionsProps) => {
  const related = solutions.filter((s) =>
    s.relatedIndustrySlugs.includes(industrySlug)
  );

  if (related.length === 0) return null;

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <ScrollReveal>
          <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Soluciones recomendadas</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight leading-tight mb-12 max-w-xl">
            Soluciones diseñadas para esta operación
          </h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.slice(0, 3).map((sol, i) => (
            <ScrollReveal key={sol.slug} delay={i * 60}>
              <Link
                to={`/soluciones/${sol.slug}`}
                className="group block bg-card/40 border border-white/[0.05] border-t-2 border-t-accent/40 rounded-xl p-7 hover:border-accent/20 transition-all h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <sol.icon size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground font-display mb-2 group-hover:text-accent transition-colors">
                  {sol.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2 mb-4">
                  {sol.heroDescription}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {sol.features.slice(0, 3).map((f) => (
                    <span key={f} className="text-[10px] px-2.5 py-1 rounded-full bg-accent/8 text-accent/80 font-medium">
                      {f}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent group-hover:gap-2.5 transition-all">
                  Ver solución completa <ArrowRight size={12} />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
