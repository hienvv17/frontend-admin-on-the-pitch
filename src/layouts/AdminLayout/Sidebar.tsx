"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utility/constant";
import { AuthContext } from "@/context/auth";
import Cookies from "js-cookie";
import { ACCESS_TOKEN } from "@/utility/constant";

const sections = [
  {
    name: "Management",
    items: [
      {
        name: "Analytics",
        icon: "/icons/i-claim.svg",
        href: ROUTES.HOME,
      },
    ],
  },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { setUser } = useContext(AuthContext);

  const router = useRouter();

  const handleLogout = () => {
    router.push(ROUTES.LOGIN);
    Cookies.remove(ACCESS_TOKEN);
    setUser(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: "2.5rem 1.25rem",
        borderRight: "1px solid",
        borderColor: "gray.light",
        overflow: "auto",
        justifyContent: "space-between",
        backgroundColor: "primary.main",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ pb: "2rem" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQna5_-F-r0DtfbFWESvBFoGMA3YPN5lppl1vehOq2dagidsS4PHjZLZ_HKrDUZc8Xu1Xk&usqp=CAU"
            alt="Prudential icon"
            width={168}
            height={40}
          />
        </Box>
        <Box
          sx={{
            height: "4px",
            width: "100%",
            background: "#ED1B2E",
            mb: "2rem",
          }}
        ></Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {sections.map((section, index) => (
            <Box
              sx={{
                cursor: "pointer",
              }}
              key={index}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "text.secondary",
                  px: "0.75rem",
                  py: "0.25rem",
                }}
              >
                {section.name.toUpperCase()}
              </Typography>
              <Box
                sx={{
                  height: "1px",
                  backgroundColor: "gray.light",
                  width: "100%",
                  opacity: "0.4",
                  mb: "0.5rem",
                }}
              ></Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                {section.items.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                      p: "0.75rem",
                      borderRadius: "0.25rem",
                      backgroundColor:
                        item.href === pathname
                          ? "red.highlight"
                          : "transparent",
                    }}
                  >
                    <Image
                      src={item.href === pathname ? item.icon : item.icon}
                      alt={item.name}
                      width={24}
                      height={24}
                    />
                    <Box
                      sx={{
                        fontSize: "0.875rem",
                        fontWeight: item.href === pathname ? 700 : 500,
                        color:
                          item.href === pathname ? "red.main" : "text.dark",
                      }}
                    >
                      {item.name}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Button
        sx={{
          color: "primary.100",
          fontWeight: 700,
          borderRadius: "1.25rem",
          border: "2px solid",
          borderColor: "secondary.main",
        }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Sidebar;

