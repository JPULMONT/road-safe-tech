import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { hasConsented, setConsent, enableAnalytics, enableEssentialOnly } from "@/lib/cookieConsent";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasConsented()) {
        setVisible(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    setConsent('all');
    enableAnalytics();
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    setConsent('essential');
    enableEssentialOnly();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] animate-in slide-in-from-bottom duration-500 bg-[#111111] border-t border-white/[0.08]">
      <div className="container px-6 py-5">
        <button
          onClick={handleEssentialOnly}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Cerrar"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="max-w-2xl space-y-1.5 pr-8 md:pr-0">
            <span className="text-accent font-bold text-sm">Carstore</span>
            <p className="text-sm text-foreground/70">
              Usamos cookies propias y de terceros para analizar el uso del sitio, personalizar contenido y mostrarte publicidad relevante. Puedes aceptar todas las cookies o elegir solo las esenciales.
            </p>
            <Link
              to="/aviso-de-privacidad"
              className="text-accent text-xs hover:underline inline-block"
            >
              Ver aviso de privacidad y política de cookies →
            </Link>
          </div>

          <div className="flex gap-3 shrink-0">
            <button
              onClick={handleEssentialOnly}
              className="px-4 py-2 text-sm rounded-md border border-white/[0.12] text-foreground/80 hover:bg-white/[0.05] transition-colors"
            >
              Solo esenciales
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm rounded-md bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
