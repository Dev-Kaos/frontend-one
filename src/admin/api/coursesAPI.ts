import axios from "axios";
import { ICourse } from "../../types/coursesTypes";
import { useAuthStore } from "../../store/authStore";

const BASE_URL = 'http://localhost:8080'; // Use environment variables for production-ready URL

const CoursesAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6W10sInN1YiI6Imthb3NBZG1pbiIsImlhdCI6MTcyNjg1NzQ3NywiZXhwIjoxNzI2ODU4OTE3fQ.w37-TaGo-YoyhAhiHdHbwVSz1PGxSCCiwZ6VzaNnims`,
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



export const getCourses = async () => {
  const response = await CoursesAPI.get('/api/course/all');
  return response.data;
};

export const createCourse = async (course: ICourse) => {
  const response = await CoursesAPI.post('/api/course/create', course);
  return response.data;
};

export const updateCourse = async (course: ICourse) => {
  const response = await CoursesAPI.put(`/api/course/update/${course.id}`, course);
  return response.data;
};

export const deleteCourse = async (id: number) => {
  const response = await CoursesAPI.delete(`/api/course/delete/${id}`);
  return response.data;
};

export default CoursesAPI; // Optional for global usage