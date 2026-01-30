import { createContext, useContext } from "react";
import { getAuthUser, loginRequest, registerRequest } from "../services/auth.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => { 
    const queryClient = useQueryClient();

    const fetchUser = async () => { 
        const token = await AsyncStorage.getItem('token');
        if (!token) return null;
        return getAuthUser();
    }

    const { data: user, isLoading } = useQuery({
        queryKey: ['auth-user'],
        queryFn: fetchUser,
        retry: 5
    })

    const loginMutation = useMutation({
        mutationFn: loginRequest,
        onSuccess: async (data) => { 
            await AsyncStorage.setItem('token', data.token);
            queryClient.invalidateQueries({ queryKey: ['auth-user'] });
        }
    })

    const logout = async () => { 
        await AsyncStorage.removeItem('token');
        queryClient.setQueryData(['auth-user'], null);
    }

    const registerMutation = useMutation({
        mutationFn: registerRequest
    })


    return (
        <AuthContext.Provider value={{
            user,
            isLoading,
            isAuth: !!user,
            login: loginMutation.mutateAsync,
            logout,
            register: registerMutation.mutateAsync
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);