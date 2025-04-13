"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ACCESS_TOKEN } from "@/utility/constant";

interface AuthContextProps {
  isLoggedIn: boolean;
  userInfo: UserInfo | null;
  setLoggedIn: (status: boolean) => void;
  setUserInfo: (userInfo: UserInfo | null) => void;
}

interface UserInfo {
  uid: string;
  fullName: string | null;
  email: string | null;
  customClaims: Record<string, string | boolean> | null;
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  userInfo: null,
  setLoggedIn: () => {},
  setUserInfo: () => {},
});

// to do, checki if ther is
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for cookie on mount
    const token = Cookies.get(ACCESS_TOKEN);
    setIsLoggedIn(!!token);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn: setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

