import axios from "axios";
import { ICourseCreate, ICourseEdit } from "../../types/coursesTypes";


const BASE_URL = 'http://localhost:8080'; // Use environment variables for production-ready URL

const CoursesAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    //Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6W10sInN1YiI6Imthb3NBZG1pbiIsImlhdCI6MTcyNjg2MDE1MSwiZXhwIjoxNzI2ODYxNTkxfQ.DNrmVs4jua0H0DO_tc2dT3G0O-LlpuzD6D-r8iL6pJY`,
  },
  withCredentials: true, // Include credentials (cookies, etc.) in requests
});

// Centralized error handling interceptor
CoursesAPI.interceptors.response.use(
  (response) => response, // Pass through successful responses
  (error) => {
    console.error('Error in API request:', error);
    // Handle specific error codes, return appropriate responses to components
    // Consider using a dedicated error handling library for more robust error management
    return Promise.reject(error);
  }
);

// Add authorization token interceptor
CoursesAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})


export const getCourses = async () => {
  const response = await CoursesAPI.get('/api/course/all');
  return response.data;
};

export const createCourse = async (course: ICourseCreate) => {
  const response = await CoursesAPI.post('/api/course/create', course);
  return response.data;
};

export const updateCourse = async (course: ICourseEdit) => {
  const response = await CoursesAPI.put(`/api/course/update/${course.id}`, course);
  return response.data;
};

export const deleteCourse = async (id: number) => {
  const response = await CoursesAPI.delete(`/api/course/delete/${id}`);
  return response.data;
};

export default CoursesAPI; // Optional for global usage