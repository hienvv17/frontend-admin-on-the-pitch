import { createContext } from "react";
import { AuthContextType } from "./type";

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    user: { email: "", role: "" }, 
    setUser: () => {},
    loading: true,
});