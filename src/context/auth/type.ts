export interface AuthContextType {
    isAuthenticated: boolean;
    user: null
    setUser: (user: {email: string, role: string} | null) => void;
    loading: boolean;
}
