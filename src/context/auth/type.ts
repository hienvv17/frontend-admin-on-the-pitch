export interface AuthContextType {
    isAuthenticated: boolean;
    user: {email: string, role: string};
    setUser: (user: {email: string, role: string}) => void;
    loading: boolean;
}
