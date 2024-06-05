import React, { useState, useContext } from "react";
import NewsBox from "../UI/NewsBox";
import Input from "../form-elements/Input";
import Button from "../form-elements/Button";
import { useForm } from "../hooks/form-hook";
import ModalError from "../UI/ModalError";
import LoadingSpinner from "../UI/LoadingSpinner";
import ModalConfirmation from "../UI/ModalConfirmation";
import { LoginContext } from "../store/login-context";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../util/validators";

import { useHttpClient } from "../hooks/http-hook";

interface ChangeUserNameProps {
  children?: React.ReactNode;
  ids: string;
  uname: string|null;
}

const ChangeUserName: React.FC<ChangeUserNameProps> = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [intentionForSubmit, setIntentionForSubmit] = useState(false);
  const auth = useContext(LoginContext);

  const [formState, inputHandler] = useForm(
    {
      u_name: { value: "", isValid: false },
    },
    true
  );

  const errorHandler = () => {
    clearError();
  };

  const confirmedSubmission = async (answer: boolean) => {
    if (!answer) {
      setIntentionForSubmit(false);
      return;
    }
    try {
      setIntentionForSubmit(false);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/myProfile/change_username",
        "POST",
        JSON.stringify({
          name: formState.inputs.u_name.value,
          uId: props.ids,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      auth.login(auth.userId, formState.inputs.u_name.value, auth.token);
    } catch (err) {}
  };

  const submitUserNameChange = (event: React.FormEvent) => {
    event.preventDefault();
    setIntentionForSubmit(true);
  };

  return (
    <div>
      {isLoading && <LoadingSpinner asOverlay />}
      {error && (
        <ModalError
          header="An Error Occurred"
          error={error}
          onClick={errorHandler}
        />
      )}
      {intentionForSubmit && (
        <ModalConfirmation
          title={`Are you sure that you want to change your username to ${formState.inputs.u_name.value}.`}
          onClick={confirmedSubmission}
        />
      )}
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
          />
          <Button type="submit" disabled={!formState.isValid}>
            Change Username
          </Button>
        </form>
      </NewsBox>
    </div>
  );
}

export default ChangeUserName;
