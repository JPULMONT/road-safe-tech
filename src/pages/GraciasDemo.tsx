import { MonitorSmartphone, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

const GraciasDemo = () => (
  <PageTransition>
    <Navbar />
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <MonitorSmartphone className="text-accent" size={64} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">¡Solicitud de demo recibida!</h1>
        <p className="text-foreground/70 mt-4 text-lg">Un especialista de Carstore se comunicará con usted en menos de 24 horas hábiles.</p>
        <p className="text-foreground/50 mt-3 text-sm leading-relaxed max-w-md mx-auto">Mientras tanto, puede explorar nuestras soluciones o escribirnos directamente por WhatsApp si necesita una respuesta más inmediata. La demo es completamente gratuita y sin compromiso.</p>

        <div className="bg-card/40 rounded-xl p-6 mt-8 border-l-4 border-green-500 text-left">
          <p className="text-sm font-semibold text-foreground mb-3">¿Necesita respuesta inmediata?</p>
          <Button variant="accent" size="lg" asChild>
            <a href="https://wa.me/5215556385619" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} />
              Escribir por WhatsApp ahora
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {[
            { label: "Explorar soluciones", to: "/soluciones" },
            { label: "Ver catálogo de productos", to: "/catalogo" },
            { label: "Conocer GPT Monitor", to: "/plataforma" },
          ].map((item) => (
            <Link key={item.to} to={item.to} className="bg-card/40 border border-white/[0.05] rounded-lg p-5 hover:border-accent/20 transition-all cursor-pointer group text-left">
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <ArrowRight size={14} className="text-accent mt-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>

        <p className="text-xs text-foreground/40 mt-12">Carstore · Más de 25 años en seguridad vial · Ciudad de México</p>

        {/* Google Ads conversion and Meta Pixel PageView fire here */}
        {/* GTM dataLayer push: { event: 'conversion', conversion_type: 'demo' } */}
        <div id="conversion-confirmation" data-type="demo" className="hidden" />
      </div>
    </main>
    <Footer />
  </PageTransition>
);

export default GraciasDemo;
