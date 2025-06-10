import { create } from 'zustand';
import Cookies from 'js-cookie';

export const useAuthStore = create((set) => ({
  isAuthorized: false,
  user: null,
  login: (token, user) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('access_token', token);
      Cookies.set('access_token', token, { path: '/' });
    }
    set({ isAuthorized: true, user });
  },
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      Cookies.remove('access_token', { path: '/' });
    }
    set({ isAuthorized: false, user: null });
  },
  checkAuth: () => {
    const token = typeof window !== 'undefined' && localStorage.getItem('access_token');
    set({ isAuthorized: !!token });
  },
  setUser: (user) => {
    set({ user });
  }
})); 