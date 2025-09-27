import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const services = [
    { label: 'Conductores Yango', href: '#' },
    { label: 'Beneficios Exclusivos', href: '#' },
    { label: 'Soporte 24/7', href: '#' },
    { label: 'Quiero Brandear', href: '#' },
  ];

  const socialLinks = [
    { name: 'TikTok', href: 'https://www.tiktok.com/@yegoenvivo', icon: '🎵' },
    { name: 'Facebook', href: 'https://www.facebook.com/yegoperuoficial/', icon: '📘' },
    { name: 'WhatsApp', href: 'https://wa.me/16692315122', icon: '💬' },
  ];

  return (
    <footer id="contacto" className="bg-text-dark text-white py-16">
      <div className="container mx-auto px-5">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">YEGO</h3>
            <p className="text-gray-300 leading-relaxed">
              La comunidad de conductores Yango más grande de Latinoamérica! 
              Con soporte 24/7 y beneficios exclusivos. #YegoSiempreCumple ❤️
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition-colors duration-300 hover:scale-110"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Servicios</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contáctanos</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">
                  Av. Prolongación Iquitos 2299, Lince
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <p className="text-gray-300">+1(669)231-5122</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <p className="text-gray-300">sac@yego.pro</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300">
              &copy; Yego 2024. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Términos y Condiciones
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

