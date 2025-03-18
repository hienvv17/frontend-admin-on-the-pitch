import { headers } from "next/headers";

import "../styles/globals.css";
import ThemeRegistry from "./ThemeRegistry";
import { Metadata } from "next";
import ContextProvider from "@/provider/contextProvider";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "On the Pitch",
    description: "",
  };
}
const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  const nonce = headers().get("x-nonce") ?? "";
  return (
    <html lang="en">
      <body>
        <ThemeRegistry nonce={nonce}>
          <ContextProvider>{children}</ContextProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
};

export default GlobalLayout;

