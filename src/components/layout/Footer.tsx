import logo from "@/assets/carstore-logo.png";
import { Link } from "react-router-dom";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/">
              <img src={logo} alt="Carstore" className="h-6 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Tecnología para la seguridad vial, prevención de riesgos y visibilidad operativa en tiempo real.
            </p>
            <p className="text-xs text-muted-foreground/50">
              Ciudad de México · Shenzhen
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-foreground/50 mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.04] mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/40">
            © {new Date().getFullYear()} Carstore. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-xs text-muted-foreground/40 hover:text-muted-foreground transition-colors">
              Aviso de privacidad
            </Link>
            <Link to="#" className="text-xs text-muted-foreground/40 hover:text-muted-foreground transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
