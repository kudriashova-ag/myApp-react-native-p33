import { api } from "../api/axios";

export const getAuthUser = async () => {
    const { data } = await api.get('/auth-user');
    return data.user
}

export const loginRequest = async (values) => {
    try {
        const { data } = await api.post('/login', values);
        return data;
    }
    catch (error) {
        throw new Error(error.response.data.error.message);
    }
}

export const registerRequest = async (values) => {
    const { data } = await api.post('/register', values);
    return data;
}