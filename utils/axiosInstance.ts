import axios from "axios";

const api = axios.create({
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    // baseURL: "http://localhost:4000/",
    baseURL: "https://next-jb-api.vercel.app/"
});

export default api;
