"use client";

import { ROUTES } from "@/utility/constant";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(ROUTES.DASHBOARD);
  }, [router]);
  return <React.Fragment></React.Fragment>;
};

export default HomePage;

