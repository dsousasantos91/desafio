import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Content-Type': "application/x-www-form-urlencoded",
        'Authorization': "Basic cmVhY3Q6cjNAYzc="
    }
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
