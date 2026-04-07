import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import type { Product } from "@/data/products";

interface IndustryProductsProps {
  products: Product[];
}

export const IndustryProducts = ({ products }: IndustryProductsProps) => {
  if (products.length === 0) return null;

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <ScrollReveal>
          <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Tecnología recomendada</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight leading-tight mb-12">
            Tecnología para este sector
          </h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.slice(0, 6).map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 60}>
              <Link
                to={`/producto/${product.slug}`}
                className="group block bg-card/40 border border-white/[0.05] rounded-xl overflow-hidden hover:border-accent/20 transition-all h-full"
              >
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
                  <span className="inline-block text-[10px] font-semibold text-accent uppercase tracking-widest mb-2">
                    {product.category}
                  </span>
                  <h3 className="font-semibold text-foreground font-display text-sm mb-2 group-hover:text-accent transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-foreground/70 leading-relaxed line-clamp-2 mb-3">
                    {product.shortDescription}
                  </p>
                  {product.highlights?.[0] && (
                    <div className="flex items-start gap-2 mb-3">
                      <CheckCircle2 size={13} className="text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-[11px] text-foreground/60 leading-relaxed line-clamp-1">
                        {product.highlights[0]}
                      </p>
                    </div>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                    Ver producto <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
