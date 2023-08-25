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
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { ReactComponent as ReactLogo } from "../../icons/btn_google_light_normal_ios.svg";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import styles from "./Login.module.css";
export default function Login() {
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
    true
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
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/login",
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
        console.log(resData)
        auth.login(resData.user.id,resData.user.name, resData.token);
      } catch (err) {}
    } else {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/signup",
          "POST",
          JSON.stringify({
            name: formState.inputs.u_name.value,
            email: formState.inputs.email.value,
            remember: checked,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(resData.user, resData.token);
      } catch (err) {}
    }
  };
  const errorHandler = () => {
    clearError(null);
  };
  const handleChange = () => {
    setChecked(!checked);
  };
  const responseFacebook = async (response) => {
    try {
      const resData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/facebook",
        "POST",
        JSON.stringify({
          name: response.name,
          email: response.email,
          password: response.userID,
          graphDomain: response.graphDomain,
          remember: true,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      auth.login(resData.user.id, resData.token);
    } catch (err) {}
  };
  const googleResponce = async (response) => {
    try {
      const resData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/google",
        "POST",
        JSON.stringify({
          googleToken: response.tokenId,
          password: response.googleId,
          remember: true,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      auth.login(resData.user.id, resData.token);
    } catch (err) {}
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
            errorText="*Username must be at least five(5) characters"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
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
          <label className={styles.rememberMe__style}>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
            ></input>
            Remember me
          </label>
          <Button type="submit" disabled={!formState.isValid}>
            {isLogin ? "LOGIN" : "SIGNUP"}
          </Button>
        </form>
        <div>
          <FacebookLogin
            appId="1099793780705999"
            render={(renderProps) => (
              <button
                className={`button__style ${styles.facebook__style} `}
                onClick={renderProps.onClick}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/64px-Facebook_f_logo_%282019%29.svg.png"></img>
                <span>{`${isLogin ? `LOGIN` : `SIGNUP`} WITH FACEBOOK`}</span>
              </button>
            )}
            size="small"
            callback={responseFacebook}
            fields="name,email"
          />
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <button
                className={`button__style ${styles.google__style} `}
                onClick={renderProps.onClick}
              >
                <ReactLogo />{" "}
                <span>{`${isLogin ? `LOGIN` : `SIGNUP`} WITH GOOGLE`}</span>
              </button>
            )}
            onSuccess={googleResponce}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <Button inverse onClick={switchMode}>
          {" "}
          SWITCH TO {isLogin ? "SIGNUP" : "LOGIN"}
        </Button>
      </NewsBox>
    </React.Fragment>
  );
}
//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
