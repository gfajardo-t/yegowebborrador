import { useAppStore } from '../store/useAppStore';

export const useTheme = () => {
  const { theme, setPrimaryColor, setSelectedIcon } = useAppStore();

  const colorSchemes = {
    red: { primary: '#dc2626', primaryDark: '#b91c1c' },
    blue: { primary: '#2563eb', primaryDark: '#1d4ed8' },
    green: { primary: '#059669', primaryDark: '#047857' },
    purple: { primary: '#7c3aed', primaryDark: '#6d28d9' },
    orange: { primary: '#ea580c', primaryDark: '#c2410c' },
  };

  const changeColor = (color: 'red' | 'blue' | 'green' | 'purple' | 'orange') => {
    setPrimaryColor(color);
    
    // Actualizar variables CSS
    const scheme = colorSchemes[color];
    document.documentElement.style.setProperty('--primary-color', scheme.primary);
    document.documentElement.style.setProperty('--primary-dark', scheme.primaryDark);
  };

  const changeIcon = (icon: string) => {
    setSelectedIcon(icon);
  };

  return {
    primaryColor: theme.primaryColor,
    selectedIcon: theme.selectedIcon,
    changeColor,
    changeIcon,
    colorSchemes,
  };
};

