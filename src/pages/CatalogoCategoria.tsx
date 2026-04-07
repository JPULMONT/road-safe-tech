import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Button } from "@/components/ui/button";
import { getCategoryBySlug, getProductsByCategory, categories } from "@/data/products";
import { ArrowRight, ChevronRight } from "lucide-react";
import bgIndustries from "@/assets/bg-industries.jpg";

const CatalogoCategoria = () => {
  const { categoria } = useParams<{ categoria: string }>();
  const category = getCategoryBySlug(categoria || "");
  const categoryProducts = getProductsByCategory(categoria || "");

  if (!category) {
    return (
      <PageTransition className="min-h-screen">
        <Navbar />
        <div className="container pt-40 pb-20 text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Categoría no encontrada</h1>
          <Button variant="accent" asChild>
            <Link to="/catalogo">Ver todas las categorías</Link>
          </Button>
        </div>
        <Footer />
      </PageTransition>
    );
  }

  return (
    <PageTransition className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgIndustries} alt="" className="w-full h-full object-cover opacity-[0.07]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="absolute inset-0 grid-overlay" />
        <div className="container relative">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link>
            <ChevronRight size={12} />
            <Link to="/catalogo" className="hover:text-foreground transition-colors">Catálogo</Link>
            <ChevronRight size={12} />
            <span className="text-foreground">{category.name}</span>
          </nav>
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Catálogo 2025</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground tracking-tight leading-tight max-w-3xl">
              {category.name}
            </h1>
            <p className="text-lg text-foreground/70 mt-5 max-w-2xl leading-relaxed">
              {category.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20 bg-background">
        <div className="container">
          {categoryProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product, i) => (
                <ScrollReveal key={product.id} delay={i * 80}>
                  <Link
                    to={`/producto/${product.slug}`}
                    className="group block bg-card/40 rounded-xl border border-white/[0.05] overflow-hidden hover:border-accent/20 transition-all duration-300 h-full"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
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
                    <div className="p-6">
                      {product.featured && (
                        <span className="inline-block bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded mb-3">
                          Destacado
                        </span>
                      )}
                      <h3 className="font-display font-semibold text-foreground text-lg mb-2">{product.title}</h3>
                      <p className="text-sm text-foreground/70 line-clamp-2 mb-4">{product.shortDescription}</p>
                      <div className="flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                        Ver producto <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-foreground/70 mb-6">Próximamente agregaremos productos a esta categoría.</p>
              <Button variant="accent" asChild>
                <Link to="/catalogo">Ver todas las categorías</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Other categories */}
      <section className="py-20 bg-surface-dark">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-2xl font-display font-bold text-foreground tracking-tight mb-10">Otras categorías</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories
              .filter((c) => c.slug !== category.slug)
              .slice(0, 4)
              .map((cat, i) => (
                <ScrollReveal key={cat.slug} delay={i * 60}>
                  <Link
                    to={`/catalogo/${cat.slug}`}
                    className="group block bg-card/40 rounded-lg border border-white/[0.05] p-6 hover:border-accent/20 transition-all duration-300"
                  >
                    <h3 className="font-display font-semibold text-foreground mb-1.5">{cat.name}</h3>
                    <p className="text-xs text-foreground/70 line-clamp-2">{cat.description}</p>
                  </Link>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground tracking-tight mb-5">
              ¿Necesita ayuda para elegir?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-lg mx-auto">
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
    </PageTransition>
  );
};

export default CatalogoCategoria;
