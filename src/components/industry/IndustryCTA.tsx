import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import type { Industry } from "@/data/industries";

interface IndustryCTAProps {
  industry: Industry;
}

export const IndustryCTA = ({ industry }: IndustryCTAProps) => (
  <section className="py-20 bg-background">
    <div className="container text-center">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight mb-5 max-w-2xl mx-auto">
          ¿Opera en {industry.name}? Hablemos de su flotilla.
        </h2>
        <p className="text-foreground/70 mb-8 max-w-lg mx-auto">
          Diseñamos una solución a medida para los retos específicos de su operación. Sin compromiso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="accent" size="xl" asChild>
            <Link to="/contacto">
              {industry.ctaText}
              <ArrowRight size={18} />
            </Link>
          </Button>
          <Button variant="outline-dark" size="xl" asChild>
            <Link to="/soluciones">Ver todas las soluciones</Link>
          </Button>
        </div>
        <a
          href="https://wa.me/5215556385619"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-accent transition-colors mt-6"
        >
          O escríbanos por WhatsApp <ArrowRight size={13} />
        </a>
      </ScrollReveal>
    </div>
  </section>
);
