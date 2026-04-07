import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Soluciones from "@/pages/Soluciones";
import Catalogo from "@/pages/Catalogo";
import Industrias from "@/pages/Industrias";
import Plataforma from "@/pages/Plataforma";
import Servicios from "@/pages/Servicios";
import Nosotros from "@/pages/Nosotros";
import Contacto from "@/pages/Contacto";
import CatalogoCategoria from "@/pages/CatalogoCategoria";
import ProductoDetalle from "@/pages/ProductoDetalle";
import SolucionDetalle from "@/pages/SolucionDetalle";
import IndustriaDetalle from "@/pages/IndustriaDetalle";
import AvisoDePrivacidad from "@/pages/AvisoDePrivacidad";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/soluciones" element={<Soluciones />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/catalogo/:categoria" element={<CatalogoCategoria />} />
        <Route path="/producto/:slug" element={<ProductoDetalle />} />
        <Route path="/soluciones/:slug" element={<SolucionDetalle />} />
        <Route path="/industrias/:slug" element={<IndustriaDetalle />} />
        <Route path="/industrias" element={<Industrias />} />
        <Route path="/plataforma" element={<Plataforma />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/aviso-de-privacidad" element={<AvisoDePrivacidad />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
