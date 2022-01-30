import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.VITE_APP_URL_CREATIVIEW,
    withCredentials: !import.meta.env.PROD
});