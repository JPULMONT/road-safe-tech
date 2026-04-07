import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ShieldCheck, Cog, Headphones } from "lucide-react";

import femsa from "@/assets/clients/femsa.png";
import cocaCola from "@/assets/clients/coca-cola.png";
import pepsico from "@/assets/clients/pepsico.png";
import streamax from "@/assets/clients/streamax.png";
import cemex from "@/assets/clients/cemex.png";
import bimbo from "@/assets/clients/bimbo.png";
import lala from "@/assets/clients/lala.png";
import trimble from "@/assets/clients/trimble.png";
import qualitas from "@/assets/clients/qualitas.png";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Desarrollo e integración",
    description: "Diseñamos, fabricamos e integramos hardware y software de seguridad vial.",
  },
  {
    icon: Cog,
    title: "Instalación profesional",
    description: "Equipos técnicos certificados implementan cada solución en sus unidades.",
  },
  {
    icon: Headphones,
    title: "Soporte continuo",
    description: "Mantenimiento preventivo, capacitación y servicio postventa permanente.",
  },
];

const clients = [
  { name: "FEMSA", logo: femsa, size: "max-h-[28px]" },
  { name: "Coca-Cola", logo: cocaCola, size: "max-h-[32px]" },
  { name: "PepsiCo", logo: pepsico, size: "max-h-[30px]" },
  { name: "Streamax", logo: streamax, size: "max-h-[40px]" },
  { name: "CEMEX", logo: cemex, size: "max-h-[38px]" },
  { name: "Grupo Bimbo", logo: bimbo, size: "max-h-[30px]" },
  { name: "LALA", logo: lala, size: "max-h-[32px]" },
  { name: "Trimble", logo: trimble, size: "max-h-[28px]" },
  { name: "Quálitas", logo: qualitas, size: "max-h-[28px]" },
];

const duplicatedClients = [...clients, ...clients];

export const TrustBar = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-16 bg-surface-dark border-y border-white/[0.04]">
      <div className="container">
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <p.icon size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">{p.title}</h3>
                  <p className="text-xs text-foreground/70 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="border-t border-white/[0.04] mt-12 pt-10">
            <p className="text-[11px] font-semibold text-foreground/50 uppercase tracking-[0.25em] text-center mb-8">
              Tecnología en la que confían las flotillas mexicanas
            </p>

            <div
              className="relative overflow-hidden rounded-xl py-5 bg-accent"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-accent to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-accent to-transparent z-10 pointer-events-none" />

              {/* Scrolling track */}
              <div
                className="flex items-center animate-ticker"
                style={{ animationPlayState: isPaused ? "paused" : "running" }}
              >
                {duplicatedClients.map((client, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 mx-10 flex items-center justify-center"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={`${client.size} w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-500`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
