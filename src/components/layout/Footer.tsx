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
    <footer className="bg-surface-dark text-surface-dark-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">CS</span>
              </div>
              <span className="font-bold text-lg tracking-tight">Carstore</span>
            </div>
            <p className="text-sm text-surface-dark-foreground/60 leading-relaxed max-w-xs">
              Tecnología para la seguridad vial, prevención de riesgos y visibilidad operativa en tiempo real.
            </p>
            <p className="text-xs text-surface-dark-foreground/40">
              Ciudad de México · Shenzhen
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4 text-surface-dark-foreground/90">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-surface-dark-foreground/50 hover:text-surface-dark-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-surface-dark-foreground/40">
            © {new Date().getFullYear()} Carstore. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-surface-dark-foreground/40 hover:text-surface-dark-foreground/70 transition-colors">
              Aviso de privacidad
            </a>
            <a href="#" className="text-xs text-surface-dark-foreground/40 hover:text-surface-dark-foreground/70 transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
