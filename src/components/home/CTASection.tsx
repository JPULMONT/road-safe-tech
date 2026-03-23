import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-accent/[0.05] rounded-full blur-[200px]" />

      <div className="container relative">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto space-y-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight">
              Proteja su flota con tecnología probada
            </h2>
            <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
              Más de 8,400 unidades operan con nuestra tecnología. Conozca cómo podemos fortalecer la seguridad y eficiencia de su operación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button variant="hero-primary" size="xl" asChild>
                <a href="#catalogo">
                  Ver catálogo
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="hero-secondary" size="xl" asChild>
                <a href="#contacto">Contactar a ventas</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
