import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, AlertTriangle, CheckCircle2, ChevronRight } from "lucide-react";
import { getIndustryBySlug, getProductsForIndustry } from "@/data/industries";
import { solutions } from "@/data/solutions";
import NotFound from "./NotFound";

const IndustriaDetallePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = getIndustryBySlug(slug || "");

  if (!industry) return <NotFound />;

  const relatedProducts = getProductsForIndustry(industry);

  return (
    <PageTransition className="min-h-screen">
      <Navbar />

      {/* Breadcrumb + JSON-LD */}
      <div className="bg-background border-b border-border pt-24 pb-4">
        <div className="container">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link>
            <ChevronRight size={12} />
            <Link to="/industrias" className="hover:text-foreground transition-colors">Industrias</Link>
            <ChevronRight size={12} />
            <span className="text-foreground">{industry.name}</span>
          </nav>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://carstore.lovable.app/" },
              { "@type": "ListItem", position: 2, name: "Industrias", item: "https://carstore.lovable.app/industrias" },
              { "@type": "ListItem", position: 3, name: industry.name, item: `https://carstore.lovable.app/industrias/${industry.slug}` },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-12 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[200px]" />
        <div className="container relative">
          <ScrollReveal>
            <Link to="/industrias" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8">
              <ArrowLeft size={14} />
              Todas las industrias
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <industry.icon size={22} className="text-accent" />
              </div>
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">{industry.subtitle}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight leading-tight max-w-3xl">
              {industry.name}
            </h1>
            <p className="text-lg text-foreground/70 mt-6 max-w-2xl leading-relaxed">
              {industry.heroDescription}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-surface-dark border-y border-white/[0.04]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {industry.stats.map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-display font-bold text-accent">{stat.value}</p>
                  <p className="text-sm text-foreground/60 mt-1">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges + Description */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Desafíos del sector</p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight leading-tight mb-8">
                Riesgos que enfrentan las flotas de este sector
              </h2>
              <div className="space-y-4">
                {industry.challenges.map((challenge) => (
                  <div key={challenge} className="flex items-start gap-3">
                    <AlertTriangle size={16} className="text-accent/60 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/70 leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xs font-semibold text-foreground/40 uppercase tracking-[0.2em] mb-4">Nuestra propuesta</p>
              <p className="text-foreground/70 leading-relaxed mb-8">{industry.longDescription}</p>
              <div>
                <p className="text-xs font-medium text-foreground/40 uppercase tracking-widest mb-3">Soluciones recomendadas</p>
                <div className="flex flex-wrap gap-2">
                  {industry.recommendedSolutions.map((s) => (
                    <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-accent/8 text-accent/90 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
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
              Cómo transformamos la operación de su flota
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {industry.benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 60}>
                <div className="bg-card/40 border border-white/[0.05] rounded-lg p-6 hover:border-accent/15 transition-all h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0" />
                    <h3 className="font-semibold text-foreground font-display">{b.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed pl-[30px]">{b.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      {(() => {
        const relatedSolutions = solutions.filter((s) =>
          s.relatedIndustrySlugs.includes(industry.slug)
        );
        return relatedSolutions.length > 0 ? (
          <section className="py-20 bg-background">
            <div className="container">
              <ScrollReveal>
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Soluciones recomendadas</p>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight leading-tight mb-12">
                  Soluciones para esta industria
                </h2>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedSolutions.slice(0, 3).map((sol, i) => (
                  <ScrollReveal key={sol.slug} delay={i * 60}>
                    <Link
                      to={`/soluciones/${sol.slug}`}
                      className="group block bg-card/40 border border-white/[0.05] rounded-lg p-6 hover:border-accent/20 transition-all h-full"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <sol.icon size={18} className="text-accent" />
                        </div>
                        <span className="text-[10px] font-semibold text-accent uppercase tracking-widest">{sol.tag}</span>
                      </div>
                      <h3 className="font-semibold text-foreground font-display mb-2 group-hover:text-accent transition-colors">{sol.title}</h3>
                      <p className="text-xs text-foreground/70 leading-relaxed line-clamp-3 mb-4">{sol.heroDescription}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-accent">
                        Ver solución <ArrowRight size={12} />
                      </span>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        ) : null;
      })()}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container">
            <ScrollReveal>
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Productos recomendados</p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight leading-tight mb-12">
                Tecnología para este sector
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProducts.slice(0, 6).map((product, i) => (
                <ScrollReveal key={product.id} delay={i * 60}>
                  <Link to={`/producto/${product.slug}`} className="group block bg-card/40 border border-white/[0.05] rounded-lg overflow-hidden hover:border-accent/20 transition-all h-full">
                    <div className="relative aspect-[4/3] bg-card/60 overflow-hidden">
                      <ImageWithFallback
                        src={product.images[0]}
                        alt={product.title}
                        fallbackText={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={600}
                        height={450}
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-widest mb-2">{product.category}</p>
                      <h3 className="font-semibold text-foreground font-display text-sm mb-2">{product.title}</h3>
                      <p className="text-xs text-foreground/70 leading-relaxed line-clamp-2">{product.shortDescription}</p>
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
              ¿Opera en este sector?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-lg mx-auto">
              Podemos diseñar una solución a medida para los desafíos específicos de su industria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contacto">
                  {industry.ctaText}
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="outline-dark" size="xl" asChild>
                <Link to="/soluciones">
                  Ver todas las soluciones
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
};

export default IndustriaDetallePage;
