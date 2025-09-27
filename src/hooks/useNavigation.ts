import { useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';

export const useNavigation = () => {
  const { navigation, toggleMenu, setActiveSection, closeMenu } = useAppStore();

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 70; // Height of fixed header
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      
      setActiveSection(sectionId);
      closeMenu();
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'yego-premium', 'planes-financiamiento', 'nosotros', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && navigation.isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [navigation.isMenuOpen, closeMenu]);

  return {
    isMenuOpen: navigation.isMenuOpen,
    activeSection: navigation.activeSection,
    toggleMenu,
    scrollToSection,
    closeMenu,
  };
};

