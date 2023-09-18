import axios from "axios";

export const api = axios.create({
  baseURL: "https://stage11-deploy-stage8-backend.onrender.com",
});
