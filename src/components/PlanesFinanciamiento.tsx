import React, { useState } from 'react';
import { Car, Users, Percent, DollarSign, Clock, CreditCard, Calendar, Gift, Gavel, Zap } from 'lucide-react';
import { planesFinanciamiento, descuentosViajes } from '../data/plans';
import { cn } from '../utils/cn';

const iconMap = {
  Car,
  Users,
  Percent,
  DollarSign,
  Clock,
  CreditCard,
  Calendar,
  Gift,
  Gavel,
  Zap,
};

const PlanesFinanciamiento: React.FC = () => {
  const [activeModalidad, setActiveModalidad] = useState<{ [key: string]: string }>({
    'yego-mi-auto': 'sorteo',
    'yego-pro': 'proceso',
  });

  const handleModalidadChange = (planId: string, modalidadId: string) => {
    setActiveModalidad(prev => ({
      ...prev,
      [planId]: modalidadId,
    }));
  };

  return (
    <section id="planes-financiamiento" className="py-20 bg-gradient-to-br from-bg-light to-gray-100">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <div className="section-header">
          <h2>Planes de Financiamiento</h2>
          <p>Opciones flexibles para obtener tu vehículo y generar ingresos</p>
        </div>

        {/* Plans */}
        <div className="space-y-12">
          {planesFinanciamiento.map((plan) => {
            const IconComponent = iconMap[plan.icon as keyof typeof iconMap];
            
            return (
              <div
                key={plan.id}
                className={cn(
                  "bg-white rounded-3xl p-10 shadow-custom-lg border-2 transition-all duration-300 hover:shadow-2xl",
                  plan.color === 'red' ? "border-l-8 border-l-red-600" : "border-l-8 border-l-green-600"
                )}
              >
                {/* Plan Header */}
                <div className="flex items-center mb-8 pb-6 border-b-2 border-gray-100">
                  <div className={cn(
                    "w-20 h-20 rounded-full flex items-center justify-center mr-6 text-white text-3xl",
                    plan.color === 'red' 
                      ? "bg-gradient-to-br from-red-600 to-orange-500" 
                      : "bg-gradient-to-br from-green-600 to-emerald-500"
                  )}>
                    {IconComponent && <IconComponent />}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-text-dark mb-2">{plan.title}</h3>
                    <p className="text-lg text-text-light">{plan.description}</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {plan.highlights.map((highlight, index) => {
                    const HighlightIcon = iconMap[highlight.icon as keyof typeof iconMap];
                    return (
                      <div
                        key={index}
                        className="flex items-center bg-bg-light px-5 py-3 rounded-full border border-gray-200 flex-1 min-w-[200px]"
                      >
                        {HighlightIcon && <HighlightIcon className="w-5 h-5 text-primary mr-3" />}
                        <span className="font-semibold text-text-dark">{highlight.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-text-dark mb-4">
                    {plan.id === 'yego-mi-auto' ? '¿Qué hace único al programa?' : '¿Qué incluye YEGO PRO?'}
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-text-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modalidades */}
                {plan.modalidades && (
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-text-dark mb-5">Modalidades de Entrega</h4>
                    
                    {/* Modalidad Tabs */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {plan.modalidades.map((modalidad) => {
                        const ModalidadIcon = iconMap[modalidad.icon as keyof typeof iconMap];
                        return (
                          <button
                            key={modalidad.id}
                            onClick={() => handleModalidadChange(plan.id, modalidad.id)}
                            className={cn(
                              "flex items-center px-5 py-3 rounded-full border-2 transition-all duration-300 flex-1 min-w-[150px] justify-center",
                              activeModalidad[plan.id] === modalidad.id
                                ? "bg-primary text-white border-primary"
                                : "bg-gray-50 text-text-dark border-transparent hover:bg-gray-100"
                            )}
                          >
                            {ModalidadIcon && <ModalidadIcon className="w-5 h-5 mr-2" />}
                            <span className="font-semibold">{modalidad.title}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Modalidad Content */}
                    {plan.modalidades.map((modalidad) => (
                      activeModalidad[plan.id] === modalidad.id && (
                        <div key={modalidad.id} className="bg-bg-light rounded-2xl p-6 border border-gray-200">
                          <h5 className="text-lg font-semibold text-text-dark mb-3">{modalidad.title}</h5>
                          <p className="text-text-light mb-5 leading-relaxed">{modalidad.description}</p>
                          
                          <div className="grid md:grid-cols-3 gap-4">
                            {modalidad.details.map((detail, index) => (
                              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                                <div className="flex justify-between items-center">
                                  <span className="font-medium text-text-light">{detail.label}</span>
                                  <span className="font-semibold text-text-dark">{detail.value}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                )}

                {/* Descuentos Table (only for YEGO MI AUTO) */}
                {plan.id === 'yego-mi-auto' && (
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-text-dark mb-5">Descuentos por Viajes Semanales</h4>
                    <div className="overflow-x-auto border border-gray-200 rounded-lg">
                      <table className="w-full">
                        <thead className="bg-primary text-white">
                          <tr>
                            <th className="px-4 py-3 text-center font-semibold">Viajes</th>
                            <th className="px-4 py-3 text-center font-semibold">Bono Auto</th>
                            <th className="px-4 py-3 text-center font-semibold">Pagarías de Cuota</th>
                            <th className="px-4 py-3 text-center font-semibold">Ahorro Total</th>
                            <th className="px-4 py-3 text-center font-semibold">Pago Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {descuentosViajes.map((descuento: any, index: number) => (
                            <tr key={index} className={cn(
                              "border-b border-gray-200 hover:bg-bg-light transition-colors",
                              index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            )}>
                              <td className="px-4 py-3 text-center font-medium text-text-dark">{descuento.viajes} viajes</td>
                              <td className="px-4 py-3 text-center text-text-light">${descuento.bonoAuto}</td>
                              <td className="px-4 py-3 text-center text-text-light">${descuento.pagariasCuota}</td>
                              <td className="px-4 py-3 text-center text-text-light">${descuento.ahorroTotal.toLocaleString()}</td>
                              <td className="px-4 py-3 text-center text-text-light">${descuento.pagoTotal.toLocaleString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Requirements */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-text-dark mb-5">
                    {plan.id === 'yego-mi-auto' ? 'Requisitos de Inscripción' : 'Requisitos'}
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {plan.requirements.map((requirement, index) => {
                      const RequirementIcon = iconMap[requirement.icon as keyof typeof iconMap];
                      return (
                        <div key={index} className="flex items-center bg-bg-light p-4 rounded-lg border border-gray-200">
                          {RequirementIcon && <RequirementIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0" />}
                          <span className="font-medium text-text-dark">{requirement.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-6 border-t-2 border-gray-100">
                  <a
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                      plan.color === 'red'
                        ? "bg-gradient-to-r from-red-600 to-orange-500 text-white hover:shadow-red-500/25"
                        : "bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:shadow-green-500/25"
                    )}
                  >
                    <span className="mr-2">📱</span>
                    {plan.ctaText}
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

export default PlanesFinanciamiento;

