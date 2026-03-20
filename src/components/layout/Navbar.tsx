import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/carstore-logo.png";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/[0.04]">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Carstore" className="h-7 w-auto brightness-0 invert" />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-[13px] font-medium tracking-wide uppercase transition-colors duration-200"
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
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-white/[0.04] px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-muted-foreground hover:text-foreground text-base font-medium py-1"
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
