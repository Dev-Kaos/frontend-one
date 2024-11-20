import axios from "axios";
import { IRoleCreate, IRoleEdit } from "../../shared/types/roleTypes";

const BASE_URL = "http://localhost:8080"; // Use environment variables for production-ready URL

const RolesAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRoles = async () => {
  const response = await RolesAPI.get("/api/roles/all");

  return response.data;
};

export const createRoles = async (role: IRoleCreate) => {
  const response = await RolesAPI.post("/api/roles/create", role);

  return response.data;
};

export const updateRoles = async (role: IRoleEdit) => {
  
  const response = await RolesAPI.put(
    `/api/roles/update/${role.id}`,
    role
  );

  return response.data;
};

export const deleteRoles = async (id: number) => {
  const response = await RolesAPI.delete(`/api/roles/delete/${id}`);
  return response.data;
};

export default RolesAPI; // Optional for global usage
