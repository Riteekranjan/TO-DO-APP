import axios from "axios";
export const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
});

export const getTasks = () => API.get("/tasks");
export const addTask = (title) => API.post("/tasks", { title });
export const deleteTask = (id) => API.delete(`/tasks/${id}`);