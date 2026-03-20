import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Industrias", href: "#industrias" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/95 backdrop-blur-md border-b border-white/5">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">CS</span>
          </div>
          <span className="text-surface-dark-foreground font-bold text-lg tracking-tight">
            Carstore
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-surface-dark-foreground/70 hover:text-surface-dark-foreground text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="hero-secondary" size="sm" asChild>
            <a href="#contacto">Contactar ventas</a>
          </Button>
          <Button variant="accent" size="sm" asChild>
            <a href="#catalogo">Ver catálogo</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-surface-dark-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-surface-dark border-t border-white/5 px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-surface-dark-foreground/70 hover:text-surface-dark-foreground text-base font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <Button variant="accent" size="lg" asChild>
              <a href="#catalogo">Ver catálogo</a>
            </Button>
            <Button variant="hero-secondary" size="lg" asChild>
              <a href="#contacto">Contactar ventas</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
