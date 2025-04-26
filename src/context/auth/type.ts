export interface AuthContextType {
    isAuthenticated: boolean;
    user: {email: string, role: string} | null
    setUser: (user: {email: string, role: string} | null) => void;
    loading: boolean;
}
