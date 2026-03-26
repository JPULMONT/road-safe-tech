import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Camera, Cpu, Radar, Wrench, CircuitBoard, MonitorSmartphone, Zap } from "lucide-react";
import { categories, getFeaturedProducts } from "@/data/products";
import bgIndustries from "@/assets/bg-industries.jpg";

const iconMap: Record<string, React.ElementType> = {
  Brain, Camera, Cpu, Radar, Wrench, CircuitBoard, MonitorSmartphone, Zap,
};

const CatalogoPage = () => {
  const featured = getFeaturedProducts(4);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero with background */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgIndustries} alt="" className="w-full h-full object-cover opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="absolute inset-0 grid-overlay" />
        <div className="container relative">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Catálogo 2025</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight leading-tight max-w-3xl">
              Tecnología para cada necesidad de su flota
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Más de 60 productos organizados por categoría. Encuentre la solución exacta para su operación.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured products */}
      {featured.length > 0 && (
        <section className="py-20 bg-surface-dark">
          <div className="container">
            <ScrollReveal>
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Destacados</p>
              <h2 className="text-3xl font-display font-bold text-foreground tracking-tight mb-10">
                Productos más solicitados
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featured.map((product, i) => (
                <ScrollReveal key={product.id} delay={i * 80}>
                  <Link
                    to={`/producto/${product.slug}`}
                    className="group block bg-card/40 rounded-xl border border-white/[0.05] overflow-hidden hover:border-accent/20 transition-all duration-300 h-full"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] font-semibold text-accent uppercase tracking-widest mb-2">{product.category}</p>
                      <h3 className="font-display font-semibold text-foreground mb-1.5">{product.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{product.shortDescription}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground tracking-tight mb-10">Categorías</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Brain;
              return (
                <ScrollReveal key={cat.slug} delay={i * 70}>
                  <Link
                    to={`/catalogo/${cat.slug}`}
                    className="group block bg-card/40 rounded-lg border border-white/[0.05] p-7 hover:border-accent/20 transition-all duration-300 h-full"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-lg bg-white/[0.03] flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <Icon size={22} className="text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                      <span className="text-xs font-medium text-accent tabular-nums">{cat.productCount}</span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">{cat.name}</h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{cat.description}</p>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface-dark">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground tracking-tight mb-5">
              ¿Necesita ayuda para elegir?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Nuestros especialistas pueden recomendar los productos ideales para su tipo de flota y operación.
            </p>
            <Button variant="accent" size="xl" asChild>
              <a href="/contacto">
                Solicitar asesoría
                <ArrowRight size={18} />
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CatalogoPage;
