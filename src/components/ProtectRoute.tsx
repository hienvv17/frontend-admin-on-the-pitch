"use client";

import { AuthContext } from "@/context/auth";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ROUTES } from "@/utility/constant";
import { inWhitelist } from "@/utility/helper";
import Box from "@mui/material/Box";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import Cookies from "js-cookie";
import { ACCESS_TOKEN, USERNAME } from "@/utility/constant";

export const LoadingScreen = () => (
    <Box
        sx={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#FFFFFF80",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <HashLoader color="#464E5F" size={200} />
    </Box>
);

export const ProtectRoute = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [user, setUser] = useLocalStorage<{ email: string; role: string } | null>(USERNAME, null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function () {
            const token = Cookies.get(ACCESS_TOKEN);
            if (!token) {
                if (inWhitelist(pathname)) {
                    setLoading(false);
                    return;
                }

                const currentPath = window.location.pathname;

                router.push(`${ROUTES.LOGIN}?redirect=${currentPath}`);
            }

            setLoading(false);
        })();
    }, [pathname, router]);

    useEffect(() => {
        if (!user && !inWhitelist(pathname)) {
            router.push(ROUTES.LOGIN);
        }
    }, [pathname, router, user]);

    if (loading) {
        return <LoadingScreen />;
    }

    if (!user && !inWhitelist(pathname)) {
        const currentPath = window.location.pathname;

        router.push(`${ROUTES.LOGIN}?redirect=${currentPath}`);

        return null;
    }

    return (
        <AuthContext.Provider value={{ loading, setUser, user, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};
