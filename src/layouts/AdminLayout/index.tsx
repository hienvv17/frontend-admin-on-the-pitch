"use client";
import Box from "@mui/material/Box";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import { FC, ReactNode, useMemo } from "react";
import Sidebar from "./Sidebar";
import { ROUTES } from "@/utility/constant";

interface AdminLayoutProps {
    children?: ReactNode;
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
    const currentPath = usePathname();
    const showSidebar = useMemo(() => {
        return [ROUTES.HOME].some((path) => currentPath.includes(path));
    }, [currentPath]);
    return (
        <Box
            sx={{
                backgroundColor: "primary.main",
                display: "flex",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            {showSidebar && (
                <Box
                    sx={{
                        minWidth: "15rem",
                        height: "100%",
                        overflow: "hidden",
                        position: "relative",
                        display: "inline-block",
                    }}
                >
                    <Sidebar />
                </Box>
            )}
            <Box
                sx={{
                    backgroundColor: "background.default",
                    pt: 9.75,
                    px: "2.25rem",
                    width: "100%",
                    flex: 1,
                    overflowY: "scroll",
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

AdminLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

export default AdminLayout;
