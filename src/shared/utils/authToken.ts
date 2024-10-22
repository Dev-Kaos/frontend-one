// utils/authToken.js
// Si estás usando Zustand

import { useAuthStore } from "../store/authStore";

export const getAuthToken = () => {
  // Si estás usando Zustand:
  const token = useAuthStore((state) => state.token);
  return token

  // Si estás usando otro método para almacenar el token:
  // return localStorage.getItem('token');
};