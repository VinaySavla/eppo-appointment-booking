import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "http://192.168.0.160:3000/data",
})

