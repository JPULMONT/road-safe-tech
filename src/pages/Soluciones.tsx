import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/data/solutions";

const SolucionesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-[0.12]"
            loading="eager"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[200px]" />
        <div className="container relative">
          <ScrollReveal>
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Soluciones</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight leading-tight max-w-3xl">
              Tecnología integral para la seguridad de su flota
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Cada solución está diseñada para resolver problemas operativos reales: prevenir accidentes, dar visibilidad y optimizar su operación de transporte.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container space-y-6">
          {solutions.map((sol, i) => (
            <ScrollReveal key={sol.slug} delay={i * 50}>
              <div className="group bg-card/40 border border-white/[0.05] rounded-lg p-8 hover:border-accent/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-11 h-11 rounded-md bg-accent/8 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                        <sol.icon size={20} className="text-accent" />
                      </div>
                      <h2 className="text-xl font-display font-bold text-foreground">{sol.title}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">{sol.heroDescription}</p>
                    <Button variant="outline-dark" size="sm" asChild>
                      <Link to={`/soluciones/${sol.slug}`}>
                        Conocer más
                        <ArrowRight size={14} />
                      </Link>
                    </Button>
                  </div>
                  <div className="lg:w-72 flex-shrink-0">
                    <ul className="space-y-2">
                      {sol.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-foreground/60">
                          <div className="w-1 h-1 rounded-full bg-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface-dark">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-foreground tracking-tight mb-5">
              ¿No sabe qué solución necesita?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Nuestro equipo puede diagnosticar su operación y recomendar la combinación ideal de tecnología.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contacto">
                Hablar con un especialista
                <ArrowRight size={18} />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SolucionesPage;
