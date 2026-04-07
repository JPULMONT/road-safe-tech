import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/carstore-logo.png";
import { Link, useLocation } from "react-router-dom";
import { solutions } from "@/data/solutions";

const navLinks = [
  { label: "Soluciones", href: "/soluciones", hasDropdown: true },
  { label: "Plataforma", href: "/plataforma" },
  { label: "Industrias", href: "/industrias" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMegaEnter = () => {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const handleNavClick = (href: string) => {
    setOpen(false);
    // For homepage anchor links
    if (isHome && href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Map routes to anchor IDs for homepage
  const getHref = (href: string) => {
    if (isHome) {
      const map: Record<string, string> = {
        "/soluciones": "#soluciones",
        "/plataforma": "#plataforma",
        "/industrias": "#industrias",
        "/catalogo": "#catalogo",
        "/servicios": "#servicios",
        "/nosotros": "#nosotros",
      };
      return map[href] || href;
    }
    return href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-[72px]">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Carstore" className="h-7 w-auto brightness-0 invert" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={handleMegaEnter}
                onMouseLeave={handleMegaLeave}
              >
                <a
                  href={getHref(link.href)}
                  onClick={() => handleNavClick(getHref(link.href))}
                  className="text-foreground/90 hover:text-foreground text-[13px] font-semibold tracking-wide transition-colors duration-200 flex items-center gap-1"
                >
                  {link.label}
                  <ChevronDown size={12} className={`opacity-50 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
                </a>

                {/* Mega-menu dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    megaOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div
                    className="w-[540px] rounded-xl p-4 grid grid-cols-2 gap-1 shadow-2xl"
                    style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {solutions.slice(0, 8).map((sol) => {
                      const Icon = sol.icon;
                      return (
                        <Link
                          key={sol.slug}
                          to={`/soluciones/${sol.slug}`}
                          onClick={() => setMegaOpen(false)}
                          className="flex items-start gap-3 rounded-lg p-3 hover:bg-white/[0.04] transition-colors duration-150 group"
                        >
                          <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-md bg-white/[0.06] flex items-center justify-center">
                            <Icon size={16} className="text-primary" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[13px] font-medium text-foreground group-hover:text-primary transition-colors">{sol.title}</p>
                            <p className="text-[11px] text-muted-foreground leading-snug mt-0.5 line-clamp-1">{sol.subtitle}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={getHref(link.href)}
                onClick={() => handleNavClick(getHref(link.href))}
                className="text-foreground/90 hover:text-foreground text-[13px] font-semibold tracking-wide transition-colors duration-200 flex items-center gap-1"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="hero-secondary" size="sm" asChild>
            <a href={isHome ? "#contacto" : "/contacto"}>Contactar ventas</a>
          </Button>
          <Button variant="accent" size="sm" asChild>
            <a href={isHome ? "#catalogo" : "/catalogo"}>Ver catálogo</a>
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
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-white/[0.04] px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={getHref(link.href)}
              onClick={() => handleNavClick(getHref(link.href))}
              className="block text-muted-foreground hover:text-foreground text-base font-medium py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <Button variant="accent" size="lg" asChild>
              <a href={isHome ? "#catalogo" : "/catalogo"}>Ver catálogo</a>
            </Button>
            <Button variant="hero-secondary" size="lg" asChild>
              <a href={isHome ? "#contacto" : "/contacto"}>Contactar ventas</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
