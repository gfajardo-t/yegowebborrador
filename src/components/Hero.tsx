import React from 'react';
import { cn } from '../utils/cn';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="bg-bg-white pt-[120px] pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-text-dark uppercase">
              SOMOS YEGO, PARTNER<br />
              DE <span className="text-primary">YANGO</span>.<br />
              <a href="#registro" className="text-primary hover:underline">
                REGISTRATE
              </a>
            </h1>
            
            <p className="text-xl text-text-light mb-8 uppercase">
              ACTUALIZA O CONSULTA
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary btn-large">
                REGISTRARSE
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Logo Container */}
              <div className="w-80 h-80 bg-bg-white rounded-3xl shadow-custom-lg border-2 border-gray-200 flex items-center justify-center">
                <img 
                  src="/logo-yego-wsp.png" 
                  alt="Logo Yego" 
                  className="w-48 h-48 object-contain"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full animate-float opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-dark rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-primary rounded-full animate-float opacity-70" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grain' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='25' cy='25' r='1' fill='%23dc2626' opacity='0.1'/%3E%3Ccircle cx='75' cy='75' r='1' fill='%23dc2626' opacity='0.1'/%3E%3Ccircle cx='50' cy='10' r='1' fill='%23dc2626' opacity='0.05'/%3E%3Ccircle cx='10' cy='60' r='1' fill='%23dc2626' opacity='0.05'/%3E%3Ccircle cx='90' cy='40' r='1' fill='%23dc2626' opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grain)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </section>
  );
};

export default Hero;

