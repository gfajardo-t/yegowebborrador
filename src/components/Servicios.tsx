import React from 'react';
import { servicios } from '../data/services';
import { cn } from '../utils/cn';

// Mapeo de logos por servicio
const logoMap = {
  'Car': '/logos/yango-rojo.png',
  'Gift': '/logos/yego-positivo.png',
  'Headphones': '/logos/whatsapp-logo.png',
};

const Servicios: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-bg-white">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <div className="section-header">
          <h2>Nuestros Servicios</h2>
          <p>La comunidad de conductores Yango más grande de Latinoamérica</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => {
            const logoSrc = logoMap[servicio.icon as keyof typeof logoMap];
            
            return (
              <div
                key={servicio.id}
                className="group bg-white p-8 rounded-2xl shadow-custom border border-gray-200 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-custom-lg"
              >
                {/* Logo */}
                <div className="w-20 h-20 bg-bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-gray-200 overflow-hidden">
                  {logoSrc && (
                    <img 
                      src={logoSrc} 
                      alt={`Logo ${servicio.title}`}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-text-dark">
                  {servicio.title}
                </h3>
                
                <p className="text-text-light mb-6 leading-relaxed">
                  {servicio.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {servicio.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-bg-light text-primary text-sm font-medium rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="btn-secondary w-full">
                  {servicio.title === 'Conductores Yango' && 'Registrarse'}
                  {servicio.title === 'Beneficios Exclusivos' && 'Ver Beneficios'}
                  {servicio.title === 'Soporte 24/7' && 'Contactar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Servicios;

