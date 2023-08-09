import { useState, useEffect } from "react";
import NewsBox from "../UI/NewsBox";
import Input from "../form-elements/Input";
import Button from "../form-elements/Button";
import { useForm } from "../hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../util/validators";

import { useHttpClient } from "../hooks/http-hook";

export default function ChangeUserName(props) {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler, setFormData] = useForm(
    {
      u_name: { value: "", isValid: false },
    },
    true
  );
  const submitUserNameChange = async (event) => {
    event.preventDefault();
    console.log(formState.inputs.u_name.value);
    try {
      const resData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/change_username",
        "PATCH",
        JSON.stringify({
          name: formState.inputs.u_name.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
    } catch (err) {}
  };

  return (
    <div>
      {props.children}
      <NewsBox>
        <form onSubmit={submitUserNameChange}>
          <Input
            element="input"
            id="u_name"
            type="text"
            label="Username:"
            errorText="*Username must be at least five(5) characters"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
            onInput={inputHandler}
          ></Input>
          <Button type="submit" disabled={!formState.isValid}>
            Change Username
          </Button>
        </form>
      </NewsBox>
    </div>
  );
}
