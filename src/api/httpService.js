// api/httpService.js
import axios from "axios";
import { API_BASE_URL } from "./config";

const http = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Token: `w^0V6jJamvLyaBy5VEYQ2x4gzwrx5BifP6wjB/hQDNmDFSJ2//4/4oze7iJuiFrd`,
    // Token: import.meta.env.VITE_TOKEN,
  },
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle error globally (like token expiration)
    return Promise.reject(error);
  }
);

export default http;
