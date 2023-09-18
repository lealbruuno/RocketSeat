import axios from "axios";

export const api = axios.create({
  baseURL: "https://stage11-deploy-stage10-rocketmovies-api.onrender.com",
});
