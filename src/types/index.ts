// Tipos para el usuario y autenticación
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'driver' | 'admin';
  isPremium: boolean;
  nivel: 'plata' | 'oro' | null;
  viajesMensuales: number;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Tipos para servicios
export interface Servicio {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
  link: string;
  color: 'red' | 'green' | 'purple' | 'orange' | 'blue' | 'pink';
}

export interface ServicioDestacado extends Servicio {
  category: 'yego-mi-auto' | 'yego-pro' | 'yego-premium' | 'promociones' | 'novedades' | 'conductores-yango';
}

// Tipos para planes de financiamiento
export interface PlanFinanciamiento {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: {
    icon: string;
    text: string;
  }[];
  features: string[];
  modalidades: Modalidad[];
  requirements: {
    icon: string;
    text: string;
  }[];
  ctaText: string;
  ctaLink: string;
  color: 'red' | 'green';
}

export interface Modalidad {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: {
    label: string;
    value: string;
  }[];
}

// Tipos para Yego Premium
export interface Beneficio {
  id: string;
  title: string;
  categoria: string;
  nivel: 'plata' | 'oro';
  ciudades: string[];
  coberturasAno: number | null;
  accion: string;
  link?: string;
}

export interface NivelPremium {
  id: 'plata' | 'oro';
  title: string;
  description: string;
  beneficios: Beneficio[];
  requisitos: {
    viajesMinimos: number;
    viajesMaximos?: number;
  };
}

// Tipos para el estado global
export interface AppState {
  theme: {
    primaryColor: 'red' | 'blue' | 'green' | 'purple' | 'orange';
    selectedIcon: string;
  };
  navigation: {
    isMenuOpen: boolean;
    activeSection: string;
  };
  auth: AuthState;
}

// Tipos para formularios
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

export interface RegistrationForm {
  name: string;
  email: string;
  phone: string;
  license: string;
  city: string;
  service: 'yego-mi-auto' | 'yego-pro' | 'yego-premium';
}

// Tipos para la tabla de calificación
export interface CalificacionViajes {
  mes: string;
  viajesPlata: number;
  viajesOro: number;
  mesCobertura: string;
}

// Tipos para descuentos
export interface DescuentoViajes {
  viajes: number;
  bonoAuto: number;
  pagariasCuota: number;
  ahorroTotal: number;
  pagoTotal: number;
}

