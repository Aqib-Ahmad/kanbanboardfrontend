import axios from "axios";
// const BASE_URL = "https://todo-olbc.onrender.com/api";
const BASE_URL = "https://kanbanboardbackend.vercel.app/api";
export const request = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
