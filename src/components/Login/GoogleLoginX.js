import React, { useContext } from "react";
import { useHttpClient } from "../hooks/http-hook";
import { LoginContext } from "../store/login-context";
import { useGoogleLogin } from "@react-oauth/google";

export default function GoogleLoginX() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(LoginContext);

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
        console.log(code)
      const tokens = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/google",
        "POST",
        JSON.stringify({
          code,
        }),
        {
          "Content-Type": "application/json",
          //  mode:"no-cors"
        }
      );
      auth.login(tokens.user.id, tokens.token);
      console.log(tokens);
    },
    flow: "auth-code",
  });


  return (
    
      <button onClick={googleLogin}> Login GOOGLE</button>
  );
}
