import { create } from 'zustand';

const useAuthStore = create(set => ({
  isAuthenticated: JSON.parse(localStorage.getItem('user')) ? true : false,
  user: JSON.parse(localStorage.getItem('user')) || null,
  login: user => {
    set({ isAuthenticated: true, user });
    localStorage.setItem('user', JSON.stringify(user));
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
    localStorage.removeItem('user');
  },
}));

export default useAuthStore;
