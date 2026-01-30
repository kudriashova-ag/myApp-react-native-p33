import { createContext, useContext } from "react";
import { getAuthUser } from "../services/auth.service";
import { useQuery } from "@tanstack/react-query";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => { 

    const fetchUser = async () => { 
        const token = await AsyncStorage.getItem('token');
        if (!token) return null;
        return getAuthUser;
    }

    const { data: user, isLoading } = useQuery({
        queryKey: ['auth-user'],
        queryFn: fetchUser,
        retry: 5
    })

    return (
        <AuthContext.Provider value={{user, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);