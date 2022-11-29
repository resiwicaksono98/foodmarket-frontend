import axios from "axios";
const BASE_URL = "http://localhost:3000/api";
const AUTH_URL = "http://localhost:3000/auth";

const instanceRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
export const authRequest = axios.create({
  baseURL: AUTH_URL,
  withCredentials: true,
});

instanceRequest.defaults.headers.common["Authorization"] = "Bearer " + "token";

export default instanceRequest;
