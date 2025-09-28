import React, { useState } from 'react';
import { Shield, DollarSign, Car, Smartphone, Calendar, Truck, Gift, Wrench, Heart, Cake, AlertTriangle } from 'lucide-react';
import { nivelesPremium, beneficiosDetallados, calificacionViajes } from '../data/services';
import { cn } from '../utils/cn';

const iconMap = {
  Shield,
  DollarSign,
  Car,
  Smartphone,
  Calendar,
  Truck,
  Gift,
  Wrench,
  Heart,
  Cake,
  AlertTriangle,
};

const YegoPremium: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calificacion' | 'niveles' | 'beneficios'>('calificacion');

  return (
    <section id="yego-premium" className="py-20 bg-white">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <div className="section-header">
          <h2>Yego Premium Perú</h2>
          <p>Un programa exclusivo que te apoya mientras trabajas y te da más tranquilidad en cada viaje</p>
          
          {/* Premium Highlight */}
          <div className="bg-bg-gray border-2 border-primary rounded-xl p-8 mt-8 text-center">
            <span className="inline-block bg-primary text-white px-6 py-3 rounded-full font-bold text-lg mb-4">
              💯 COMPLETAMENTE GRATIS
            </span>
            <p className="text-text-dark text-lg">
              Tu esfuerzo merece respaldo. Con Yego Premium, conduces con más seguridad, sin pagar de nada.
            </p>
          </div>
        </div>

        {/* Program Info */}
        <div className="bg-bg-light rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-text-dark mb-4">Acerca del programa</h3>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              El programa apoyará a los conductores que tienen una cantidad de viajes de acuerdo a la tabla adjunta. 
              Con el fin de mantener la estabilidad del programa 🚗💼 En Yego Premium apoyamos a nuestros conductores 
              activos con soluciones económicas y logísticas frente a situaciones que puedan surgir durante sus viajes 
              en la plataforma Yango.
            </p>
            <p>
              Todo esto está pensado para acompañarte cuando más lo necesites, bajo condiciones claras y requisitos 
              definidos. 💪📋
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { id: 'calificacion', label: 'Tabla de Calificación' },
              { id: 'niveles', label: 'Niveles del Programa' },
              { id: 'beneficios', label: 'Beneficios Detallados' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "px-6 py-3 rounded-full font-semibold transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-text-dark hover:bg-gray-200"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-12">
          {/* Tabla de Calificación */}
          {activeTab === 'calificacion' && (
            <div className="bg-white rounded-xl shadow-custom overflow-hidden">
              <div className="bg-primary text-white p-6">
                <h3 className="text-2xl font-bold">Tabla de Calificación de Viajes</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-text-dark">Mes de calificación</th>
                      <th className="px-6 py-4 text-center font-semibold text-text-dark">Viajes (Nivel Plata)</th>
                      <th className="px-6 py-4 text-center font-semibold text-text-dark">Viajes (Nivel Oro)</th>
                      <th className="px-6 py-4 text-center font-semibold text-text-dark">Mes de cobertura</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calificacionViajes.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-bg-light transition-colors">
                        <td className="px-6 py-4 font-medium text-text-dark">{item.mes}</td>
                        <td className="px-6 py-4 text-center text-text-light">{item.viajesPlata}</td>
                        <td className="px-6 py-4 text-center text-text-light">{item.viajesOro}</td>
                        <td className="px-6 py-4 text-center text-text-light">{item.mesCobertura}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Niveles del Programa */}
          {activeTab === 'niveles' && (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-text-dark mb-4">Niveles del programa</h3>
                <p className="text-text-light max-w-4xl mx-auto">
                  En Yego Premium, reconocemos tu esfuerzo como conductor. Por eso hemos creado{' '}
                  <strong>dos niveles de beneficios</strong> exclusivos pensados para ti:{' '}
                  <strong>Nivel Plata</strong> y <strong>Nivel Oro</strong>. Ambos te ofrecen ventajas 
                  únicas según la cantidad de viajes que realices al mes.
                </p>
              </div>

              {nivelesPremium.map((nivel) => (
                <div
                  key={nivel.id}
                  className={cn(
                    "rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-custom-lg",
                    nivel.id === 'oro'
                      ? "bg-bg-white border-primary"
                      : "bg-bg-gray border-gray-300"
                  )}
                >
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-text-dark mb-3">{nivel.title}</h4>
                    <p className="text-text-light leading-relaxed">{nivel.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {nivel.beneficios.map((beneficio) => {
                      const IconComponent = iconMap[beneficio.title.split(' ')[0] as keyof typeof iconMap] || Gift;
                      
                      return (
                        <div
                          key={beneficio.id}
                          className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <IconComponent className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-text-dark font-medium text-sm">{beneficio.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Beneficios Detallados */}
          {activeTab === 'beneficios' && (
            <div className="bg-white rounded-xl shadow-custom overflow-hidden">
              <div className="bg-primary text-white p-6">
                <h3 className="text-2xl font-bold">Beneficios Detallados por Categoría</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-text-dark">Beneficio</th>
                      <th className="px-4 py-3 text-left font-semibold text-text-dark">Categoría</th>
                      <th className="px-4 py-3 text-center font-semibold text-text-dark">Nivel</th>
                      <th className="px-4 py-3 text-left font-semibold text-text-dark">Ciudades</th>
                      <th className="px-4 py-3 text-center font-semibold text-text-dark">Coberturas/año</th>
                      <th className="px-4 py-3 text-center font-semibold text-text-dark">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {beneficiosDetallados.map((beneficio) => (
                      <tr key={beneficio.id} className="border-b border-gray-200 hover:bg-bg-light transition-colors">
                        <td className="px-4 py-3 font-medium text-text-dark">{beneficio.title}</td>
                        <td className="px-4 py-3 text-text-light">{beneficio.categoria}</td>
                        <td className="px-4 py-3 text-center">
                          <span className={cn(
                            "px-3 py-1 rounded-full text-xs font-semibold uppercase",
                            beneficio.nivel === 'oro'
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          )}>
                            {beneficio.nivel}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-text-light">{beneficio.ciudades.join(', ')}</td>
                        <td className="px-4 py-3 text-center text-text-light">
                          {beneficio.coberturasAno || '-'}
                        </td>
                        <td className="px-4 py-3 text-center">
                          {beneficio.link ? (
                            <a
                              href={beneficio.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary-dark font-semibold transition-colors"
                            >
                              Aplicar
                            </a>
                          ) : (
                            <span className="text-text-light italic">Automático</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Contact Channels */}
        <div className="mt-16 bg-bg-light rounded-xl p-8">
          <h3 className="text-2xl font-bold text-text-dark mb-8 text-center">
            Canales de Contacto y Aplicación
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-text-dark mb-2">App Yango Pro</h4>
              <p className="text-text-light">Opción de Asistencia en la App Yango Pro</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <h4 className="text-lg font-semibold text-text-dark mb-2">WhatsApp</h4>
              <p className="text-text-light">
                <a
                  href="https://api.whatsapp.com/send?phone=51905459444&text=Hola%20soy%20de%20Per%C3%BA%20y%20necesito%20apoyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-semibold transition-colors"
                >
                  Canal de consultas
                </a>
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <h4 className="text-lg font-semibold text-text-dark mb-2">Formulario</h4>
              <p className="text-text-light">
                <a
                  href="http://yegopremiumperu.bitrix24.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-semibold transition-colors"
                >
                  Canal para aplicar a cobertura
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YegoPremium;

