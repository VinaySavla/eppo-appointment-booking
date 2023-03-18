import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "http://3.110.212.56:3001/data/",
})

