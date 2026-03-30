import { Truck, Package, Bus, Factory, HardHat, Car, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { products, type Product } from "./products";

export interface Industry {
  slug: string;
  name: string;
  subtitle: string;
  icon: LucideIcon;
  heroDescription: string;
  longDescription: string;
  challenges: string[];
  benefits: { title: string; description: string }[];
  recommendedSolutions: string[];
  relatedCategorySlugs: string[];
  stats: { value: string; label: string }[];
  ctaText: string;
}

export const industries: Industry[] = [
  {
    slug: "transporte-y-logistica",
    name: "Transporte y logística",
    subtitle: "Flotas de largo recorrido y distribución",
    icon: Truck,
    heroDescription: "Protección integral, eficiencia operativa y visibilidad en tiempo real para flotas de transporte de carga y cadena de suministro.",
    longDescription: "El transporte de carga enfrenta riesgos constantes: fatiga del operador en rutas largas, exceso de velocidad, robo de mercancía y falta de visibilidad operativa. Nuestras soluciones combinan dashcams con IA, GPS con telemetría, radares de punto ciego y la plataforma GPT Monitor para crear un ecosistema de seguridad completo que protege al conductor, la carga y el vehículo.",
    challenges: [
      "Fatiga del operador en rutas de largo recorrido",
      "Exceso de velocidad y conductas de riesgo",
      "Robo de mercancía y desvío de ruta",
      "Consumo excesivo de combustible",
      "Falta de visibilidad en puntos ciegos",
      "Siniestralidad elevada y costos de seguros",
    ],
    benefits: [
      { title: "Reducción de siniestralidad", description: "Dashcam ADAS+DSM detecta fatiga y distracción en tiempo real, reduciendo accidentes hasta 37%." },
      { title: "Control de ruta y velocidad", description: "GPS con geofencing y limitadores de velocidad para cumplimiento de rutas y normativas." },
      { title: "Protección de carga", description: "Monitoreo de puertas, alertas de desvío y evidencia en video para cada entrega." },
      { title: "Optimización de combustible", description: "Control de ralentí y análisis de conducción eficiente reducen costos hasta 20%." },
    ],
    recommendedSolutions: ["Dashcam ADAS+DSM", "Radares de punto ciego", "GPS y telemetría", "GPT Monitor"],
    relatedCategorySlugs: ["inteligencia-artificial", "gps-y-telemetria", "sensores-y-deteccion"],
    stats: [
      { value: "37%", label: "Menos accidentes" },
      { value: "20%", label: "Ahorro combustible" },
      { value: "24/7", label: "Monitoreo" },
      { value: "100%", label: "Visibilidad" },
    ],
    ctaText: "Solicitar evaluación de flota",
  },
  {
    slug: "reparto-y-ultima-milla",
    name: "Reparto y última milla",
    subtitle: "Entregas urbanas y suburbanas",
    icon: Package,
    heroDescription: "Control operativo, visibilidad de entregas y prevención de riesgos para flotas de reparto que operan en entornos urbanos y suburbanos.",
    longDescription: "Las flotas de última milla enfrentan desafíos únicos: alta rotación de conductores, múltiples paradas diarias, operación en zonas congestionadas y presión por tiempos de entrega. Nuestras soluciones proporcionan GPS compacto con OBD2 para control de flota, cámaras de reversa para maniobras seguras y monitoreo centralizado de toda la operación.",
    challenges: [
      "Alta rotación de conductores",
      "Maniobras frecuentes en espacios reducidos",
      "Presión por tiempos de entrega",
      "Riesgo de atropellamiento en zonas urbanas",
      "Control de velocidad en calles residenciales",
      "Uso no autorizado del vehículo",
    ],
    benefits: [
      { title: "Control de entregas", description: "GPS con geofencing para verificar cada parada y tiempo de permanencia." },
      { title: "Maniobras seguras", description: "Cámaras de reversa con IA para evitar colisiones en cada entrega." },
      { title: "Disciplina del conductor", description: "Limitadores de velocidad y alertas de conducción agresiva." },
      { title: "Optimización de rutas", description: "Análisis de patrones de desplazamiento para reducir kilómetros muertos." },
    ],
    recommendedSolutions: ["Cámaras de reversa IA", "GPS OBD2", "Limitadores de velocidad", "Monitoreo en tiempo real"],
    relatedCategorySlugs: ["camaras-y-video", "gps-y-telemetria", "limitadores-y-control"],
    stats: [
      { value: "45%", label: "Menos incidentes" },
      { value: "15%", label: "Ahorro operativo" },
      { value: "GPS", label: "Cada entrega" },
      { value: "< 1min", label: "Alertas" },
    ],
    ctaText: "Cotizar para mi flota de reparto",
  },
  {
    slug: "transporte-de-pasajeros",
    name: "Transporte de pasajeros",
    subtitle: "Autobuses y transporte público",
    icon: Bus,
    heroDescription: "Seguridad del conductor y pasajeros, monitoreo de ruta, cumplimiento normativo y grabación continua para transporte público y privado.",
    longDescription: "El transporte de pasajeros requiere los más altos estándares de seguridad. Nuestras soluciones monitorizan al conductor con DSM para detectar fatiga y distracción, proporcionan visión 360° para maniobras urbanas, graban continuamente para evidencia legal y cumplen con las normativas más exigentes del sector.",
    challenges: [
      "Seguridad de pasajeros como prioridad absoluta",
      "Fatiga en rutas largas y turnos nocturnos",
      "Cumplimiento de normativas de transporte",
      "Maniobras en zonas urbanas congestionadas",
      "Necesidad de evidencia en video ante incidentes",
      "Monitoreo de múltiples unidades simultáneamente",
    ],
    benefits: [
      { title: "Protección del pasajero", description: "DSM detecta fatiga y distracción del conductor antes de que ocurra un incidente." },
      { title: "Visión 360° urbana", description: "Eliminación de puntos ciegos en maniobras de giro y estaciones." },
      { title: "Cumplimiento normativo", description: "Grabación continua y reportes que cumplen con regulaciones del sector." },
      { title: "Supervisión centralizada", description: "GPT Monitor permite supervisar toda la flota desde un solo dashboard." },
    ],
    recommendedSolutions: ["DSM fatiga y distracción", "Visión 360°", "Grabación continua", "Alertas en tiempo real"],
    relatedCategorySlugs: ["inteligencia-artificial", "camaras-y-video"],
    stats: [
      { value: "100%", label: "Cumplimiento" },
      { value: "360°", label: "Visibilidad" },
      { value: "HD", label: "Grabación" },
      { value: "0", label: "Incidentes" },
    ],
    ctaText: "Hablar con un especialista en transporte",
  },
  {
    slug: "vehiculos-vocacionales",
    name: "Vehículos vocacionales",
    subtitle: "Maquinaria pesada y vehículos especializados",
    icon: Factory,
    heroDescription: "Tecnología anti-colisión, visibilidad perimetral y detección de proximidad para maquinaria pesada y vehículos especializados.",
    longDescription: "Los vehículos vocacionales — grúas, revolvedoras, pipas, recolectores — operan en entornos complejos donde la maquinaria pesada interactúa con personas y otros vehículos. Nuestros sistemas de visión 360°, radares laterales y sensores de proximidad crean un perímetro de seguridad digital que previene colisiones y protege al personal en la zona de operación.",
    challenges: [
      "Grandes zonas ciegas inherentes al diseño",
      "Operación en espacios reducidos con peatones",
      "Maquinaria de gran tamaño en zonas urbanas",
      "Riesgo de vuelco y colisión lateral",
      "Condiciones ambientales extremas",
      "Personal en zona de riesgo constante",
    ],
    benefits: [
      { title: "Visión perimetral completa", description: "Sistemas 360° adaptados a la geometría de cada tipo de vehículo." },
      { title: "Detección de personas", description: "Radares y sensores que alertan cuando hay personas en la zona de riesgo." },
      { title: "Resistencia extrema", description: "Equipos diseñados para vibración, polvo, agua y temperaturas extremas." },
      { title: "Integración vehicular", description: "Compatible con los sistemas eléctricos de maquinaria pesada." },
    ],
    recommendedSolutions: ["Sistemas 360°", "Radares laterales", "Sensores de reversa", "Alarmas de proximidad"],
    relatedCategorySlugs: ["camaras-y-video", "sensores-y-deteccion"],
    stats: [
      { value: "360°", label: "Cobertura" },
      { value: "IP68", label: "Resistencia" },
      { value: "8m", label: "Detección" },
      { value: "< 0.5s", label: "Alerta" },
    ],
    ctaText: "Cotizar para vehículos vocacionales",
  },
  {
    slug: "montacargas",
    name: "Montacargas e interiores",
    subtitle: "Almacenes, patios y naves industriales",
    icon: HardHat,
    heroDescription: "Seguridad operativa integral para montacargas en patios, naves industriales, almacenes y zonas de maniobra con peatones.",
    longDescription: "Los accidentes con montacargas son la primera causa de lesiones graves en almacenes e instalaciones industriales. Nuestro sistema integral combina alarmas de presencia peatonal, limitadores de velocidad por zona, cámaras en cruces de pasillo y señalización inteligente para crear un entorno de trabajo seguro donde montacargas y personas coexisten.",
    challenges: [
      "Colisiones montacargas-peatón en pasillos",
      "Velocidad excesiva en cruces ciegos",
      "Visibilidad limitada con carga elevada",
      "Fatiga del operador en turnos largos",
      "Cumplimiento de normas de seguridad industrial",
      "Espacios confinados con alto tránsito mixto",
    ],
    benefits: [
      { title: "Detección de personas", description: "Alarmas que alertan al operador cuando hay peatones en zona de riesgo." },
      { title: "Control de velocidad", description: "Limitadores que reducen velocidad automáticamente en zonas designadas." },
      { title: "Visibilidad en cruces", description: "Cámaras y señalización en puntos ciegos de pasillos." },
      { title: "Registro de eventos", description: "Grabación y reportes de cada incidente para análisis y mejora continua." },
    ],
    recommendedSolutions: ["Alarma de presencia", "Limitador de velocidad", "Cámaras de zona", "Señalización"],
    relatedCategorySlugs: ["montacargas", "sensores-y-deteccion", "camaras-y-video"],
    stats: [
      { value: "70%", label: "Menos incidentes" },
      { value: "100%", label: "Cobertura" },
      { value: "IP65", label: "Resistencia" },
      { value: "Auto", label: "Alertas" },
    ],
    ctaText: "Cotizar seguridad para montacargas",
  },
  {
    slug: "flotas-corporativas",
    name: "Flotas mixtas y corporativas",
    subtitle: "Vehículos empresariales de todo tipo",
    icon: Car,
    heroDescription: "Visibilidad, control y reportes para flotas empresariales con diferentes tipos de vehículos y necesidades de gestión.",
    longDescription: "Las flotas corporativas operan con una mezcla de vehículos — sedanes ejecutivos, camionetas de servicio, vans de reparto — cada uno con necesidades diferentes. Nuestro enfoque modular permite equipar cada tipo de vehículo con la tecnología adecuada y centralizar toda la información en GPT Monitor para gestión unificada.",
    challenges: [
      "Variedad de tipos de vehículos",
      "Control de uso personal del vehículo",
      "Reportes corporativos de flota",
      "Costos de mantenimiento y combustible",
      "Seguridad de conductores no profesionales",
      "Cumplimiento de políticas corporativas",
    ],
    benefits: [
      { title: "Gestión unificada", description: "Una sola plataforma para supervisar vehículos de todo tipo y tamaño." },
      { title: "Enfoque modular", description: "Cada vehículo recibe solo la tecnología que necesita, optimizando la inversión." },
      { title: "Reportes corporativos", description: "KPIs de flota, costos, eficiencia y cumplimiento para dirección." },
      { title: "Control de uso", description: "Geofencing, horarios y alertas para prevenir uso no autorizado." },
    ],
    recommendedSolutions: ["GPS multi-vehículo", "Dashcam básica", "Control de ralentí", "Reportes operativos"],
    relatedCategorySlugs: ["gps-y-telemetria", "inteligencia-artificial"],
    stats: [
      { value: "1", label: "Plataforma" },
      { value: "∞", label: "Vehículos" },
      { value: "Modular", label: "Enfoque" },
      { value: "ROI", label: "Comprobado" },
    ],
    ctaText: "Solicitar propuesta corporativa",
  },
  {
    slug: "vehiculos-electricos",
    name: "Vehículos eléctricos e híbridos",
    subtitle: "Transición a flotas eléctricas",
    icon: Zap,
    heroDescription: "Infraestructura de carga, telemetría EV y gestión energética para flotas que están migrando a la electromovilidad.",
    longDescription: "La transición a flotas eléctricas es inevitable, pero requiere planificación e infraestructura. Ofrecemos cargadores inteligentes con programación horaria, telemetría especializada para monitoreo de batería y autonomía, y análisis comparativo de costos energéticos vs. combustible fósil para justificar y optimizar la inversión en electromovilidad.",
    challenges: [
      "Falta de infraestructura de carga",
      "Autonomía limitada y ansiedad de rango",
      "Costos energéticos sin programación",
      "Monitoreo de salud de baterías",
      "Planificación de rutas con autonomía",
      "Justificación de inversión ante dirección",
    ],
    benefits: [
      { title: "Carga inteligente", description: "Programación horaria para aprovechar tarifas nocturnas y reducir costos." },
      { title: "Telemetría EV", description: "Monitoreo de batería, autonomía estimada y salud del sistema eléctrico." },
      { title: "Análisis de costos", description: "Comparativa automática de costo por km eléctrico vs. combustible." },
      { title: "Infraestructura escalable", description: "Desde 1 cargador hasta infraestructura completa para toda la operación." },
    ],
    recommendedSolutions: ["Cargadores nivel 2 y DC", "Telemetría de batería", "Gestión de carga", "Reportes de consumo"],
    relatedCategorySlugs: ["vehiculos-electricos"],
    stats: [
      { value: "60%", label: "Ahorro vs gasolina" },
      { value: "22kW", label: "Potencia" },
      { value: "Smart", label: "Carga" },
      { value: "0", label: "Emisiones" },
    ],
    ctaText: "Solicitar asesoría en electromovilidad",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getProductsForIndustry(industry: Industry): Product[] {
  return products.filter((p) =>
    industry.relatedCategorySlugs.includes(p.categorySlug)
  );
}
