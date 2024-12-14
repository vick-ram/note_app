import { router } from 'expo-router';
import React, { createContext, ReactNode, useContext, useState } from 'react';

type AuthContextType = {
    isAuthenticated: boolean;
    signin: (email: string, password: string) => void;
    signup: (firstName: string, lastName: string, email: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    const login = () => {
        try {
            setAuthenticated(true);
            router.replace('/home');
        } catch (error) {
            console.error(error);
        }
    };
    const logout = () => setAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, signin: login, signup: () => {}, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be within an AuthProvider");
    return context;
}