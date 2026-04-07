import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { casos } from "@/data/casos";
import { useSeo } from "@/hooks/useSeo";

const filters = [
  { label: "Todos", value: "all" },
  { label: "Transporte", value: "transporte-y-logistica" },
  { label: "Reparto", value: "reparto-y-ultima-milla" },
  { label: "Montacargas", value: "montacargas" },
];

const CasosDeExito = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  useSeo({
    title: "Casos de Éxito | Carstore",
    description: "Resultados reales de flotillas mexicanas que mejoraron su seguridad, eficiencia y control operativo con tecnología Carstore.",
  });

  const filtered = activeFilter === "all" ? casos : casos.filter((c) => c.industriaSlug === activeFilter);

  return (
    <PageTransition className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-background overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[200px]" />
        <div className="container relative">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Casos de éxito</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight leading-tight max-w-3xl">
              Empresas que ya operan con tecnología Carstore
            </h1>
            <p className="text-lg text-foreground/70 mt-6 max-w-2xl leading-relaxed">
              Resultados reales de flotillas mexicanas que mejoraron su seguridad, eficiencia y control operativo.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8 bg-background border-b border-white/[0.04]">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === f.value
                    ? "bg-accent text-white"
                    : "border border-white/[0.1] text-foreground/60 hover:border-accent/30 hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((caso, i) => (
              <ScrollReveal key={caso.id} delay={i * 80}>
                <div className="border-t-2 border-accent bg-card/40 border border-white/[0.05] rounded-xl p-7 h-full flex flex-col">
                  {/* Industry tag */}
                  <span className="inline-block text-[11px] font-semibold text-accent bg-accent/10 rounded-full px-3 py-1 w-fit mb-5">
                    {caso.industryTag}
                  </span>

                  {/* Main metric */}
                  <p className="text-5xl font-display font-bold text-accent">{caso.metricaPrincipal.value}</p>
                  <p className="text-sm text-foreground/60 mt-1 mb-6">{caso.metricaPrincipal.label}</p>

                  {/* Reto */}
                  <p className="text-[10px] font-semibold text-foreground/40 uppercase tracking-[0.15em] mb-2">El reto</p>
                  <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2 mb-5">{caso.reto}</p>

                  {/* Resultado */}
                  <p className="text-[10px] font-semibold text-foreground/40 uppercase tracking-[0.15em] mb-2">El resultado</p>
                  <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2 mb-6">{caso.resultado}</p>

                  {/* Pullquote */}
                  <blockquote className="border-l-2 border-accent/30 pl-4 italic text-sm text-foreground/60 leading-relaxed mb-2">
                    "{caso.testimonioTexto}"
                  </blockquote>
                  <p className="text-xs text-foreground/40 mb-6 pl-4">— {caso.testimonioAutor}, {caso.testimonioCargoEmpresa}</p>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link
                      to="/contacto"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      Ver caso completo <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
};

export default CasosDeExito;
