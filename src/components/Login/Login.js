import React, { useState, useContext } from "react";
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
import styles from "./Login.module.css"
export default function Login() {
  const auth = useContext(LoginContext);
  const [isLogin, setIsLogin] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      u_name: {
        value: "",
        isValid: false,
      },
      password: { value: "", isValid: false },
    },
    true
  );

  const switchMode = () => {
    if (!isLogin) {
      setFormData(
        {
          ...formState.inputs,
          email: undefined,
        },
        formState.inputs.u_name.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData({
        ...formState.inputs,
        email: {
          value: "",
          isValid: false,
        },
      });
    }
    setIsLogin((prevMode) => !prevMode);
  };
  const authSubmitHandler = async (event) => {
    event.preventDefault();
    if (isLogin) {
      try {
      const resData =  await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/login",
          "POST",
          JSON.stringify({
            name: formState.inputs.u_name.value,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(resData.user.id,resData.token);
      } catch (err) {}
    } else {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/signup",
          "POST",
          JSON.stringify({
            name: formState.inputs.u_name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        console.log(resData.user)
        auth.login(resData.user._id,resData.token);
      } catch (err) {}
    }
  };
  const errorHandler = () => {
    clearError(null);
  };
  return (
    <React.Fragment>
      {error && (
        <ModalError
          header="An Error Occurred"
          error={error}
          onClick={errorHandler}
        ></ModalError>
      )}
      <NewsBox className={styles.login_box__style}>
        {isLoading && <LoadingSpinner asOverlay />}
        <h2 className={styles.text__style}>Login Required</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          <Input
            element="input"
            id="u_name"
            type="text"
            label="Username:"
            errorText="*Username must be at least five(5) characters"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
            onInput={inputHandler}
          ></Input>
          {!isLogin && (
            <Input
              element="input"
              id="email"
              type="email"
              label="E-Mail:"
              validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            ></Input>
          )}
          <Input
            element="input"
            id="password"
            type="password"
            label="Password:"
            errorText="*Password must be at least five(5) characters"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
            onInput={inputHandler}
          ></Input>
          <Button type="submit" disabled={!formState.isValid}>
            {isLogin ? "LOGIN" : "SIGNUP"}
          </Button>
        </form>
        <Button inverse onClick={switchMode}>
          {" "}
          SWITCH TO {isLogin ? "SIGNUP" : "LOGIN"}
        </Button>
      </NewsBox>
    </React.Fragment>
  );
}
