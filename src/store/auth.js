import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isAuthorized: false,
  user: null,
  login: (token, user) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('access_token', token);
    }
    set({ isAuthorized: true, user });
  },
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
    }
    set({ isAuthorized: false, user: null });
  },
  checkAuth: () => {
    const token = typeof window !== 'undefined' && localStorage.getItem('access_token');
    set({ isAuthorized: !!token });
  }
})); 