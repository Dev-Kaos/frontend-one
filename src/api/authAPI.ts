import axios from "axios";

import { ILoginRequestData } from "../types/authTypes";


const BASE_URL = 'http://localhost:8080'; // Considera usar variables de entorno para una solución más robusta

const authAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Agrega otros encabezados por defecto aquí (ej., Authorization)
    
},

// withCredentials: true
});

// Agrega el token de encabezado de autenticación
// authAPI.interceptors.request.use((config) => {
//    const token = useAuthStore((state) => state.token);
//   if (token===null) return config
//   config.headers.Authorization = `Bearer ${token}`
//   return config
// })

// Mejora el manejo de errores con un interceptor centralizado
// authAPI.interceptors.response.use((response) => response, (error) => {
//   console.error('Error en la solicitud API:', error); // Registra el error para depuración
//   // Opcionalmente, maneja códigos de error específicos o redirige a una página de error
//   return Promise.reject(error);
// });


export const loginRequest = async (loginData: ILoginRequestData) => {
  const response = await authAPI.post('/auth/login', loginData);
  return response.data;
};

// export const profileRequest = async () => {
//   const response = await authAPI.get('/auth/profile');
//   return response.data;
// }
export default authAPI; // Exporta la instancia para posible uso global (opcional)