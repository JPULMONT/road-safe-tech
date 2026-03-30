import { MessageCircle } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export const WhatsAppButton = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <a
        href="https://wa.me/5215512345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 md:w-14 md:h-14 w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Escríbenos por WhatsApp"
      >
        <MessageCircle className="text-white w-7 h-7 md:w-7 md:h-7 w-6 h-6" fill="white" />
      </a>
    </TooltipTrigger>
    <TooltipContent side="left">Escríbenos por WhatsApp</TooltipContent>
  </Tooltip>
);
