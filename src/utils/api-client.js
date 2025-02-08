import axios from "axios";
import Cookies from "js-cookie";
import {
    SERVER_URL
} from "../../constants";

//single axios instance for the whole app
const API = axios.create({
    baseURL: SERVER_URL[
        import.meta.env.VITE_ENVIRONMENT],
    timeout: 12000,
    withCredentials: true
});

//intercept response to check if user is authenticated
API.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            Cookies.remove("connect.sid");
            window.location.replace("/auth/login");
        }
        return Promise.reject(error);
    }
);

export default API;
