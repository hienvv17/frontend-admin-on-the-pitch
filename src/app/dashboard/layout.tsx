import AdminLayout from "@/layouts/AdminLayout";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return <AdminLayout>{children}</AdminLayout>;
};

export default DashboardLayout;
