import { ScrollReveal } from "@/components/ScrollReveal";

const steps = [
  { number: "01", title: "Diagnóstico", description: "Evaluamos su flota y operación sin costo" },
  { number: "02", title: "Propuesta", description: "Diseñamos la solución ideal para su sector" },
  { number: "03", title: "Instalación", description: "Técnicos certificados equipan sus unidades" },
  { number: "04", title: "Soporte", description: "Acompañamiento continuo post-instalación" },
];

export const ImplementationTimeline = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <ScrollReveal>
        <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Proceso</p>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight leading-tight mb-12 max-w-xl">
          Proceso de implementación
        </h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 80}>
            <div className="relative p-6 lg:p-7">
              {/* Dashed connector line — horizontal on desktop, vertical on mobile */}
              {i < steps.length - 1 && (
                <>
                  <div className="hidden lg:block absolute top-[2.1rem] right-0 w-full border-t-2 border-dashed border-white/[0.06] -z-0" />
                  <div className="lg:hidden absolute bottom-0 left-[2.35rem] h-full border-l-2 border-dashed border-white/[0.06] -z-0" />
                </>
              )}
              <span className="relative z-10 inline-block text-2xl font-display font-bold text-accent mb-3">{step.number}</span>
              <h3 className="font-semibold text-foreground font-display mb-2">{step.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{step.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
