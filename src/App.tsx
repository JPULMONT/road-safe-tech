import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Soluciones from "./pages/Soluciones.tsx";
import Catalogo from "./pages/Catalogo.tsx";
import Industrias from "./pages/Industrias.tsx";
import Plataforma from "./pages/Plataforma.tsx";
import Servicios from "./pages/Servicios.tsx";
import Nosotros from "./pages/Nosotros.tsx";
import Contacto from "./pages/Contacto.tsx";
import CatalogoCategoria from "./pages/CatalogoCategoria.tsx";
import ProductoDetalle from "./pages/ProductoDetalle.tsx";
import SolucionDetalle from "./pages/SolucionDetalle.tsx";
import IndustriaDetalle from "./pages/IndustriaDetalle.tsx";
import { WhatsAppButton } from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <WhatsAppButton />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
