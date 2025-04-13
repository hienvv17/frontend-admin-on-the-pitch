"use client";
import GoogleLogin from "@/components/firebase/popup-login";
import { useContext, useState } from "react";
import { AppContext } from "@/context/app";
import { ToastEnum } from "@/enums/status";
import { useAuthApi } from "@/api/auth/auth";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { ACCESS_TOKEN, ROUTES } from "@/utility/constant";
import { AuthContext } from "@/context/auth";

export default function LoginPage() {
  const { POST_LOGIN } = useAuthApi();
  const { notify } = useContext(AppContext);
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogin = async () => {
    setLoading(true);
    try {
      const data = await GoogleLogin();
      const idToken = await data?.user.getIdToken();
      if (!idToken) {
        throw new Error("Google login failed");
      }
      const response = await POST_LOGIN(idToken);
      if (response.error) {
        notify(ToastEnum.ERROR, "You are not authorized to access this page");
        return;
      }
      Cookies.set(ACCESS_TOKEN, idToken);
      setUser({ email: response.staff.email, role: response.staff.role });
      router.push(ROUTES.DASHBOARD);
    } catch (error) {
      console.error("Login failed", Response.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h4" fontWeight="bold" marginBottom={4}>
        On The Pitch Admin Page
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Google />}
        onClick={handleLogin}
        disabled={loading}
        sx={{ padding: "10px 20px", fontSize: "16px" }}
      >
        {loading && <CircularProgress size={24} color="inherit" />}
        Sign in with Google
      </Button>
    </Box>
  );
}

