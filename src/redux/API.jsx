import axios from "axios";
export const API=axios.create({
    baseURL:'http://localhost/e-api/',
    timeout:3600,
    headers: {
        "Accept": "*/*",
        "Content-Type": "application/json"
    },   
})