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
  { name: "FEMSA", logo: femsa },
  { name: "Coca-Cola", logo: cocaCola },
  { name: "PepsiCo", logo: pepsico },
  { name: "Streamax", logo: streamax },
  { name: "CEMEX", logo: cemex },
  { name: "Grupo Bimbo", logo: bimbo },
  { name: "LALA", logo: lala },
  { name: "Trimble", logo: trimble },
  { name: "Quálitas", logo: qualitas },
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
            <p className="text-[10px] font-semibold text-muted-foreground/40 uppercase tracking-[0.25em] text-center mb-8">
              Tecnología en la que confían las flotillas mexicanas
            </p>

            <div
              className="relative overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[hsl(var(--surface-dark))] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[hsl(var(--surface-dark))] to-transparent z-10 pointer-events-none" />

              {/* Scrolling track */}
              <div
                className="flex animate-ticker"
                style={{ animationPlayState: isPaused ? "paused" : "running" }}
              >
                {duplicatedClients.map((client, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 mx-8 flex items-center justify-center"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={
                        client.name === "Grupo Bimbo"
                          ? "max-h-[32px] w-auto object-contain opacity-40 hover:opacity-80 transition-opacity duration-500"
                          : "max-h-[32px] w-auto object-contain brightness-0 invert opacity-40 hover:opacity-80 transition-opacity duration-500"
                      }
                      style={client.name === "Grupo Bimbo" ? { mixBlendMode: "screen" } : undefined}
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
