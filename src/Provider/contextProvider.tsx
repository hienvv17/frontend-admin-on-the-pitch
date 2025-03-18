"use client";

import { ToastContainer } from "react-toastify";

import { ProtectRoute } from "@/components/ProtectRoute";
import { useCallback } from "react";
import ToastMessage from "@/components/ToastMessage";
import { AppContext } from "@/context/app";
import { ToastType } from "@/types/common";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const notify = useCallback((type: ToastType, message: string) => {
        ToastMessage({ type, message });
    }, []);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                limit={3}
            />
            <AppContext.Provider
                value={{
                    notify,
                }}
            >
                <ProtectRoute>{children}</ProtectRoute>
            </AppContext.Provider>
        </>
    );
};

export default ContextProvider;
