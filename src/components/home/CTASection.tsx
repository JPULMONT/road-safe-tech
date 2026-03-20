import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-surface-dark text-surface-dark-foreground">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Proteja su flota con tecnología probada
            </h2>
            <p className="text-surface-dark-foreground/60 text-base max-w-lg mx-auto leading-relaxed">
              Más de 8,400 unidades ya operan con nuestra tecnología. Conozca cómo podemos fortalecer la seguridad y eficiencia de su operación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
