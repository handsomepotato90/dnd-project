import React, { useState, useContext, useEffect } from "react";
import { useForm } from "../hooks/form-hook";
import NewsBox from "../UI/NewsBox";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../util/validators";
import Input from "../form-elements/Input";
import Button from "../form-elements/Button";
import { LoginContext } from "../store/login-context";
import LoadingSpinner from "../UI/LoadingSpinner";
import ModalError from "../UI/ModalError";
import { useHttpClient } from "../hooks/http-hook";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginX from "./GoogleLoginX";
import { gapi } from "gapi-script";

import styles from "./Login.module.css";

const Login: React.FC = () => {
  const auth = useContext(LoginContext);
  const [isLogin, setIsLogin] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [checked, setChecked] = useState(false);
  const [formState, inputHandler, setFormData] = useForm(
    {
      u_name: {
        value: "",
        isValid: false,
      },
      password: { value: "", isValid: false },
    },
    false
  );

  const clientId =
    "935993487799-3sfsjrrfjh8qol2fe65pjjt3ik0tcpqn.apps.googleusercontent.com";

    useEffect(() => {
      const initClient = () => {
        gapi.auth2.init({
          clientId: clientId,
          scope: "",
        });
      };
      gapi.load("client:auth2", initClient);
    });

  const switchMode = () => {
    if (!isLogin) {
      setFormData(
        {
          ...formState.inputs,
          email: {
            value: "",
            isValid: false,
          },
        },
        false // Set formValidity to false when switching modes
      );
    } else {
      setFormData({
        ...formState.inputs,
        email: {
          value: "",
          isValid: false,
        },
      }, 
      false
      );
    }
    setIsLogin((prevMode) => !prevMode);
  };

  const authSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isLogin) {
      try {
        const resData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/login`,
          "POST",
          JSON.stringify({
            name: formState.inputs.u_name.value,
            password: formState.inputs.password.value,
            remember: checked,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(resData.user.id, resData.user.name, resData.token);
      } catch (err) {}
    } else {
      try {
        const resData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/signup`,
          "POST",
          JSON.stringify({
            name: formState.inputs.u_name.value,
            email: formState.inputs.email?.value,
            remember: checked,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(resData.user.id, resData.user.name, resData.token);
      } catch (err) {}
    }
  };

  const errorHandler = () => {
    clearError();
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <React.Fragment>
      {error && (
        <ModalError
          header="An Error Occurred"
          error={error}
          onClick={errorHandler}
        />
      )}
      <NewsBox className={`login_black__background ${styles.login_box__style}`}>
        {isLoading && <LoadingSpinner asOverlay />}
        <h2 className={styles.text__style}>Login Required</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          <Input
            element="input"
            id="u_name"
            type="text"
            label="Username:"
            errorText="*Username must be at least three (3) characters"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
            onInput={inputHandler}
          />
          {!isLogin && (
            <Input
              element="input"
              id="email"
              type="email"
              label="E-Mail:"
              errorText="Please enter a valid email address."
              validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
          )}
          <Input
            element="input"
            id="password"
            type="password"
            label="Password:"
            errorText="*Password must be at least six (6) characters"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
            onInput={inputHandler}
          />
          <label className={styles.rememberMe__style}>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
            />
            Remember me
          </label>
          <Button type="submit" disabled={!formState.isValid}>
            {isLogin ? "LOGIN" : "SIGNUP"}
          </Button>
        </form>
        <div>
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLoginX buttonText={isLogin ? "LOGIN" : "SIGNUP"} />
          </GoogleOAuthProvider>
        </div>
        <Button inverse onClick={switchMode}>
          SWITCH TO {isLogin ? "SIGNUP" : "LOGIN"}
        </Button>
      </NewsBox>
    </React.Fragment>
  );
};

export default Login;
