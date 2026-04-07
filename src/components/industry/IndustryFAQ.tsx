import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const defaultFaqs = [
  {
    question: "¿Cuánto tiempo tarda la instalación en mis unidades?",
    answer: "El tiempo varía según el tamaño de su flotilla. Para flotas de hasta 20 unidades, completamos la instalación en 3-5 días hábiles. Para flotillas más grandes, diseñamos un plan por etapas sin detener su operación.",
  },
  {
    question: "¿Los dispositivos funcionan con cualquier marca de vehículo?",
    answer: "Sí. Nuestras soluciones son compatibles con las principales marcas de vehículos comerciales que operan en México: Kenworth, Freightliner, International, Mercedes-Benz, Volkswagen, entre otras.",
  },
  {
    question: "¿Qué pasa si tengo problemas técnicos después de la instalación?",
    answer: "Contamos con soporte técnico permanente. Puede contactarnos por teléfono, WhatsApp o correo. Respondemos en menos de 24 horas hábiles y contamos con técnicos de campo para visitas presenciales cuando sea necesario.",
  },
];

interface IndustryFAQProps {
  faqs?: { question: string; answer: string }[];
}

export const IndustryFAQ = ({ faqs }: IndustryFAQProps) => {
  const items = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <section className="py-20 bg-surface-dark">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight leading-tight mb-10">
            Preguntas frecuentes
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={60}>
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card/40 border border-white/[0.05] rounded-lg px-6 data-[state=open]:border-accent/15 transition-colors"
              >
                <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/70 leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};
