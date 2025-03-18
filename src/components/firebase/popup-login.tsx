import { auth, googleProvider } from "@/firebase/firebase";
import { ACCESS_TOKEN } from "@/utility/constant";
import { signInWithPopup } from "firebase/auth";

import Cookies from "js-cookie";

function GoogleLogin() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const token = await user.getIdToken();
      if (!token) {
        throw new Error("Google login failed");
      }
      const expriresIn = new Date(new Date().getTime() + 5 * 60 * 1000);
      Cookies.set(ACCESS_TOKEN, token, { expires: expriresIn }); // token expires in 1 minute
      return { user, token };
      // You can now send the user information to your backend to create or authenticate the user
    } catch (error) {
      console.error("Error during Google login", error);
    }
  };
  return handleGoogleLogin();
}

export default GoogleLogin;

