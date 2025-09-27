import { useAppStore } from '../store/useAppStore';
import { User } from '../types';

export const useAuth = () => {
  const { auth, login, logout, setLoading, updateUser } = useAppStore();

  const signIn = async (email: string, _password: string): Promise<boolean> => {
    setLoading(true);
    
    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const mockUser: User = {
        id: '1',
        name: 'Usuario Demo',
        email: email,
        role: 'driver',
        isPremium: true,
        nivel: 'oro',
        viajesMensuales: 450,
      };
      
      const mockToken = 'mock-jwt-token';
      
      login(mockUser, mockToken);
      return true;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (userData: {
    name: string;
    email: string;
    phone: string;
    license: string;
    city: string;
    service: string;
  }): Promise<boolean> => {
    setLoading(true);
    
    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        role: 'driver',
        isPremium: false,
        nivel: null,
        viajesMensuales: 0,
      };
      
      const mockToken = 'mock-jwt-token';
      
      login(newUser, mockToken);
      return true;
    } catch (error) {
      console.error('Error al registrarse:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    logout();
  };

  const updateUserProfile = async (userData: Partial<User>): Promise<boolean> => {
    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      updateUser(userData);
      return true;
    } catch (error) {
      console.error('Error al actualizar perfil:', error);
      return false;
    }
  };

  return {
    user: auth.user,
    token: auth.token,
    isAuthenticated: auth.isAuthenticated,
    isLoading: auth.isLoading,
    signIn,
    signUp,
    signOut,
    updateUserProfile,
  };
};

