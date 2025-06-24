import { create } from 'zustand';
import Cookies from 'js-cookie';
import { authFetch } from '@/utils';

export const useAuthStore = create((set, get) => ({
  isAuthorized: false,
  user: {},
  login: (token) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('access_token', token);
      Cookies.set('access_token', token, { path: '/' });
    }
    set({ isAuthorized: true });
  },
  fetchUser: async () => {
    if(!get().isAuthorized) return;
    if(Object.keys(get().user).length > 0) return;
    try {
      const res = await authFetch(`/api/user/info`);
      if(res.ok) {
        const data = await res.json();
        set({ user: data.data });
        console.log('fetchUser', data);
      }
      else {
        console.error('유저 조회 실패:', res.status, res.statusText);
      }
    } catch (error) {
      console.error('네트워크 에러:', error);
      set({ user: null });
    }
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