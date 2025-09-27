import { PlanFinanciamiento, Modalidad, DescuentoViajes } from '../types';

// Modalidades para YEGO MI AUTO
const modalidadesYegoMiAuto: Modalidad[] = [
  {
    id: 'sorteo',
    title: 'Sorteo',
    description: 'Al llegar a 400 aportantes se inician los sorteos semanales, empezando por 1 auto semanal y luego escalando a 2 o 3 autos semanales con el objetivo de entregar en un máximo de 3 años los autos a todos los aportantes.',
    icon: 'Gift',
    details: [
      { label: 'Cuota Semanal:', value: '$130' },
      { label: 'Nro Cuotas:', value: '160' },
      { label: 'Auto Sugerido:', value: 'MG5' },
    ],
  },
  {
    id: 'remate',
    title: 'Remate',
    description: 'Luego de un año de empezar los sorteos comenzamos la modalidad de remate, donde quien tiene el mayor número de cuotas en dinero disponible (mínimo 30 cuotas) se lleva el auto.',
    icon: 'Gavel',
    details: [
      { label: 'Cuota Semanal:', value: '$130' },
      { label: 'Nro Cuotas:', value: '160' },
      { label: 'Requisito:', value: '1 año de aportes' },
    ],
  },
  {
    id: 'inmediata',
    title: 'Entrega Inmediata',
    description: 'Si tienes $1000 (auto nuevo) o $600 (auto de segundo uso) en aportes puedes optar por entrega inmediata bajo un plan de pagos de financiamiento tradicional.',
    icon: 'Zap',
    details: [
      { label: 'Requisito:', value: '3 meses en Yango + 400 viajes/mes' },
      { label: 'Inicial Nuevo:', value: '$1000' },
      { label: 'Inicial Usado:', value: '$600' },
    ],
  },
];

// Planes de financiamiento
export const planesFinanciamiento: PlanFinanciamiento[] = [
  {
    id: 'yego-mi-auto',
    title: 'YEGO MI AUTO',
    description: 'Tu auto propio con descuentos según tu rendimiento',
    icon: 'Car',
    highlights: [
      { icon: 'Percent', text: 'TEA desde 2.65%' },
      { icon: 'DollarSign', text: 'Desde 0% inicial' },
      { icon: 'Clock', text: '3-6 años de crédito' },
    ],
    features: [
      'Descuentos según cantidad de viajes semanales',
      'Sin necesidad de créditos complicados',
      'Incluso sin inicial',
      'Cuotas accesibles y flexibles',
      'Vehículos listos para trabajar (GNV, GPS, ATU)',
      'Opción de entrega por Sorteo, Remate o Inmediata',
    ],
    modalidades: modalidadesYegoMiAuto,
    requirements: [
      { icon: 'IdCard', text: 'Licencia A1 para inscribirse' },
      { icon: 'Car', text: 'A2A o superior para entrega' },
      { icon: 'DollarSign', text: 'Inscripción: $100-300' },
      { icon: 'Calendar', text: 'Fecha máxima: 31/03/2025' },
    ],
    ctaText: 'Solicitar Información',
    ctaLink: 'https://api.whatsapp.com/send?phone=51905459444&text=Hola%20quiero%20informaci%C3%B3n%20sobre%20YEGO%20MI%20AUTO',
    color: 'red',
  },
  {
    id: 'yego-pro',
    title: 'YEGO PRO',
    description: 'Plan de compartir ganancias - Nosotros ponemos el auto',
    icon: 'Handshake',
    highlights: [
      { icon: 'Car', text: 'Nosotros ponemos el auto' },
      { icon: 'Fuel', text: 'Combustible incluido' },
      { icon: 'Wrench', text: 'Mantenimiento incluido' },
    ],
    features: [
      'El Auto: Vehículo listo para trabajar',
      'El Combustible: Nos encargamos del combustible',
      'El Mantenimiento: Gastos operativos cubiertos',
      'Personal: Soporte y asistencia 24/7',
      'Pagos Puntuales: Monitoreo constante',
      'Ingresos Garantizados: S/800.00 soles promedio líquido semanal',
    ],
    modalidades: [
      {
        id: 'proceso',
        title: '¿Cómo funciona?',
        description: 'Proceso paso a paso para obtener tu vehículo',
        icon: 'ArrowRight',
        details: [
          { label: 'Paso 1:', value: 'Conduce con YEGO PRO' },
          { label: 'Paso 2:', value: 'Paga tus cuotas PRE' },
          { label: 'Paso 3:', value: 'Obtén tu propio auto' },
        ],
      },
    ],
    requirements: [
      { icon: 'IdCard', text: 'Licencia A2A o superior' },
      { icon: 'TrendingUp', text: 'Ingresos semanales: S/800.00 soles promedio' },
      { icon: 'Clock', text: 'Disponibilidad completa' },
    ],
    ctaText: 'Solicitar Información',
    ctaLink: 'https://api.whatsapp.com/send?phone=51905459444&text=Hola%20quiero%20informaci%C3%B3n%20sobre%20YEGO%20PRO',
    color: 'green',
  },
];

// Descuentos por viajes
export const descuentosViajes: DescuentoViajes[] = [
  { viajes: 20, descuento: '5%', ahorro: '$200', pago: '$3800' },
  { viajes: 25, descuento: '7%', ahorro: '$280', pago: '$3720' },
  { viajes: 30, descuento: '10%', ahorro: '$400', pago: '$3600' },
  { viajes: 35, descuento: '12%', ahorro: '$480', pago: '$3520' },
  { viajes: 40, descuento: '15%', ahorro: '$600', pago: '$3400' },
  { viajes: 45, descuento: '18%', ahorro: '$720', pago: '$3280' },
  { viajes: 50, descuento: '20%', ahorro: '$800', pago: '$3200' },
];

