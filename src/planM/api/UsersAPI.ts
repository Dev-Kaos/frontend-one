import axios from "axios";
import { IUserCreate, IUserEdit } from "../../shared/types/userTypes";


const BASE_URL = "http://localhost:8080"; // Use environment variables for production-ready URL

const UsersAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUsers = async () => {
  const response = await UsersAPI.get("/api/rusers/all");

  return response.data;
};

export const createUsers = async (user: IUserCreate) => {
  const response = await UsersAPI.post("/api/rusers/create", user);

  return response.data;
};

export const updateUsers = async (user: IUserEdit) => {
  
  const response = await UsersAPI.put(
    `/api/rusers/update/${user.id}`,
    user
  );

  return response.data;
};

export const deleteUsers = async (id: number) => {
  const response = await UsersAPI.delete(`/api/rusers/delete/${id}`);
  return response.data;
};

export default UsersAPI; // Optional for global usage
