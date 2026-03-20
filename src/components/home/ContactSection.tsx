import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative py-28 bg-surface-dark">
      <div className="absolute inset-0 grid-overlay" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Contacto</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight">
                Hablemos de su operación
              </h2>
              <p className="text-muted-foreground mt-5 text-base leading-relaxed max-w-md">
                Nuestro equipo de ventas puede ayudarle a encontrar la solución ideal para las necesidades de seguridad de su flota.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <div className="space-y-5 mt-8">
                <a href="tel:+525512345678" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-accent transition-colors">
                  <Phone size={16} className="text-accent" />
                  +52 55 1234 5678
                </a>
                <a href="mailto:ventas@carstore.mx" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-accent transition-colors">
                  <Mail size={16} className="text-accent" />
                  ventas@carstore.mx
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-accent" />
                  Ciudad de México, México
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={350}>
              <div className="mt-8">
                <Button variant="accent" size="lg" asChild>
                  <a href="https://wa.me/525512345678" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} />
                    Escribir por WhatsApp
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={150}>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-white/[0.06] p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg font-display">Mensaje enviado</h3>
                  <p className="text-sm text-muted-foreground mt-2">Nos pondremos en contacto pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground/70 mb-1.5 block">Nombre</label>
                      <input
                        type="text"
                        required
                        className="w-full h-10 rounded-md border border-white/[0.08] bg-white/[0.03] px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/30"
                        placeholder="Su nombre"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground/70 mb-1.5 block">Empresa</label>
                      <input
                        type="text"
                        required
                        className="w-full h-10 rounded-md border border-white/[0.08] bg-white/[0.03] px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/30"
                        placeholder="Nombre de la empresa"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground/70 mb-1.5 block">Correo electrónico</label>
                    <input
                      type="email"
                      required
                      className="w-full h-10 rounded-md border border-white/[0.08] bg-white/[0.03] px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/30"
                      placeholder="correo@empresa.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground/70 mb-1.5 block">Tamaño de flota</label>
                    <select className="w-full h-10 rounded-md border border-white/[0.08] bg-white/[0.03] px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/30">
                      <option>1–25 unidades</option>
                      <option>26–100 unidades</option>
                      <option>101–500 unidades</option>
                      <option>500+ unidades</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground/70 mb-1.5 block">Mensaje</label>
                    <textarea
                      rows={4}
                      className="w-full rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/30 resize-none"
                      placeholder="Cuéntenos sobre sus necesidades de seguridad..."
                    />
                  </div>
                  <Button variant="accent" size="lg" type="submit" className="w-full">
                    Enviar solicitud
                    <ArrowRight size={16} />
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
