import axios from "axios";
import { baseUrl } from "../config/config";

export const userApi = axios.create({
  baseURL:baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
