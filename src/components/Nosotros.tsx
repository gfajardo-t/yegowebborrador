import React from 'react';
import { Users, Check } from 'lucide-react';

const Nosotros: React.FC = () => {
  const features = [
    'Comunidad más grande de Latinoamérica',
    'Soporte 24/7',
    'Beneficios exclusivos',
    '#YegoSiempreCumple',
  ];

  return (
    <section id="nosotros" className="py-20 bg-bg-light">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-text-dark">
              Somos Yego
            </h2>
            
            <p className="text-xl text-text-light leading-relaxed">
              La comunidad de conductores Yango más grande de Latinoamérica! 
              Con soporte 24/7 y beneficios exclusivos. #YegoSiempreCumple ❤️
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-lg text-text-dark">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Image/Visual */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Main Visual */}
              <div className="w-96 h-72 bg-gradient-to-br from-accent to-primary rounded-2xl shadow-custom-lg flex items-center justify-center">
                <img 
                  src="/logos/yego.png" 
                  alt="Logo Yego" 
                  className="w-32 h-32 object-contain"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-custom flex items-center justify-center overflow-hidden">
                <img 
                  src="/logos/yango-rojo.png" 
                  alt="Yango" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full shadow-custom flex items-center justify-center overflow-hidden">
                <img 
                  src="/logos/yego-mi-auto.png" 
                  alt="Yego Mi Auto" 
                  className="w-8 h-8 object-cover rounded-full"
                />
              </div>
              <div className="absolute top-1/2 -right-8 w-10 h-10 bg-white rounded-full shadow-custom flex items-center justify-center overflow-hidden">
                <img 
                  src="/logos/yego-pro.png" 
                  alt="Yego Pro" 
                  className="w-6 h-6 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;

