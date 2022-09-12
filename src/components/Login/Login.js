import React, { useState,useContext } from "react";
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




export default function Login() {
    const auth = useContext(LoginContext);
  const [isLogin, setIsLogin] = useState(true);
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

  const switchMode = () => {
    if (!isLogin) {
      setFormData(
        { 
            ...formState.inputs,
            email: undefined },
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
  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login(true);
  };

  return (
    <NewsBox>
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input
          element="input"
          id="u_name"
          type="text"
          label="Username"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          onInput={inputHandler}
        ></Input>
        {!isLogin && (
          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
          ></Input>
        )}
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          errorText="Please enter a valid password"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
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
  );
}
