
import axios from "axios";

const api = axios.create({
  baseURL: "https://level-food-backend.onrender.com/docs",
  timeout: 10000,
});

export default api;
