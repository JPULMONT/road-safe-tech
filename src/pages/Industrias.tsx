import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";

const IndustriasPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-background">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container relative">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Industrias</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight leading-tight max-w-3xl">
              Soluciones para cada sector
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Entendemos los desafíos operativos de cada industria y configuramos la tecnología ideal para su contexto.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container space-y-5">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.slug} delay={i * 50}>
              <div className="group bg-card/40 border border-white/[0.05] rounded-lg p-8 hover:border-accent/20 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-11 h-11 rounded-md bg-accent/8 flex items-center justify-center">
                        <ind.icon size={20} className="text-accent" />
                      </div>
                      <h2 className="text-xl font-display font-bold text-foreground">{ind.name}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">{ind.heroDescription}</p>
                    <Button variant="outline-dark" size="sm" asChild>
                      <Link to={`/industrias/${ind.slug}`}>
                        Ver soluciones para este sector
                        <ArrowRight size={14} />
                      </Link>
                    </Button>
                  </div>
                  <div className="lg:w-64 flex-shrink-0">
                    <p className="text-xs font-medium text-foreground/40 uppercase tracking-widest mb-3">Soluciones recomendadas</p>
                    <ul className="space-y-2">
                      {ind.recommendedSolutions.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-sm text-foreground/60">
                          <div className="w-1 h-1 rounded-full bg-accent" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default IndustriasPage;
