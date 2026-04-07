import logo from "@/assets/carstore-logo.png";
import esrLogo from "@/assets/esr-logo.png";
import hechoEnMexicoLogo from "@/assets/hecho-en-mexico.png";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { SocialLinks } from "@/components/ui/SocialLinks";

const footerLinks = {
  Soluciones: [
    { label: "Seguridad vial inteligente", href: "/soluciones/seguridad-vial-inteligente" },
    { label: "Cámaras y visibilidad", href: "/soluciones/camaras-y-visibilidad" },
    { label: "Detección de riesgos", href: "/soluciones/deteccion-de-riesgos" },
    { label: "Telemetría y GPS", href: "/soluciones/telemetria-y-gps" },
    { label: "GPT Monitor", href: "/plataforma" },
  ],
  Catálogo: [
    { label: "Inteligencia artificial", href: "/catalogo/inteligencia-artificial" },
    { label: "Cámaras y video", href: "/catalogo/camaras-y-video" },
    { label: "Sensores y detección", href: "/catalogo/sensores-y-deteccion" },
    { label: "GPS y telemetría", href: "/catalogo/gps-y-telemetria" },
    { label: "Ver catálogo completo", href: "/catalogo" },
  ],
  Empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Industrias", href: "/industrias" },
    { label: "Servicios", href: "/servicios" },
    { label: "Contacto", href: "/contacto" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-white/[0.04]">
      <div className="container py-16">
        {/* Top: Brand + Nav Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/">
              <img src={logo} alt="Carstore" className="h-6 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed max-w-xs">
              Creando dispositivos de seguridad vial desde hace más de 25 años. Esforzándonos y creando soluciones que intervengan de forma directa en la seguridad vial.
            </p>
            {/* Certification badges */}
            <div className="flex items-center gap-4 pt-2">
              <img src={esrLogo} alt="ESR — Empresa Socialmente Responsable" className="h-10 w-auto brightness-0 invert opacity-70" loading="lazy" width={120} height={40} />
              <img src={hechoEnMexicoLogo} alt="Hecho en México" className="h-10 w-auto brightness-0 invert opacity-70" loading="lazy" width={40} height={40} />
            </div>
            {/* Social media */}
            <div className="pt-2">
              <p className="font-display font-semibold text-xs uppercase tracking-widest text-foreground/50 mb-3">Síguenos</p>
              <SocialLinks size="md" variant="muted" />
            </div>
          </div>

          {/* Nav Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-foreground/50 mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info — Two Columns */}
        <div className="border-t border-white/[0.04] mt-14 pt-10">
          <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-foreground/50 mb-6">Contacto</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Main Office */}
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=Av+Miguel+de+Cervantes+Saavedra+507+Col+Irrigacion+Miguel+Hidalgo+CDMX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                <span>Av. Miguel de Cervantes Saavedra #507, Col. Irrigación, Deleg. Miguel Hidalgo, C.P. 11500, CDMX</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-foreground/60">
                <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                <span>Presa Rodríguez 34, Col. Irrigación, Miguel Hidalgo, 11500 Ciudad de México, CDMX</span>
              </div>
              <a href="tel:+525550493484" className="flex items-center gap-2.5 text-sm text-foreground/60 hover:text-foreground transition-colors">
                <Phone size={14} className="text-accent" />
                55 5049 3484
              </a>
              <a href="tel:+525524520562" className="flex items-center gap-2.5 text-sm text-foreground/60 hover:text-foreground transition-colors">
                <Phone size={14} className="text-accent" />
                55 2452 0562
              </a>
            </div>

            {/* Right: Planning Office */}
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-foreground/60">
                <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                <span>Tintoreto #43 planta alta, Col. Nonoalco, Deleg. Benito Juárez, CDMX, C.P. 03700</span>
              </div>
              <a href="tel:+525575910324" className="flex items-center gap-2.5 text-sm text-foreground/60 hover:text-foreground transition-colors">
                <Phone size={14} className="text-accent" />
                55 7591 0324 ext 111 / 112
              </a>
              <a href="mailto:ventas@carstore.com.mx" className="flex items-center gap-2.5 text-sm text-foreground/60 hover:text-foreground transition-colors">
                <Mail size={14} className="text-accent" />
                ventas@carstore.com.mx
              </a>
              <a href="mailto:boutique@carstore.com.mx" className="flex items-center gap-2.5 text-sm text-foreground/60 hover:text-foreground transition-colors">
                <Mail size={14} className="text-accent" />
                boutique@carstore.com.mx
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/60/40">
            © {new Date().getFullYear()} Carstore. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-xs text-foreground/60/40 hover:text-foreground/60 transition-colors">
              Aviso de privacidad
            </Link>
            <Link to="#" className="text-xs text-foreground/60/40 hover:text-foreground/60 transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
