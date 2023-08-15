import React, { useContext } from "react";
import { useHttpClient } from "../hooks/http-hook";
import { LoginContext } from "../store/login-context";
import { useGoogleLogin } from "@react-oauth/google";
import { SvgComponent } from "../Navigation/Navigation";
import GoogleSvg from "../../icons/google.svg";
import styles from "./Login.module.css";

export default function GoogleLoginX(props) {
  const { sendRequest } = useHttpClient();
  const auth = useContext(LoginContext);

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      const tokens = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/google",
        "POST",
        JSON.stringify({
          code,
          remember: true,
        }),
        {
          "Content-Type": "application/json",
          //  mode:"no-cors"
        }
      );
      auth.login(tokens.user.id, tokens.token);
      auth.googleAuth(
        tokens.google_auth.expiry_date,
        tokens.google_auth.refresh_token,
        true
      );
    },
    flow: "auth-code",
  });

  return (
    <button
      className={`button__style ${styles.google__style} `}
      onClick={googleLogin}
    >
      {" "}
      <SvgComponent
        Image={GoogleSvg}
        height="45"
        color="red"
        width="50"
      ></SvgComponent>
      <span>{`${props.buttonText} WITH GOOGLE`}</span>
    </button>
  );
}
