import dashcamAdas from "@/assets/products/dashcam-adas.jpg";
import camera360 from "@/assets/products/camera-360.jpg";
import gpsTracker from "@/assets/products/gps-tracker.jpg";
import sensorBlindSpot from "@/assets/products/sensor-blind-spot.jpg";
import speedLimiter from "@/assets/products/speed-limiter.jpg";
import cameraReversa from "@/assets/products/camera-reversa.jpg";
import evCharger from "@/assets/products/ev-charger.jpg";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  sku: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: string;
  subcategory?: string;
  shortDescription: string;
  longDescription: string;
  problemSolved: string;
  recommendedApplications: string[];
  recommendedVehicleTypes: string[];
  images: string[];
  datasheetPdf?: string;
  specs: ProductSpec[];
  installationRequired: boolean;
  featured: boolean;
  relatedSolutionIds: string[];
  relatedIndustryIds: string[];
  ctaLabel: string;
  status: "active" | "inactive";
  highlights: string[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
}

export const categories: Category[] = [
  { slug: "inteligencia-artificial", name: "Inteligencia artificial", description: "Dashcams ADAS+DSM, cámaras con detección IA, cascos inteligentes", icon: "Brain", productCount: 6 },
  { slug: "camaras-y-video", name: "Cámaras y video", description: "Reversa con monitor, 360°, monitoreo exterior, inalámbricas, side mirror", icon: "Camera", productCount: 14 },
  { slug: "limitadores-y-control", name: "Limitadores y control", description: "Limitadores de velocidad, corte de corriente, power box", icon: "Cpu", productCount: 5 },
  { slug: "sensores-y-deteccion", name: "Sensores y detección", description: "Punto ciego, Smart BSIS, sensores de reversa, sistema redundante", icon: "Radar", productCount: 8 },
  { slug: "montacargas", name: "Montacargas", description: "Seguridad específica para montacargas y operación interior", icon: "Wrench", productCount: 4 },
  { slug: "gps-y-telemetria", name: "GPS y telemetría", description: "OBD2, GV300, GV600, ralentí, velocímetro digital", icon: "CircuitBoard", productCount: 6 },
  { slug: "complementarios", name: "Dispositivos complementarios", description: "Presión de llantas, tapón antirrobo, espejos, sirenas, ventiladores", icon: "MonitorSmartphone", productCount: 10 },
  { slug: "vehiculos-electricos", name: "Vehículos eléctricos", description: "Cargadores eléctricos, telemetría EV, infraestructura de carga", icon: "Zap", productCount: 4 },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "dashcam-adas-dsm-pro",
    sku: "CS-AI-001",
    title: "Dashcam ADAS+DSM Pro",
    subtitle: "Cámara inteligente con detección avanzada de conducción",
    category: "Inteligencia artificial",
    categorySlug: "inteligencia-artificial",
    subcategory: "Dashcams IA",
    shortDescription: "Sistema dual de cámara con ADAS (asistencia avanzada al conductor) y DSM (monitoreo del estado del conductor). Detecta fatiga, distracción, uso de celular y exceso de velocidad en tiempo real.",
    longDescription: "La Dashcam ADAS+DSM Pro es el dispositivo insignia de Carstore para la prevención de accidentes viales. Combina dos sistemas de inteligencia artificial: ADAS para análisis del camino (colisión frontal, cambio de carril, distancia de seguimiento) y DSM para monitoreo del conductor (fatiga, distracción, uso de celular, fumar). Envía alertas sonoras inmediatas y notificaciones a la plataforma GPT Monitor para acción correctiva.",
    problemSolved: "Accidentes por fatiga, distracción y conducta de riesgo del operador. Reduce siniestralidad hasta un 37% en los primeros 6 meses de operación.",
    recommendedApplications: ["Transporte de carga", "Transporte de pasajeros", "Última milla", "Flotas corporativas"],
    recommendedVehicleTypes: ["Tractocamiones", "Autobuses", "Camionetas de reparto", "Vehículos ejecutivos"],
    images: [dashcamAdas, dashcamAdas, dashcamAdas],
    specs: [
      { label: "Resolución", value: "1080p Full HD" },
      { label: "Ángulo de visión ADAS", value: "140° gran angular" },
      { label: "Ángulo de visión DSM", value: "120° interior" },
      { label: "Conectividad", value: "4G LTE / WiFi" },
      { label: "Almacenamiento", value: "MicroSD hasta 256GB" },
      { label: "Alimentación", value: "12V/24V DC" },
      { label: "Certificaciones", value: "CE, FCC, RoHS" },
      { label: "Temperatura de operación", value: "-20°C a 70°C" },
      { label: "GPS integrado", value: "Sí, con GLONASS" },
      { label: "Audio", value: "Altavoz + micrófono integrado" },
    ],
    installationRequired: true,
    featured: true,
    relatedSolutionIds: ["seguridad-vial-inteligente", "monitoreo-control-operativo"],
    relatedIndustryIds: ["transporte-logistica", "transporte-pasajeros"],
    ctaLabel: "Solicitar cotización",
    status: "active",
    highlights: [
      "Detección de fatiga y distracción en tiempo real con IA",
      "Alertas sonoras inmediatas para el conductor",
      "Integración directa con plataforma GPT Monitor",
      "Visión nocturna con LED infrarrojo",
      "Resistente a vibraciones y temperaturas extremas",
      "Instalación profesional incluida",
    ],
  },
  {
    id: "2",
    slug: "sistema-360-surround-view",
    sku: "CS-CAM-002",
    title: "Sistema 360° Surround View",
    subtitle: "Visión perimetral completa para maniobras seguras",
    category: "Cámaras y video",
    categorySlug: "camaras-y-video",
    subcategory: "Sistemas 360°",
    shortDescription: "Sistema de 4 cámaras que genera una vista aérea en tiempo real del vehículo, eliminando puntos ciegos en maniobras de reversa, estacionamiento y giros cerrados.",
    longDescription: "El Sistema 360° Surround View utiliza cuatro cámaras de alta definición (frontal, trasera y laterales) para crear una vista cenital en tiempo real del vehículo. El procesador integrado fusiona las cuatro imágenes en una sola vista panorámica que elimina los puntos ciegos. Ideal para vehículos pesados, autobuses y maquinaria que operan en espacios reducidos.",
    problemSolved: "Accidentes por puntos ciegos durante maniobras de reversa, estacionamiento y giros. Colisiones con peatones, ciclistas y objetos en entornos industriales.",
    recommendedApplications: ["Maniobras en patio", "Estacionamiento", "Operación en almacén", "Zonas urbanas congestionadas"],
    recommendedVehicleTypes: ["Camiones de carga", "Autobuses urbanos", "Vehículos vocacionales", "Montacargas"],
    images: [camera360, camera360, camera360],
    specs: [
      { label: "Cámaras", value: "4x HD (frontal, trasera, laterales)" },
      { label: "Resolución por cámara", value: "720p AHD" },
      { label: "Procesador", value: "Quad-core dedicado" },
      { label: "Pantalla compatible", value: '7" a 10" (incluida)' },
      { label: "Ángulo por cámara", value: "180° ojo de pez" },
      { label: "Visión nocturna", value: "Sí, LED infrarrojo" },
      { label: "Resistencia", value: "IP68 sumergible" },
      { label: "Alimentación", value: "12V/24V DC" },
    ],
    installationRequired: true,
    featured: true,
    relatedSolutionIds: ["camaras-visibilidad-avanzada"],
    relatedIndustryIds: ["transporte-logistica", "montacargas-operacion-interna"],
    ctaLabel: "Solicitar información",
    status: "active",
    highlights: [
      "Vista aérea 360° en tiempo real",
      "Elimina todos los puntos ciegos del vehículo",
      "Cámaras IP68 resistentes al agua y polvo",
      "Líneas de guía dinámicas para maniobras",
      "Compatible con monitores de 7\" a 10\"",
      "Grabación continua opcional",
    ],
  },
  {
    id: "3",
    slug: "gps-gv300-telemetria",
    sku: "CS-GPS-003",
    title: "GPS GV300 con Telemetría",
    subtitle: "Rastreo satelital y diagnóstico vehicular avanzado",
    category: "GPS y telemetría",
    categorySlug: "gps-y-telemetria",
    subcategory: "Rastreadores GPS",
    shortDescription: "Dispositivo GPS con telemetría avanzada que proporciona ubicación en tiempo real, geofencing, alertas de velocidad, diagnóstico OBD2 y control de ralentí.",
    longDescription: "El GV300 es un rastreador GPS de grado industrial que va más allá de la ubicación: integra telemetría vehicular para monitorear velocidad, consumo de combustible, horas motor, diagnóstico OBD2 y patrones de conducción. Compatible con la plataforma GPT Monitor para visualización centralizada de toda la flota.",
    problemSolved: "Falta de visibilidad sobre la ubicación, velocidad y estado mecánico de los vehículos. Consumo excesivo de combustible por ralentí y rutas ineficientes.",
    recommendedApplications: ["Control de flota", "Geofencing", "Análisis de conducción", "Control de combustible"],
    recommendedVehicleTypes: ["Cualquier vehículo comercial", "Tractocamiones", "Camionetas", "Vehículos utilitarios"],
    images: [gpsTracker, gpsTracker, gpsTracker],
    specs: [
      { label: "Tecnología", value: "GPS + GLONASS + LBS" },
      { label: "Conectividad", value: "4G LTE Cat-1" },
      { label: "Precisión GPS", value: "< 2.5m CEP" },
      { label: "Interfaz vehicular", value: "OBD2 / CAN Bus" },
      { label: "Batería de respaldo", value: "450mAh Li-ion" },
      { label: "Entradas/salidas", value: "3 digitales + 1 analógica" },
      { label: "Protocolo", value: "TCP/UDP" },
      { label: "Temperatura de operación", value: "-30°C a 80°C" },
    ],
    installationRequired: true,
    featured: false,
    relatedSolutionIds: ["gps-telemetria-analitica"],
    relatedIndustryIds: ["transporte-logistica", "reparto-ultima-milla"],
    ctaLabel: "Cotizar para mi flota",
    status: "active",
    highlights: [
      "Ubicación en tiempo real con precisión submétrica",
      "Geofencing ilimitado con alertas automáticas",
      "Diagnóstico OBD2 integrado",
      "Detección de ralentí excesivo",
      "Batería de respaldo antitamper",
      "Compatible con plataforma GPT Monitor",
    ],
  },
  {
    id: "4",
    slug: "sensor-punto-ciego-smart-bsis",
    sku: "CS-SEN-004",
    title: "Sensor de Punto Ciego Smart BSIS",
    subtitle: "Detección radar de vehículos y peatones en zona ciega",
    category: "Sensores y detección",
    categorySlug: "sensores-y-deteccion",
    subcategory: "Punto ciego",
    shortDescription: "Sistema de radar lateral que detecta vehículos, motociclistas, ciclistas y peatones en la zona ciega del vehículo, alertando al conductor con señales visuales y sonoras.",
    longDescription: "El Smart BSIS (Blind Spot Information System) utiliza tecnología radar de 77GHz para monitorear continuamente las zonas laterales del vehículo. Detecta objetos en movimiento en la zona ciega y alerta al conductor mediante indicadores LED en los espejos y alertas sonoras. Cumple con normativas europeas de seguridad para vehículos pesados.",
    problemSolved: "Accidentes por cambio de carril sin verificar zona ciega. Atropellamiento de ciclistas y peatones en giros a la derecha. Colisiones laterales en vías rápidas.",
    recommendedApplications: ["Cambio de carril seguro", "Giros en intersecciones", "Operación urbana", "Conducción en autopista"],
    recommendedVehicleTypes: ["Tractocamiones", "Autobuses", "Camiones de carga", "Vehículos vocacionales"],
    images: [sensorBlindSpot, sensorBlindSpot, sensorBlindSpot],
    specs: [
      { label: "Tecnología", value: "Radar 77GHz" },
      { label: "Rango de detección", value: "Hasta 8m lateral" },
      { label: "Ángulo de cobertura", value: "150°" },
      { label: "Alerta visual", value: "LED en espejo retrovisor" },
      { label: "Alerta sonora", value: "Buzzer graduable" },
      { label: "Velocidad de activación", value: "> 10 km/h" },
      { label: "Resistencia", value: "IP67" },
      { label: "Certificación", value: "ECE R151" },
    ],
    installationRequired: true,
    featured: true,
    relatedSolutionIds: ["deteccion-riesgos-puntos-ciegos"],
    relatedIndustryIds: ["transporte-logistica", "transporte-pasajeros"],
    ctaLabel: "Solicitar demostración",
    status: "active",
    highlights: [
      "Radar 77GHz de alta precisión",
      "Detecta vehículos, ciclistas y peatones",
      "Indicadores LED integrados en espejos",
      "Cumple normativa europea ECE R151",
      "Funciona en cualquier condición climática",
      "Calibración automática",
    ],
  },
  {
    id: "5",
    slug: "limitador-velocidad-electronico",
    sku: "CS-LIM-005",
    title: "Limitador de Velocidad Electrónico",
    subtitle: "Control preciso de velocidad máxima para flotas",
    category: "Limitadores y control",
    categorySlug: "limitadores-y-control",
    subcategory: "Limitadores",
    shortDescription: "Dispositivo electrónico que limita la velocidad máxima del vehículo de forma precisa y confiable, con configuración remota desde la plataforma GPT Monitor.",
    longDescription: "El Limitador de Velocidad Electrónico interviene directamente en el sistema de aceleración del vehículo para garantizar que no supere la velocidad configurada. Compatible con motores a gasolina y diésel, se integra con el sistema de inyección o el acelerador electrónico. Permite configuración remota de límites por zona, horario o tipo de vía.",
    problemSolved: "Exceso de velocidad que causa accidentes graves, multas, aumento de consumo de combustible y desgaste prematuro de componentes mecánicos.",
    recommendedApplications: ["Cumplimiento normativo", "Reducción de siniestralidad", "Ahorro de combustible", "Protección del motor"],
    recommendedVehicleTypes: ["Tractocamiones", "Camiones de reparto", "Autobuses", "Camionetas de servicio"],
    images: [speedLimiter, speedLimiter, speedLimiter],
    specs: [
      { label: "Compatibilidad", value: "Gasolina y diésel" },
      { label: "Interfaz motor", value: "CAN Bus / Acelerador electrónico" },
      { label: "Rango de limitación", value: "20-150 km/h" },
      { label: "Precisión", value: "± 2 km/h" },
      { label: "Configuración", value: "Remota vía plataforma" },
      { label: "Alimentación", value: "12V/24V DC" },
      { label: "Protección", value: "Anti-manipulación" },
      { label: "Certificación", value: "ECE R89" },
    ],
    installationRequired: true,
    featured: false,
    relatedSolutionIds: ["monitoreo-control-operativo"],
    relatedIndustryIds: ["transporte-logistica", "reparto-ultima-milla"],
    ctaLabel: "Solicitar cotización",
    status: "active",
    highlights: [
      "Limitación precisa con ±2 km/h de tolerancia",
      "Configuración remota por zona y horario",
      "Compatible con motores gasolina y diésel",
      "Sistema anti-manipulación integrado",
      "Reduce consumo de combustible hasta 15%",
      "Cumple normativa ECE R89",
    ],
  },
  {
    id: "6",
    slug: "kit-camara-reversa-monitor-7",
    sku: "CS-CAM-006",
    title: "Kit Cámara de Reversa con Monitor 7\"",
    subtitle: "Visibilidad trasera completa para maniobras seguras",
    category: "Cámaras y video",
    categorySlug: "camaras-y-video",
    subcategory: "Cámaras de reversa",
    shortDescription: "Kit completo de cámara de reversa con monitor de 7 pulgadas, líneas de guía dinámicas y visión nocturna. Incluye cableado y soporte de montaje.",
    longDescription: "Kit profesional de cámara de reversa diseñado para vehículos comerciales y de carga. Incluye cámara trasera con grado de protección IP68, monitor de 7\" de alta luminosidad visible con luz solar directa, y cableado completo para instalación. Las líneas de guía dinámicas se ajustan automáticamente según el ángulo de giro.",
    problemSolved: "Accidentes por reversa sin visibilidad: colisión con peatones, vehículos, muros y equipamiento en patios de maniobras y zonas de carga.",
    recommendedApplications: ["Reversa en patios", "Maniobras de carga", "Estacionamiento", "Operación en almacén"],
    recommendedVehicleTypes: ["Camiones de carga", "Camionetas", "Vans de reparto", "Vehículos utilitarios"],
    images: [cameraReversa, cameraReversa, cameraReversa],
    specs: [
      { label: "Resolución cámara", value: "720p AHD" },
      { label: "Ángulo de visión", value: "150° gran angular" },
      { label: "Monitor", value: '7" IPS alta luminosidad' },
      { label: "Visión nocturna", value: "18 LED infrarrojo" },
      { label: "Resistencia cámara", value: "IP68" },
      { label: "Líneas de guía", value: "Dinámicas ajustables" },
      { label: "Alimentación", value: "12V/24V DC" },
      { label: "Activación", value: "Automática en reversa" },
    ],
    installationRequired: true,
    featured: false,
    relatedSolutionIds: ["camaras-visibilidad-avanzada"],
    relatedIndustryIds: ["transporte-logistica", "reparto-ultima-milla"],
    ctaLabel: "Solicitar cotización",
    status: "active",
    highlights: [
      "Monitor 7\" visible bajo luz solar directa",
      "Cámara IP68 resistente al agua y polvo",
      "Líneas de guía dinámicas",
      "Visión nocturna con 18 LEDs IR",
      "Activación automática al dar reversa",
      "Kit completo con cableado incluido",
    ],
  },
  {
    id: "7",
    slug: "cargador-electrico-nivel-2",
    sku: "CS-EV-007",
    title: "Cargador Eléctrico Nivel 2",
    subtitle: "Infraestructura de carga para flotas eléctricas",
    category: "Vehículos eléctricos",
    categorySlug: "vehiculos-electricos",
    subcategory: "Cargadores",
    shortDescription: "Estación de carga Nivel 2 para vehículos eléctricos de flota, con monitoreo remoto, control de acceso y reportes de consumo energético.",
    longDescription: "El Cargador Eléctrico Nivel 2 está diseñado para flotas que están migrando a vehículos eléctricos. Ofrece carga inteligente con programación horaria para aprovechar tarifas eléctricas más bajas, control de acceso por tarjeta RFID, y monitoreo remoto del estado de carga. Se integra con la plataforma GPT Monitor para gestión centralizada.",
    problemSolved: "Falta de infraestructura de carga para flotas eléctricas. Costos energéticos elevados por carga sin programación. Imposibilidad de monitorear y controlar el consumo energético.",
    recommendedApplications: ["Bases de operación", "Centros de distribución", "Estacionamientos corporativos", "Patios de maniobras"],
    recommendedVehicleTypes: ["Vans eléctricas", "Camionetas eléctricas", "Vehículos utilitarios EV", "Autobuses eléctricos"],
    images: [evCharger, evCharger, evCharger],
    specs: [
      { label: "Nivel de carga", value: "Nivel 2 (AC)" },
      { label: "Potencia", value: "7.4 kW — 22 kW" },
      { label: "Conector", value: "Tipo 2 / J1772" },
      { label: "Control de acceso", value: "RFID / App" },
      { label: "Conectividad", value: "WiFi + 4G" },
      { label: "Programación", value: "Horaria / por tarifa" },
      { label: "Resistencia", value: "IP54 exterior" },
      { label: "Certificación", value: "UL / CE" },
    ],
    installationRequired: true,
    featured: true,
    relatedSolutionIds: ["vehiculos-electricos-infraestructura"],
    relatedIndustryIds: ["flotas-mixtas-corporativas"],
    ctaLabel: "Solicitar asesoría EV",
    status: "active",
    highlights: [
      "Carga inteligente con programación horaria",
      "Control de acceso por RFID y app móvil",
      "Monitoreo remoto del estado de carga",
      "Compatible con Tipo 2 y J1772",
      "Reportes de consumo energético integrados",
      "Instalación y configuración incluida",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, limit);
}

export function getFeaturedProducts(limit = 4): Product[] {
  return products.filter((p) => p.featured).slice(0, limit);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
