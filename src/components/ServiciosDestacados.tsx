import React from 'react';
import { serviciosDestacados } from '../data/services';
import { cn } from '../utils/cn';

// Mapeo de logos por categoría
const logoMap = {
  'yego-mi-auto': '/logos/yego-mi-auto.png',
  'yego-pro': '/logos/yego-pro.png',
  'yego-premium': '/logos/yego-premium.png',
  'promociones': '/logos/yego-positivo.png',
  'novedades': '/logos/yego-negativo.png',
  'conductores-yango': '/logos/yango-rojo.png',
};

// Solo usamos colores rojo, blanco, negro, gris

const ServiciosDestacados: React.FC = () => {
  return (
    <section id="servicios-destacados" className="py-20 bg-bg-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grain' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='25' cy='25' r='1' fill='%23ffffff' opacity='0.1'/%3E%3Ccircle cx='75' cy='75' r='1' fill='%23ffffff' opacity='0.1'/%3E%3Ccircle cx='50' cy='10' r='1' fill='%23ffffff' opacity='0.05'/%3E%3Ccircle cx='10' cy='60' r='1' fill='%23ffffff' opacity='0.05'/%3E%3Ccircle cx='90' cy='40' r='1' fill='%23ffffff' opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grain)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-dark mb-5">
            Nuestros Servicios Destacados
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Descubre las mejores opciones para conductores profesionales
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviciosDestacados.map((servicio) => {
            const logoSrc = logoMap[servicio.category as keyof typeof logoMap];
            
            return (
              <div
                key={servicio.id}
                className="group bg-bg-white rounded-3xl p-8 shadow-custom border border-gray-200 transition-all duration-300 hover:shadow-custom-lg relative overflow-hidden"
              >
                {/* Logo */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border-2 border-gray-200 overflow-hidden">
                    {logoSrc && (
                      <img 
                        src={logoSrc} 
                        alt={`Logo ${servicio.title}`}
                        className="w-20 h-20 object-cover rounded-full"
                      />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-text-dark uppercase tracking-wide">
                    {servicio.title}
                  </h3>
                  
                  <p className="text-text-light leading-relaxed">
                    {servicio.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {servicio.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-primary uppercase tracking-wide"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="btn-primary w-full">
                    Ver Detalles
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiciosDestacados;

