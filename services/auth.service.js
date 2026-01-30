export const getAuthUser = async () => { 
    const { data } = await api.get('/auth-user'); 
    return data.user
}