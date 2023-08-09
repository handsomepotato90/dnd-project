import { useState, useEffect } from "react";
import NewsBox from "../UI/NewsBox";
import Input from "../form-elements/Input";
import { useForm } from "../hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../util/validators";
import Button from "../form-elements/Button";
import { useHttpClient } from "../hooks/http-hook";

export default function ChangePassword(props) {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler, setFormData] = useForm(
    {
      password: { value: "", isValid: false },
      re_password: { value: "", isValid: false },
    },
    true
  );

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    if (
      formState.inputs.password.value === formState.inputs.re_password.value
    ) {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/change_password",
          "PATCH",
          JSON.stringify({
            password: formState.inputs.password.value,
            re_password: formState.inputs.re_password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );
      } catch (err) {}
    }
  };
  return (
    <div>
      {props.children}
      <NewsBox>
        <form onSubmit={authSubmitHandler}>
          <Input
            element="input"
            id="password"
            type="password"
            label="New Password:"
            errorText="*Password must be at least five(5) characters"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
            onInput={inputHandler}
          ></Input>
          <Input
            element="input"
            id="re_password"
            type="password"
            label="Re-Password:"
            errorText="*Password must be at least five(5) characters"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
            onInput={inputHandler}
          ></Input>
          <Button type="submit" disabled={!formState.isValid}>
            Change Password
          </Button>
        </form>
      </NewsBox>
    </div>
  );
}
