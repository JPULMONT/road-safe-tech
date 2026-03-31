import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { ArrowRight, ArrowLeft, CheckCircle2, Download, ChevronRight, Wrench, Phone } from "lucide-react";
import { useState } from "react";

const ProductoDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container pt-40 pb-20 text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Producto no encontrado</h1>
          <p className="text-muted-foreground mb-8">El producto que busca no existe o ha sido descontinuado.</p>
          <Button variant="accent" asChild>
            <Link to="/catalogo">Volver al catálogo</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const related = getRelatedProducts(product);

  return (
    <PageTransition className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-background border-b border-border pt-24 pb-4">
        <div className="container">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link>
            <ChevronRight size={12} />
            <Link to="/catalogo" className="hover:text-foreground transition-colors">Catálogo</Link>
            <ChevronRight size={12} />
            <Link to={`/catalogo/${product.categorySlug}`} className="hover:text-foreground transition-colors">{product.category}</Link>
            <ChevronRight size={12} />
            <span className="text-foreground">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Gallery */}
            <ScrollReveal>
              <div className="space-y-4">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-card border border-border">
                  <img
                    src={product.images[activeImage]}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    {product.featured && (
                      <span className="bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded">
                        Destacado
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === i ? "border-accent" : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <img src={img} alt={`${product.title} vista ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Product Info */}
            <ScrollReveal delay={150}>
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-3">{product.category}</p>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight leading-tight">
                    {product.title}
                  </h1>
                  <p className="text-lg text-muted-foreground mt-3">{product.subtitle}</p>
                  <p className="text-xs text-muted-foreground mt-2">SKU: {product.sku}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">{product.shortDescription}</p>

                {/* Highlights */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Características clave</h3>
                  <ul className="space-y-2.5">
                    {product.highlights.slice(0, 4).map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                  <Button variant="accent" size="xl" asChild>
                    <a href="/contacto">
                      {product.ctaLabel}
                      <ArrowRight size={18} />
                    </a>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <a href="https://wa.me/5215512345678" target="_blank" rel="noopener">
                      <Phone size={16} />
                      WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Vehicle types */}
                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Vehículos recomendados</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.recommendedVehicleTypes.map((v) => (
                      <span key={v} className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="py-20 bg-surface-dark">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Long description */}
            <div className="lg:col-span-2 space-y-12">
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground tracking-tight mb-6">Descripción detallada</h2>
                  <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground tracking-tight mb-6">Problema que resuelve</h2>
                  <div className="bg-card/50 rounded-lg border border-border p-6">
                    <p className="text-muted-foreground leading-relaxed">{product.problemSolved}</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* All highlights */}
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground tracking-tight mb-6">Beneficios técnicos</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.highlights.map((h, i) => (
                      <div key={h} className="flex items-start gap-3 bg-card/30 rounded-lg p-4 border border-white/[0.03]">
                        <div className="w-7 h-7 rounded bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 size={14} className="text-accent" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Applications */}
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground tracking-tight mb-6">Aplicaciones recomendadas</h2>
                  <div className="flex flex-wrap gap-3">
                    {product.recommendedApplications.map((app) => (
                      <span key={app} className="text-sm bg-card border border-border rounded-lg px-4 py-2.5 text-muted-foreground">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Specs sidebar */}
            <div className="space-y-8">
              <ScrollReveal>
                <div className="bg-card rounded-xl border border-border p-6 sticky top-28">
                  <h3 className="text-lg font-display font-bold text-foreground mb-6">Especificaciones técnicas</h3>
                  <div className="space-y-0">
                    {product.specs.map((spec, i) => (
                      <div
                        key={spec.label}
                        className={`flex justify-between items-start py-3 ${
                          i !== product.specs.length - 1 ? "border-b border-white/[0.05]" : ""
                        }`}
                      >
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">{spec.label}</span>
                        <span className="text-sm text-foreground font-medium text-right ml-4">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {product.installationRequired && (
                    <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                      <Wrench size={16} className="text-accent" />
                      <span className="text-xs text-muted-foreground">Instalación profesional requerida</span>
                    </div>
                  )}

                  {product.datasheetPdf && (
                    <Button variant="outline" className="w-full mt-6" asChild>
                      <a href={product.datasheetPdf} download>
                        <Download size={14} />
                        Descargar ficha técnica
                      </a>
                    </Button>
                  )}

                  <Button variant="accent" className="w-full mt-4" asChild>
                    <a href="/contacto">
                      {product.ctaLabel}
                      <ArrowRight size={14} />
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container">
            <ScrollReveal>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-3">Productos relacionados</p>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight">
                    También le puede interesar
                  </h2>
                </div>
                <Button variant="outline" size="sm" asChild className="hidden sm:flex">
                  <Link to={`/catalogo/${product.categorySlug}`}>
                    Ver todos
                    <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp, i) => (
                <ScrollReveal key={rp.id} delay={i * 100}>
                  <Link
                    to={`/producto/${rp.slug}`}
                    className="group block bg-card/40 rounded-xl border border-white/[0.05] overflow-hidden hover:border-accent/20 transition-all duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={rp.images[0]}
                        alt={rp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] font-semibold text-accent uppercase tracking-widest mb-2">{rp.category}</p>
                      <h3 className="font-display font-semibold text-foreground mb-1.5">{rp.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{rp.shortDescription}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="relative py-20 bg-surface-dark overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[180px] translate-x-1/3 translate-y-1/3" />
        <div className="container relative text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground tracking-tight mb-5">
              ¿Interesado en el {product.title}?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Nuestros especialistas pueden ayudarle a evaluar si este producto es la solución correcta para su flota.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <a href="/contacto">
                  Solicitar asesoría personalizada
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/catalogo">
                  <ArrowLeft size={16} />
                  Explorar más productos
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

export default ProductoDetalle;
