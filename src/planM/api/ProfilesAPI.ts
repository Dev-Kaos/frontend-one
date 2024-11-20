import axios from "axios";
import { IProfileCreate, IProfileEdit } from "../../shared/types/profileTypes";


const BASE_URL = "http://localhost:8080"; // Use environment variables for production-ready URL

const ProfilesAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProfiles = async () => {
  const response = await ProfilesAPI.get("/api/Profiles/all");

  return response.data;
};

export const createProfiles = async (profile: IProfileCreate) => {
  const response = await ProfilesAPI.post("/api/Profiles/create", profile);

  return response.data;
};

export const updateProfiles = async (profile: IProfileEdit) => {
  
  const response = await ProfilesAPI.put(
    `/api/Profiles/update/${profile.id}`,
    profile
  );

  return response.data;
};

export const deleteProfiles = async (id: number) => {
  const response = await ProfilesAPI.delete(`/api/Profiles/delete/${id}`);
  return response.data;
};

export default ProfilesAPI; // Optional for global usage
