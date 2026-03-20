import logo from "@/assets/carstore-logo.png";

const footerLinks = {
  Soluciones: [
    { label: "Dashcam + ADAS + DSM", href: "#" },
    { label: "Radares de punto ciego", href: "#" },
    { label: "Cámaras con IA", href: "#" },
    { label: "Sistemas 360°", href: "#" },
    { label: "GPT Monitor", href: "#" },
  ],
  Empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Industrias", href: "#industrias" },
    { label: "Servicios", href: "#servicios" },
    { label: "Catálogo", href: "#catalogo" },
  ],
  Soporte: [
    { label: "Contacto", href: "#contacto" },
    { label: "Implementación", href: "#" },
    { label: "Mantenimiento", href: "#" },
    { label: "Postventa", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-white/[0.04]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Carstore" className="h-6 w-auto brightness-0 invert" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Tecnología para la seguridad vial, prevención de riesgos y visibilidad operativa en tiempo real.
            </p>
            <p className="text-xs text-muted-foreground/60">
              Ciudad de México · Shenzhen
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-xs uppercase tracking-widest text-foreground/60 mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.04] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Carstore. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">
              Aviso de privacidad
            </a>
            <a href="#" className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
