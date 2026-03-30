import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { getSolutionBySlug, getProductsForSolution } from "@/data/solutions";
import NotFound from "./NotFound";

const SolucionDetallePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = getSolutionBySlug(slug || "");

  if (!solution) return <NotFound />;

  const relatedProducts = getProductsForSolution(solution);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[250px]" />
        <div className="container relative">
          <ScrollReveal>
            <Link to="/soluciones" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8">
              <ArrowLeft size={14} />
              Todas las soluciones
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <solution.icon size={22} className="text-accent" />
              </div>
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">{solution.tag}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight leading-tight max-w-3xl">
              {solution.title}
            </h1>
            <p className="text-base text-muted-foreground/80 mt-2 font-medium">{solution.subtitle}</p>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              {solution.heroDescription}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-surface-dark border-y border-white/[0.04]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {solution.stats.map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-display font-bold text-accent">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problem + Long description */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">El problema</p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight leading-tight mb-6">
                ¿Por qué necesita esta solución?
              </h2>
              <p className="text-muted-foreground leading-relaxed">{solution.problemStatement}</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xs font-semibold text-foreground/40 uppercase tracking-[0.2em] mb-4">Nuestra respuesta</p>
              <p className="text-muted-foreground leading-relaxed">{solution.longDescription}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {solution.features.map((f) => (
                  <span key={f} className="text-xs px-3 py-1.5 rounded-full bg-accent/8 text-accent/90 font-medium">
                    {f}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-surface-dark">
        <div className="container">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Beneficios</p>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight leading-tight mb-12 max-w-xl">
              Resultados comprobados para su operación
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {solution.benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 60}>
                <div className="bg-card/40 border border-white/[0.05] rounded-lg p-6 hover:border-accent/15 transition-all h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0" />
                    <h3 className="font-semibold text-foreground font-display">{b.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-[30px]">{b.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container">
            <ScrollReveal>
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Productos relacionados</p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight leading-tight mb-12">
                Tecnología para esta solución
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProducts.slice(0, 6).map((product, i) => (
                <ScrollReveal key={product.id} delay={i * 60}>
                  <Link to={`/producto/${product.slug}`} className="group block bg-card/40 border border-white/[0.05] rounded-lg overflow-hidden hover:border-accent/20 transition-all h-full">
                    <div className="aspect-[4/3] bg-card/60 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-widest mb-2">{product.category}</p>
                      <h3 className="font-semibold text-foreground font-display text-sm mb-2">{product.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{product.shortDescription}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-surface-dark">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight mb-5">
              ¿Listo para implementar esta solución?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Nuestro equipo puede evaluar su operación y diseñar la implementación ideal para su flota.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contacto">
                  {solution.ctaText}
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="outline-dark" size="xl" asChild>
                <Link to="/catalogo">
                  Ver catálogo de productos
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolucionDetallePage;
