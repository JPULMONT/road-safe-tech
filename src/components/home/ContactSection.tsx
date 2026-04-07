import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { getStoredUTMs, pushFormEvent } from "@/lib/utm";

export const ContactSection = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    const fleetSize = form ? (form.querySelector<HTMLSelectElement>('[name="fleet_size"]')?.value || '') : '';
    const utms = getStoredUTMs();
    // Payload ready for backend integration
    const _payload = { ...Object.fromEntries(new FormData(form!)), ...utms };
    pushFormEvent('contact', fleetSize);
    navigate('/gracias-contacto', { state: { fromForm: true } });
  };

  const inputClasses = "w-full h-10 rounded-md border border-white/[0.07] bg-white/[0.02] px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-accent/40 focus:border-accent/25 transition-colors";

  return (
    <section id="contacto" className="relative py-28 bg-surface-dark">
      <div className="absolute inset-0 grid-overlay" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">Contacto</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground tracking-tight leading-tight">
                Hablemos de su operación
              </h2>
              <p className="text-foreground/70 mt-5 text-base leading-relaxed max-w-md">
                Nuestro equipo de especialistas puede ayudarle a encontrar la solución ideal para su flota.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <div className="space-y-4 mt-8">
                <a href="tel:+525550493484" className="flex items-center gap-3 text-sm text-foreground/60 hover:text-accent transition-colors">
                  <Phone size={15} className="text-accent" />
                  55 5049 3484
                </a>
                <a href="tel:+525524520562" className="flex items-center gap-3 text-sm text-foreground/60 hover:text-accent transition-colors">
                  <Phone size={15} className="text-accent" />
                  55 2452 0562
                </a>
                <a href="mailto:ventas@carstore.com.mx" className="flex items-center gap-3 text-sm text-foreground/60 hover:text-accent transition-colors">
                  <Mail size={15} className="text-accent" />
                  ventas@carstore.com.mx
                </a>
                <a href="https://maps.google.com/?q=Av+Miguel+de+Cervantes+Saavedra+507+Col+Irrigacion+Miguel+Hidalgo+CDMX" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-foreground/60 hover:text-accent transition-colors">
                  <MapPin size={15} className="text-accent shrink-0 mt-0.5" />
                  <span>Av. Miguel de Cervantes Saavedra #507, Col. Irrigación, Miguel Hidalgo, C.P. 11500, CDMX</span>
                </a>
              </div>
              <div className="mt-6">
                <p className="font-display font-semibold text-xs uppercase tracking-widest text-foreground/50 mb-3">Redes sociales</p>
                <SocialLinks size="sm" variant="muted" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={350}>
              <div className="mt-8">
                <Button variant="accent" size="lg" asChild>
                  <a href="https://wa.me/5215556385619" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={16} />
                    Escribir por WhatsApp
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={150}>
            <div className="bg-card/50 rounded-lg border border-white/[0.05] p-8">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground/60 mb-1.5 block">Nombre</label>
                      <input type="text" name="name" required className={inputClasses} placeholder="Su nombre" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground/60 mb-1.5 block">Empresa</label>
                      <input type="text" name="company" required className={inputClasses} placeholder="Nombre de la empresa" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground/60 mb-1.5 block">Correo electrónico</label>
                      <input type="email" name="email" required className={inputClasses} placeholder="correo@empresa.com" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground/60 mb-1.5 block">Teléfono</label>
                      <input type="tel" name="phone" className={inputClasses} placeholder="+52 55 0000 0000" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground/60 mb-1.5 block">Tamaño de flota</label>
                      <select name="fleet_size" className={inputClasses}>
                        <option value="">Seleccionar</option>
                        <option>1–25 unidades</option>
                        <option>26–100 unidades</option>
                        <option>101–500 unidades</option>
                        <option>500+ unidades</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground/60 mb-1.5 block">Interés principal</label>
                      <select name="interest" className={inputClasses}>
                        <option value="">Seleccionar</option>
                        <option>Cámaras y ADAS</option>
                        <option>Radares y sensores</option>
                        <option>GPS y telemetría</option>
                        <option>Plataforma GPT Monitor</option>
                        <option>Vehículos eléctricos</option>
                        <option>Otro</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground/60 mb-1.5 block">Mensaje</label>
                    <textarea
                      name="message"
                      rows={3}
                      className="w-full rounded-md border border-white/[0.07] bg-white/[0.02] px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-accent/40 focus:border-accent/25 resize-none transition-colors"
                      placeholder="Cuéntenos sobre sus necesidades..."
                    />
                  </div>
                  <Button variant="accent" size="lg" type="submit" className="w-full">
                    Enviar solicitud
                    <ArrowRight size={16} />
                  </Button>
                  <p className="text-[11px] text-muted-foreground/50 text-center">
                    Al enviar acepta nuestro aviso de privacidad
                  </p>
                </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
