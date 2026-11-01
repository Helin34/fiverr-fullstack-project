import axios from "axios";
import config from "../utils/config";

const api = axios.create({
  baseURL: config.API_URL,
  withCredentials: true,
});
export default api;
