import axios from "axios";
import { ICourse } from "../../types/coursesTypes";

const BASE_URL = 'http://localhost:8080'; // Considera usar variables de entorno para una solución más robusta

const coursesAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Agrega otros encabezados por defecto aquí (ej., Authorization)
  },
});

// Mejora el manejo de errores con un interceptor centralizado
coursesAPI.interceptors.response.use((response) => response, (error) => {
  console.error('Error en la solicitud API:', error); // Registra el error para depuración
  // Opcionalmente, maneja códigos de error específicos o redirige a una página de error
  return Promise.reject(error);
});

export const getCourses = async () => {
  const response = await coursesAPI.get('/api/course/all');
  return response.data;
};


// ... (resto de las funciones, traducidas de manera similar)

export const createCourse = async (course: ICourse) => {
  const response = await coursesAPI.post('/api/course/create', course);
  return response.data;
};

export const deleteCourse = async (id: number) => {
  const response = await coursesAPI.delete(`/api/course/delete/${id}`);
  return response.data;
};

export default coursesAPI; // Exporta la instancia para posible uso global (opcional)