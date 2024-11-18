import axios from "axios";
import { IModuleCreate, IModuleEdit } from "../../shared/types/moduleTypes";
// import { ICourseCreate, ICourseEdit } from "../../shared/types/coursesTypes";


const BASE_URL = 'http://localhost:8080'; // Use environment variables for production-ready URL

const ModulesAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    //Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6W10sInN1YiI6Imthb3NBZG1pbiIsImlhdCI6MTcyNjg2MDE1MSwiZXhwIjoxNzI2ODYxNTkxfQ.DNrmVs4jua0H0DO_tc2dT3G0O-LlpuzD6D-r8iL6pJY`,
  },
  // withCredentials: true, // Include credentials (cookies, etc.) in requests
});

// Centralized error handling interceptor
// CoursesAPI.interceptors.response.use(
//   (response) => response, // Pass through successful responses
//   (error) => {
//     console.error('Error in API request:', error);
//     // Handle specific error codes, return appropriate responses to components
//     // Consider using a dedicated error handling library for more robust error management
//     return Promise.reject(error);
//   }
// );

// Add authorization token interceptor
// CoursesAPI.interceptors.request.use((config) => {
//   const token = localStorage.getItem('authToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// })


export const getModules = async () => {
  const response = await ModulesAPI.get('/api/modules/all');


  // const { data } = response.data;
  // console.log(data)
return response.data;
};

 export const createModules = async (module: IModuleCreate) => {
   const response = await ModulesAPI.post('/api/modules/create', module);
   return response.data;
 };

export const updateModules = async (module: IModuleEdit) => {
  const response = await ModulesAPI.put(`/api/modules/update/${module.id}`, module);
  return response.data;
};

export const deleteModules = async (id: number) => {
  const response = await ModulesAPI.delete(`/api/modules/delete/${id}`);
  return response.data;
};

export default ModulesAPI; // Optional for global usage