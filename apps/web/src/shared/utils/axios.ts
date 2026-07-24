import axios from "axios";
import { getAuthCookie } from "../../features/auth/utils/cookie";
import type { SignUpResponse } from "../../features/auth/api/SignUp";

const instanceApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
});

export const instantApiToken = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
});

instantApiToken.interceptors.request.use(
    (config) => {
        const data = getAuthCookie() as SignUpResponse;
        if (data) {
            config.headers.Authorization = `JWT ${data.token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default instanceApi;
