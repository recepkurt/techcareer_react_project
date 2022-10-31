import axios from 'axios';
import { BASE_API_URL } from "../config/apiConfig";

export const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
    timeout: 1000,
});