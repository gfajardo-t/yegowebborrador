import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../utils/cn';

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu, scrollToSection, closeMenu } = useNavigation();
  const { primaryColor, changeColor, colorSchemes } = useTheme();

  const scrollToProgram = (programId: string) => {
    // Primero hacer scroll a la sección de servicios destacados
    scrollToSection('servicios-destacados');
    
    // Luego hacer scroll al programa específico después de un pequeño delay
    setTimeout(() => {
      const element = document.getElementById(programId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 500);
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { 
      id: 'servicios', 
      label: 'Nuestros Programas',
      submenu: [
        { id: 'servicios-destacados', label: 'Yego Mi Auto' },
        { id: 'servicios-destacados', label: 'Yego Pro' },
        { id: 'yego-premium', label: 'Yego Premium' },
        { id: 'planes-financiamiento', label: 'Planes de Financiamiento' },
        { id: 'servicios', label: 'Conductores Yango' },
      ]
    },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const colorOptions = [
    { key: 'red', color: '#dc2626' },
    { key: 'blue', color: '#2563eb' },
    { key: 'green', color: '#059669' },
    { key: 'purple', color: '#7c3aed' },
    { key: 'orange', color: '#ea580c' },
  ] as const;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-white shadow-custom">
      <nav className="container mx-auto px-5">
        <div className="flex justify-between items-center h-[140px]">
          {/* Logos principales y programas */}
          <div className="flex items-center space-x-6">
            {/* Logos Yego y Yango */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <img 
                  src="/logos/yego.png" 
                  alt="Logo Yego" 
                  className="w-24 h-24 object-contain"
                />
              </button>
              <div className="text-gray-400 text-xl">+</div>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <img 
                  src="/logos/yango-rojo.png" 
                  alt="Logo Yango" 
                  className="w-24 h-24 object-contain"
                />
              </button>
            </div>
            
            {/* Separador */}
            <div className="w-px h-16 bg-gray-300"></div>
            
            {/* Logos de programas */}
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => scrollToProgram('1')}
                className="hover:opacity-80 transition-opacity duration-300"
                title="Yego Mi Auto"
              >
                <img 
                  src="/logos/yego-mi-auto.png" 
                  alt="Yego Mi Auto" 
                  className="w-16 h-16 object-cover rounded-full"
                />
              </button>
              <button 
                onClick={() => scrollToProgram('2')}
                className="hover:opacity-80 transition-opacity duration-300"
                title="Yego Pro"
              >
                <img 
                  src="/logos/yego-pro.png" 
                  alt="Yego Pro" 
                  className="w-16 h-16 object-cover rounded-full"
                />
              </button>
              <button 
                onClick={() => scrollToSection('yego-premium')}
                className="hover:opacity-80 transition-opacity duration-300"
                title="Yego Premium"
              >
                <img 
                  src="/logos/yego-premium.png" 
                  alt="Yego Premium" 
                  className="w-16 h-16 object-cover rounded-full"
                />
              </button>
              <button 
                onClick={() => scrollToSection('servicios-destacados')}
                className="hover:opacity-80 transition-opacity duration-300"
                title="Promociones"
              >
                <img 
                  src="/logos/promo.png" 
                  alt="Promociones" 
                  className="w-16 h-16 object-contain"
                />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center text-text-dark font-medium hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>
                
                {item.submenu && (
                  <ul className="absolute top-full left-0 mt-2 w-56 bg-bg-white rounded-lg shadow-custom-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {item.submenu.map((subItem, index) => (
                      <li key={subItem.id + index}>
                        <button
                          onClick={() => {
                            if (subItem.label === 'Yego Mi Auto') {
                              scrollToProgram('1');
                            } else if (subItem.label === 'Yego Pro') {
                              scrollToProgram('2');
                            } else {
                              scrollToSection(subItem.id);
                            }
                          }}
                          className="block w-full text-left px-4 py-3 text-text-dark hover:bg-bg-light hover:text-primary transition-colors duration-300"
                        >
                          {subItem.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="btn-secondary">Quiero Brandear</button>
            <button className="btn-primary">Registrarse</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-text-dark hover:text-primary transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-bg-white shadow-custom-lg border-t">
            <ul className="px-5 py-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 text-text-dark hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                  {item.submenu && (
                    <ul className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.id}>
                          <button
                            onClick={() => scrollToSection(subItem.id)}
                            className="block w-full text-left py-1 text-sm text-text-light hover:text-primary transition-colors duration-300"
                          >
                            {subItem.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            
            {/* Mobile Action Buttons */}
            <div className="px-5 py-4 border-t">
              <div className="flex flex-col space-y-2">
                <button className="btn-secondary w-full">Quiero Brandear</button>
                <button className="btn-primary w-full">Registrarse</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

