import axios from "axios";

export const api = axios.create({
    baseURL: 'http://10.10.112.167:4000/api',
});
