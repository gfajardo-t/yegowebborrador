import React from 'react';
import { Car, Handshake, Crown, Gift, Newspaper, Users } from 'lucide-react';
import { serviciosDestacados } from '../data/services';
import { cn } from '../utils/cn';

const iconMap = {
  Car,
  Handshake,
  Crown,
  Gift,
  Newspaper,
  Users,
};

const colorClasses = {
  red: 'from-red-600 to-orange-500',
  green: 'from-green-600 to-emerald-500',
  purple: 'from-purple-600 to-violet-500',
  orange: 'from-orange-600 to-amber-500',
  blue: 'from-blue-600 to-cyan-500',
  pink: 'from-pink-600 to-rose-500',
};

const ServiciosDestacados: React.FC = () => {
  return (
    <section id="servicios-destacados" className="py-20 bg-gradient-to-br from-slate-800 to-slate-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grain' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='25' cy='25' r='1' fill='%23ffffff' opacity='0.1'/%3E%3Ccircle cx='75' cy='75' r='1' fill='%23ffffff' opacity='0.1'/%3E%3Ccircle cx='50' cy='10' r='1' fill='%23ffffff' opacity='0.05'/%3E%3Ccircle cx='10' cy='60' r='1' fill='%23ffffff' opacity='0.05'/%3E%3Ccircle cx='90' cy='40' r='1' fill='%23ffffff' opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grain)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 drop-shadow-lg">
            Nuestros Servicios Destacados
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Descubre las mejores opciones para conductores profesionales
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviciosDestacados.map((servicio) => {
            const IconComponent = iconMap[servicio.icon as keyof typeof iconMap];
            
            return (
              <div
                key={servicio.id}
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-3xl relative overflow-hidden"
              >
                {/* Top Border Animation */}
                <div className={cn(
                  "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                  colorClasses[servicio.color]
                )}></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={cn(
                    "w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl relative overflow-hidden transition-transform duration-300 group-hover:scale-110",
                    `bg-gradient-to-br ${colorClasses[servicio.color]}`
                  )}>
                    {IconComponent && <IconComponent className="relative z-10" />}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-br transition-transform duration-300 group-hover:scale-110",
                      colorClasses[servicio.color]
                    )}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wide">
                    {servicio.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {servicio.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {servicio.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wide",
                          `bg-gradient-to-r ${colorClasses[servicio.color]}`
                        )}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={servicio.link}
                    className={cn(
                      "inline-flex items-center px-6 py-3 rounded-full text-white font-semibold text-sm uppercase tracking-wide transition-all duration-300 relative overflow-hidden group/btn",
                      `bg-gradient-to-r ${colorClasses[servicio.color]} hover:shadow-lg hover:-translate-y-0.5`
                    )}
                  >
                    <span className="relative z-10">Ver Detalles</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"></div>
                  </a>
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

