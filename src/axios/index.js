import axios from "axios";
const URL = "https://wild-blue-seal-toga.cyclic.app";
// const localhost = "http://localhost:8080";
export const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 1000,
});
