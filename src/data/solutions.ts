import { Eye, Radio, ShieldCheck, Cpu, BarChart3, CircuitBoard, Zap, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { products, type Product } from "./products";

export interface Solution {
  slug: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  tag: string;
  heroDescription: string;
  longDescription: string;
  problemStatement: string;
  benefits: { title: string; description: string }[];
  features: string[];
  stats: { value: string; label: string }[];
  relatedCategorySlugs: string[];
  relatedIndustrySlugs: string[];
  ctaText: string;
}

export const solutions: Solution[] = [
  {
    slug: "seguridad-vial-inteligente",
    title: "Seguridad vial inteligente",
    subtitle: "Dashcam + ADAS + DSM",
    icon: Eye,
    tag: "Visión",
    heroDescription: "Sistemas de cámaras con inteligencia artificial para asistencia avanzada al conductor, detección de fatiga y prevención de colisiones en tiempo real.",
    longDescription: "Nuestra solución de seguridad vial inteligente combina dos capas de IA: ADAS (Advanced Driver Assistance System) analiza el camino para detectar riesgos de colisión frontal, cambio involuntario de carril y distancia insegura de seguimiento. DSM (Driver State Monitoring) monitorea al conductor para identificar fatiga, distracción, uso de celular y otras conductas de riesgo. Juntas, estas tecnologías reducen la siniestralidad de su flota hasta un 37% en los primeros 6 meses.",
    problemStatement: "El 94% de los accidentes viales son causados por error humano. Sin monitoreo inteligente, los operadores están expuestos a fatiga, distracción y conductas de riesgo que comprometen la seguridad de su flota y su carga.",
    benefits: [
      { title: "Reducción de siniestralidad", description: "Hasta 37% menos accidentes en los primeros 6 meses de implementación." },
      { title: "Alertas en tiempo real", description: "El conductor recibe alertas sonoras inmediatas cuando se detecta una conducta de riesgo." },
      { title: "Evidencia grabada", description: "Video HD de cada incidente para análisis, capacitación y defensa legal." },
      { title: "Integración con GPT Monitor", description: "Todos los eventos se clasifican automáticamente en la plataforma para supervisión centralizada." },
    ],
    features: ["Detección de fatiga y distracción", "Alerta de colisión frontal", "Aviso de cambio de carril", "Grabación continua con IA", "Visión nocturna IR", "Conectividad 4G LTE"],
    stats: [
      { value: "37%", label: "Reducción de siniestralidad" },
      { value: "< 1s", label: "Tiempo de alerta" },
      { value: "1080p", label: "Resolución de video" },
      { value: "24/7", label: "Monitoreo continuo" },
    ],
    relatedCategorySlugs: ["inteligencia-artificial"],
    relatedIndustrySlugs: ["transporte-y-logistica", "transporte-de-pasajeros", "flotas-corporativas"],
    ctaText: "Solicitar demostración de ADAS+DSM",
  },
  {
    slug: "camaras-y-visibilidad-avanzada",
    title: "Cámaras y visibilidad avanzada",
    subtitle: "Visión 360° · Reversa IA · Monitoreo exterior",
    icon: Cpu,
    tag: "Visibilidad",
    heroDescription: "Sistemas de cámaras que eliminan puntos ciegos con visión 360°, reversa con IA, y monitoreo perimetral para todo tipo de vehículos.",
    longDescription: "La visibilidad es la primera línea de defensa contra accidentes. Nuestros sistemas de cámaras proporcionan cobertura completa: visión 360° para maniobras en espacio reducido, cámaras de reversa con líneas de guía dinámicas, monitoreo lateral y frontal. Cada sistema se adapta al tipo de vehículo y operación, desde tractocamiones hasta montacargas.",
    problemStatement: "Los puntos ciegos son responsables del 30% de los accidentes en maniobras de reversa y giros. Sin visibilidad perimetral, cada maniobra es un riesgo para personas, equipamiento y carga.",
    benefits: [
      { title: "Eliminación de puntos ciegos", description: "Visión completa de 360° alrededor del vehículo en una sola pantalla." },
      { title: "Maniobras seguras", description: "Líneas de guía dinámicas que se adaptan al ángulo de giro en reversa." },
      { title: "Visión nocturna", description: "LEDs infrarrojos que permiten operación segura en condiciones de baja luz." },
      { title: "Resistencia industrial", description: "Cámaras IP68 resistentes al agua, polvo y vibraciones extremas." },
    ],
    features: ["Visión perimetral 360°", "Cámaras inalámbricas", "Monitoreo nocturno", "Líneas de guía dinámicas", "IP68 resistente", "Integración con plataforma"],
    stats: [
      { value: "360°", label: "Cobertura visual" },
      { value: "IP68", label: "Resistencia" },
      { value: "4", label: "Cámaras por sistema" },
      { value: "720p+", label: "Resolución" },
    ],
    relatedCategorySlugs: ["camaras-y-video"],
    relatedIndustrySlugs: ["transporte-y-logistica", "montacargas", "vehiculos-vocacionales"],
    ctaText: "Cotizar sistema de cámaras",
  },
  {
    slug: "deteccion-de-riesgos",
    title: "Detección de riesgos y puntos ciegos",
    subtitle: "Radares · Sensores · BSIS",
    icon: Radio,
    tag: "Detección",
    heroDescription: "Radares de punto ciego, sensores de reversa y sistemas BSIS para detección activa de vehículos, ciclistas y peatones en zonas de riesgo.",
    longDescription: "Los sistemas de detección activa van más allá de las cámaras: utilizan radar de 77GHz y sensores ultrasónicos para detectar objetos en movimiento en las zonas ciegas del vehículo. El sistema Smart BSIS alerta al conductor con indicadores LED y alertas sonoras cuando detecta ciclistas, motociclistas o peatones en la zona de riesgo durante giros y cambios de carril.",
    problemStatement: "Los accidentes por cambio de carril y giros sin verificar la zona ciega representan miles de siniestros anuales. La detección humana es insuficiente en vehículos pesados con grandes zonas ciegas.",
    benefits: [
      { title: "Detección radar 77GHz", description: "Funciona en cualquier condición climática: lluvia, neblina, oscuridad total." },
      { title: "Alerta multimodal", description: "Indicadores LED en espejos + alertas sonoras para el conductor." },
      { title: "Detección de vulnerables", description: "Detecta ciclistas, motociclistas y peatones en zona ciega." },
      { title: "Normativa europea", description: "Cumple con ECE R151 para vehículos comerciales." },
    ],
    features: ["Radar de microondas 77GHz", "Smart BSIS", "Sensores ultrasónicos", "Sistemas redundantes", "Alertas LED en espejos", "Calibración automática"],
    stats: [
      { value: "77GHz", label: "Frecuencia radar" },
      { value: "8m", label: "Rango lateral" },
      { value: "150°", label: "Ángulo de cobertura" },
      { value: "ECE R151", label: "Certificación" },
    ],
    relatedCategorySlugs: ["sensores-y-deteccion"],
    relatedIndustrySlugs: ["transporte-y-logistica", "transporte-de-pasajeros", "vehiculos-vocacionales"],
    ctaText: "Solicitar demostración de sensores",
  },
  {
    slug: "telemetria-y-gps",
    title: "GPS, telemetría y analítica",
    subtitle: "Rastreo · Geofencing · Diagnóstico",
    icon: CircuitBoard,
    tag: "Control",
    heroDescription: "Rastreo satelital en tiempo real, telemetría vehicular, geofencing inteligente y análisis operativo para optimizar cada kilómetro de su flota.",
    longDescription: "La telemetría es la base del control operativo. Nuestros dispositivos GPS combinan rastreo en tiempo real con diagnóstico vehicular OBD2, control de ralentí, geofencing ilimitado y reportes automatizados. Cada dato se envía a GPT Monitor para análisis centralizado de toda su flota.",
    problemStatement: "Sin visibilidad en tiempo real, las flotas operan a ciegas: rutas ineficientes, ralentí excesivo, exceso de velocidad y consumo de combustible descontrolado generan pérdidas operativas significativas.",
    benefits: [
      { title: "Visibilidad total", description: "Ubicación en tiempo real de cada vehículo con precisión submétrica." },
      { title: "Geofencing inteligente", description: "Zonas virtuales con alertas automáticas de entrada y salida." },
      { title: "Diagnóstico vehicular", description: "Lectura OBD2 para monitoreo de salud mecánica del vehículo." },
      { title: "Ahorro comprobado", description: "Reducción de hasta 20% en consumo de combustible por control de ralentí." },
    ],
    features: ["GPS + GLONASS", "OBD2 / CAN Bus", "Geofencing ilimitado", "Control de ralentí", "Corte de corriente remoto", "Reportes automatizados"],
    stats: [
      { value: "< 2.5m", label: "Precisión GPS" },
      { value: "4G LTE", label: "Conectividad" },
      { value: "20%", label: "Ahorro combustible" },
      { value: "∞", label: "Geofences" },
    ],
    relatedCategorySlugs: ["gps-y-telemetria"],
    relatedIndustrySlugs: ["transporte-y-logistica", "reparto-y-ultima-milla", "flotas-corporativas"],
    ctaText: "Cotizar telemetría para mi flota",
  },
  {
    slug: "monitoreo-y-control-operativo",
    title: "Monitoreo y control operativo",
    subtitle: "Plataforma GPT Monitor",
    icon: BarChart3,
    tag: "Plataforma",
    heroDescription: "Dashboard centralizado con análisis predictivo, clasificación de alertas con IA y supervisión en tiempo real de toda su operación.",
    longDescription: "GPT Monitor es el cerebro de su operación. La plataforma centraliza todos los datos de sus dispositivos — cámaras, GPS, sensores — y los transforma en inteligencia accionable. La IA clasifica alertas por gravedad, identifica patrones de riesgo y genera reportes predictivos para anticiparse a los problemas antes de que ocurran.",
    problemStatement: "Los datos sin análisis son ruido. Sin una plataforma inteligente, los equipos de seguridad se ahogan en alertas sin priorizar, pierden eventos críticos y no pueden tomar decisiones basadas en evidencia.",
    benefits: [
      { title: "Clasificación IA de alertas", description: "La inteligencia artificial prioriza eventos por gravedad para acción inmediata." },
      { title: "Análisis predictivo", description: "Identifica patrones de riesgo antes de que se conviertan en accidentes." },
      { title: "Acceso multiplataforma", description: "Dashboard web y app móvil para supervisión desde cualquier lugar." },
      { title: "Reportes automatizados", description: "Informes programados con KPIs operativos y métricas de seguridad." },
    ],
    features: ["Dashboard en tiempo real", "Alertas clasificadas por IA", "Análisis predictivo", "Acceso web y móvil", "Reportes automatizados", "API de integración"],
    stats: [
      { value: "IA", label: "Clasificación de alertas" },
      { value: "24/7", label: "Monitoreo continuo" },
      { value: "Web+App", label: "Multiplataforma" },
      { value: "∞", label: "Usuarios" },
    ],
    relatedCategorySlugs: ["inteligencia-artificial", "gps-y-telemetria"],
    relatedIndustrySlugs: ["transporte-y-logistica", "transporte-de-pasajeros", "reparto-y-ultima-milla"],
    ctaText: "Solicitar demo de GPT Monitor",
  },
  {
    slug: "seguridad-montacargas",
    title: "Seguridad para montacargas",
    subtitle: "Alarmas · Limitadores · Cámaras de zona",
    icon: ShieldCheck,
    tag: "Industrial",
    heroDescription: "Soluciones diseñadas para operación interior: alarmas de proximidad, limitadores de velocidad, cámaras de zona y señalización inteligente.",
    longDescription: "Los accidentes con montacargas son la principal causa de lesiones en almacenes e industria. Nuestras soluciones combinan alarmas de proximidad que alertan a peatones, limitadores de velocidad por zona, cámaras de monitoreo en cruces de pasillo y señalización inteligente para crear entornos de trabajo seguros.",
    problemStatement: "Los almacenes y naves industriales son entornos de alto riesgo donde montacargas y peatones comparten espacio. Sin tecnología de prevención, los accidentes son frecuentes y costosos.",
    benefits: [
      { title: "Alerta de proximidad", description: "Detecta peatones en zona de riesgo y alerta al operador automáticamente." },
      { title: "Control de velocidad por zona", description: "Limita la velocidad en cruces de pasillo, rampas y zonas peatonales." },
      { title: "Monitoreo de cruces", description: "Cámaras en puntos ciegos de pasillos para prevenir colisiones." },
      { title: "Señalización automática", description: "Luces de advertencia que se activan con la presencia del montacargas." },
    ],
    features: ["Alarmas de proximidad", "Limitadores de velocidad", "Cámaras de zona", "Señalización inteligente", "Sensores de presencia", "Luces de advertencia"],
    stats: [
      { value: "70%", label: "Reducción de incidentes" },
      { value: "360°", label: "Detección perimetral" },
      { value: "IP65", label: "Resistencia" },
      { value: "< 0.5s", label: "Tiempo de alerta" },
    ],
    relatedCategorySlugs: ["montacargas", "sensores-y-deteccion"],
    relatedIndustrySlugs: ["montacargas", "vehiculos-vocacionales"],
    ctaText: "Cotizar seguridad para montacargas",
  },
  {
    slug: "vehiculos-electricos",
    title: "Vehículos eléctricos e infraestructura",
    subtitle: "Cargadores · Telemetría EV · Gestión",
    icon: Zap,
    tag: "EV",
    heroDescription: "Infraestructura de carga, telemetría especializada y gestión energética para flotas que migran a vehículos eléctricos e híbridos.",
    longDescription: "La transición a flotas eléctricas requiere más que vehículos: necesita infraestructura inteligente. Ofrecemos cargadores Nivel 2 y DC con programación horaria, telemetría especializada para monitoreo de batería y autonomía, y gestión centralizada de consumo energético. Todo integrado con GPT Monitor.",
    problemStatement: "La adopción de vehículos eléctricos sin infraestructura planificada resulta en tiempos muertos por carga, costos energéticos descontrolados y falta de visibilidad sobre el estado real de la flota EV.",
    benefits: [
      { title: "Carga inteligente", description: "Programación horaria para aprovechar tarifas eléctricas más bajas." },
      { title: "Telemetría de batería", description: "Monitoreo en tiempo real del estado de carga y salud de la batería." },
      { title: "Gestión centralizada", description: "Control de toda la infraestructura de carga desde una sola plataforma." },
      { title: "Reportes de consumo", description: "Análisis detallado de costos energéticos vs. combustible fósil." },
    ],
    features: ["Cargadores nivel 2 y DC", "Telemetría de batería", "Gestión de carga", "Reportes de consumo", "Control RFID", "Programación horaria"],
    stats: [
      { value: "22kW", label: "Potencia de carga" },
      { value: "RFID", label: "Control de acceso" },
      { value: "4G+WiFi", label: "Conectividad" },
      { value: "24/7", label: "Monitoreo" },
    ],
    relatedCategorySlugs: ["vehiculos-electricos"],
    relatedIndustrySlugs: ["vehiculos-electricos", "flotas-corporativas"],
    ctaText: "Solicitar asesoría EV",
  },
  {
    slug: "implementacion-y-soporte",
    title: "Implementación, instalación y soporte",
    subtitle: "Diagnóstico · Instalación · Postventa",
    icon: Wrench,
    tag: "Servicios",
    heroDescription: "Servicio completo desde el diagnóstico operativo hasta la instalación profesional, capacitación de usuarios y soporte postventa continuo.",
    longDescription: "La tecnología solo funciona cuando se implementa correctamente. Nuestro equipo de ingenieros y técnicos certificados realiza diagnóstico operativo de su flota, diseña la solución ideal, ejecuta la instalación profesional en sus instalaciones, capacita a operadores y supervisores, y brinda soporte postventa con mantenimiento preventivo programado.",
    problemStatement: "Comprar tecnología sin implementación profesional es una inversión desperdiciada. Sin diagnóstico previo, capacitación adecuada y soporte continuo, los dispositivos no se aprovechan al máximo.",
    benefits: [
      { title: "Diagnóstico operativo", description: "Análisis de su flota para diseñar la solución ideal para su operación." },
      { title: "Instalación certificada", description: "Técnicos capacitados que instalan en su patio, base o taller." },
      { title: "Capacitación completa", description: "Entrenamiento a operadores, supervisores y equipo administrativo." },
      { title: "Soporte continuo", description: "Mantenimiento preventivo, actualizaciones y atención postventa." },
    ],
    features: ["Diagnóstico operativo", "Instalación certificada", "Capacitación de usuarios", "Soporte postventa", "Mantenimiento preventivo", "Actualizaciones remotas"],
    stats: [
      { value: "8,400+", label: "Unidades instaladas" },
      { value: "98%", label: "Satisfacción" },
      { value: "< 24h", label: "Respuesta" },
      { value: "Nacional", label: "Cobertura" },
    ],
    relatedCategorySlugs: [],
    relatedIndustrySlugs: ["transporte-y-logistica", "transporte-de-pasajeros", "reparto-y-ultima-milla"],
    ctaText: "Solicitar diagnóstico gratuito",
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getProductsForSolution(solution: Solution): Product[] {
  return products.filter((p) =>
    solution.relatedCategorySlugs.includes(p.categorySlug)
  );
}
