import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../utils/cn';

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu, scrollToSection, closeMenu } = useNavigation();
  const { primaryColor, changeColor, colorSchemes } = useTheme();

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { 
      id: 'servicios', 
      label: 'Servicios',
      submenu: [
        { id: 'servicios', label: 'Conductores Yango' },
        { id: 'yego-premium', label: 'Yego Premium' },
        { id: 'planes-financiamiento', label: 'Planes de Financiamiento' },
        { id: 'beneficios', label: 'Beneficios' },
        { id: 'planes', label: 'Planes' },
        { id: 'cobertura', label: 'Cobertura de Seguros' },
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
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo */}
          <div className="logo">
            <h2 className="text-2xl font-bold text-primary">YEGO</h2>
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
                  <ul className="absolute top-full left-0 mt-2 w-48 bg-bg-white rounded-lg shadow-custom-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.id}>
                        <button
                          onClick={() => scrollToSection(subItem.id)}
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

