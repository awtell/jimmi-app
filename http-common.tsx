import axios, { AxiosInstance } from "axios";
const token = localStorage.getItem("token");

const instance: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Authorization": 'Bearer ' + token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default instance;