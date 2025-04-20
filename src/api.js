import axios from "axios";


const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL, // replace with your NGINX reverse proxy
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
});

// const api = axios.create({
//     baseURL: "http://localhost:8001/api", // directly
//     withCredentials: true,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

export default api;
