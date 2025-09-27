import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState, User, AuthState } from '../types';

interface AppStore extends AppState {
  // Theme actions
  setPrimaryColor: (color: 'red' | 'blue' | 'green' | 'purple' | 'orange') => void;
  setSelectedIcon: (icon: string) => void;
  
  // Navigation actions
  toggleMenu: () => void;
  setActiveSection: (section: string) => void;
  closeMenu: () => void;
  
  // Auth actions
  login: (user: User, token: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  updateUser: (user: Partial<User>) => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      // Initial state
      theme: {
        primaryColor: 'red',
        selectedIcon: 'fa-car',
      },
      navigation: {
        isMenuOpen: false,
        activeSection: 'inicio',
      },
      auth: {
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      },

      // Theme actions
      setPrimaryColor: (color) =>
        set((state) => ({
          theme: { ...state.theme, primaryColor: color },
        })),

      setSelectedIcon: (icon) =>
        set((state) => ({
          theme: { ...state.theme, selectedIcon: icon },
        })),

      // Navigation actions
      toggleMenu: () =>
        set((state) => ({
          navigation: {
            ...state.navigation,
            isMenuOpen: !state.navigation.isMenuOpen,
          },
        })),

      setActiveSection: (section) =>
        set((state) => ({
          navigation: {
            ...state.navigation,
            activeSection: section,
          },
        })),

      closeMenu: () =>
        set((state) => ({
          navigation: {
            ...state.navigation,
            isMenuOpen: false,
          },
        })),

      // Auth actions
      login: (user, token) =>
        set((state) => ({
          auth: {
            ...state.auth,
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
          },
        })),

      logout: () =>
        set((state) => ({
          auth: {
            ...state.auth,
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
          },
        })),

      setLoading: (loading) =>
        set((state) => ({
          auth: {
            ...state.auth,
            isLoading: loading,
          },
        })),

      updateUser: (userData) =>
        set((state) => ({
          auth: {
            ...state.auth,
            user: state.auth.user ? { ...state.auth.user, ...userData } : null,
          },
        })),
    }),
    {
      name: 'yego-app-storage',
      partialize: (state) => ({
        theme: state.theme,
        auth: {
          user: state.auth.user,
          token: state.auth.token,
          isAuthenticated: state.auth.isAuthenticated,
        },
      }),
    }
  )
);

