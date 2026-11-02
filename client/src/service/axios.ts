import axios from "axios";

export const publicRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Örn: https://fiverr-fullstack-project.onrender.com/api
  withCredentials: true,
});
