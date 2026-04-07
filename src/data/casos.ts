export interface CasoDeExito {
  id: string;
  slug: string;
  empresa: string;
  industria: string;
  industriaSlug: string;
  solucionPrincipal: string;
  solucionSlug: string;
  reto: string;
  solucionImplementada: string;
  resultado: string;
  metricaPrincipal: { value: string; label: string };
  metricas: { value: string; label: string }[];
  testimonioTexto: string;
  testimonioAutor: string;
  testimonioCargoEmpresa: string;
  featured: boolean;
  industryTag: string;
}

export const casos: CasoDeExito[] = [
  {
    id: "1",
    slug: "transporte-carga-dashcam-adas",
    empresa: "Empresa de Transporte de Carga",
    industria: "Transporte y Logística",
    industriaSlug: "transporte-y-logistica",
    solucionPrincipal: "Dashcam ADAS+DSM",
    solucionSlug: "seguridad-vial-inteligente",
    reto: "Flota de 45 unidades con alto índice de siniestralidad en rutas nocturnas. Tres accidentes graves en un año por fatiga del operador.",
    solucionImplementada: "Instalación de Dashcam ADAS+DSM en toda la flota para supervisión centralizada de comportamiento de conductores.",
    resultado: "Reducción del 40% en incidentes viales en los primeros 5 meses. Cero accidentes graves en el siguiente año de operación.",
    metricaPrincipal: { value: "40%", label: "Reducción de siniestros" },
    metricas: [
      { value: "45", label: "Unidades equipadas" },
      { value: "5 meses", label: "Para ver resultados" },
      { value: "0", label: "Accidentes graves año 2" },
    ],
    testimonioTexto: "Desde que instalamos las dashcams con IA, nuestros operadores manejan con más conciencia. Los incidentes bajaron notablemente y ahora tenemos evidencia de cada evento en ruta.",
    testimonioAutor: "Gerente de Flotilla",
    testimonioCargoEmpresa: "Empresa de transporte de carga, Ciudad de México",
    featured: true,
    industryTag: "Transporte de carga",
  },
  {
    id: "2",
    slug: "reparto-ultima-milla-gps",
    empresa: "Operadora de Reparto Urbano",
    industria: "Reparto y Última Milla",
    industriaSlug: "reparto-y-ultima-milla",
    solucionPrincipal: "GPS y Telemetría",
    solucionSlug: "telemetria-y-gps",
    reto: "Flota de 80 vans de reparto sin visibilidad de rutas, tiempos de entrega inconsistentes y consumo de combustible descontrolado.",
    solucionImplementada: "GPS OBD2 en toda la flota con geofencing por zona de entrega, control de ralentí y reportes automáticos diarios para supervisores.",
    resultado: "Reducción del 18% en consumo de combustible. Mejora del 35% en puntualidad de entregas. Visibilidad total de las 80 unidades en tiempo real.",
    metricaPrincipal: { value: "18%", label: "Ahorro en combustible" },
    metricas: [
      { value: "80", label: "Vans monitoreadas" },
      { value: "35%", label: "Mejor puntualidad" },
      { value: "24/7", label: "Visibilidad en tiempo real" },
    ],
    testimonioTexto: "Ahora sabemos exactamente dónde está cada van, cuánto combustible consume cada conductor y si las entregas se realizaron en tiempo. El control operativo mejoró completamente.",
    testimonioAutor: "Director de Operaciones",
    testimonioCargoEmpresa: "Empresa de reparto urbano, CDMX",
    featured: true,
    industryTag: "Reparto y última milla",
  },
  {
    id: "3",
    slug: "montacargas-seguridad-almacen",
    empresa: "Centro de Distribución Industrial",
    industria: "Montacargas e Interiores",
    industriaSlug: "montacargas",
    solucionPrincipal: "Seguridad para Montacargas",
    solucionSlug: "seguridad-montacargas",
    reto: "Almacén con alta rotación de personal y tres incidentes con montacargas en seis meses. Necesidad urgente de cumplir normativa de seguridad industrial.",
    solucionImplementada: "Sistema integral de alarmas de presencia, limitadores de velocidad por zona y cámaras en cruces de pasillo para 12 montacargas.",
    resultado: "Cero incidentes en los 8 meses posteriores a la instalación. Cumplimiento total de normativa de seguridad industrial. Reducción del 70% en alertas de proximidad crítica.",
    metricaPrincipal: { value: "70%", label: "Reducción de incidentes" },
    metricas: [
      { value: "12", label: "Montacargas equipados" },
      { value: "8 meses", label: "Sin incidentes" },
      { value: "100%", label: "Cumplimiento normativo" },
    ],
    testimonioTexto: "Instalaron más de 12 sistemas en nuestros montacargas en tiempo récord sin detener la operación. El equipo técnico de Carstore es muy profesional y el soporte ha sido excelente.",
    testimonioAutor: "Responsable de Seguridad Industrial",
    testimonioCargoEmpresa: "Centro de distribución, Estado de México",
    featured: true,
    industryTag: "Montacargas e interiores",
  },
];

export function getCasoBySlug(slug: string) {
  return casos.find((c) => c.slug === slug);
}

export function getCasosByIndustria(industriaSlug: string) {
  return casos.filter((c) => c.industriaSlug === industriaSlug);
}

export function getFeaturedCasos() {
  return casos.filter((c) => c.featured);
}
