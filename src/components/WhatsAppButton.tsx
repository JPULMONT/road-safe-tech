import { MessageCircle } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export const WhatsAppButton = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <a
        href="https://wa.me/5215556385619"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60] flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Escríbenos por WhatsApp"
      >
        <MessageCircle className="text-white w-6 h-6 md:w-7 md:h-7" fill="white" />
      </a>
    </TooltipTrigger>
    <TooltipContent side="left">Escríbenos por WhatsApp</TooltipContent>
  </Tooltip>
);
