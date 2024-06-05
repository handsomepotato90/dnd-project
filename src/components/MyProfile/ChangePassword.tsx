import React, { useState } from "react";
import NewsBox from "../UI/NewsBox";
import Input from "../form-elements/Input";
import { useForm } from "../hooks/form-hook";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../util/validators";
import Button from "../form-elements/Button";
import { useHttpClient } from "../hooks/http-hook";
import ModalError from "../UI/ModalError";
import LoadingSpinner from "../UI/LoadingSpinner";
import ModalConfirmation from "../UI/ModalConfirmation";

interface ChangePasswordProps {
  children?: React.ReactNode;
  ids: {
    userId: string;
    logout: () => void;
  };
}

const ChangePassword: React.FC<ChangePasswordProps> = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [intentionForSubmit, setintentionForSubmit] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [formState, inputHandler] = useForm(
    {
      password: { value: "", isValid: false },
      re_password: { value: "", isValid: false },
    },
    false
  );

  const errorHandler = () => {
    clearError();
  };

  const passwordErrorHandler = () => {
    setpasswordError(false);
  };

  const confirmedSubmission = async (answer: boolean) => {
    if (!answer) {
      setintentionForSubmit(false);
      return;
    }
    if (formState.inputs.password.value !== formState.inputs.re_password.value) {
      setpasswordError(true);
      setintentionForSubmit(false);
      return;
    }
    try {
      setintentionForSubmit(false);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/myProfile/change_password",
        "POST",
        JSON.stringify({
          password: formState.inputs.password.value,
          re_password: formState.inputs.re_password.value,
          uId: props.ids.userId,
        }),
        {
          "Content-Type": "application/json",
        }
      );
    } catch (err) {

    }
    props.ids.logout();
  };

  const authSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setintentionForSubmit(true);
  };

  return (
    <div>
      {isLoading && <LoadingSpinner asOverlay  />}
      {error && (
        <ModalError
          header="An Error Occurred"
          error={error}
          onClick={errorHandler}
        />
      )}
      {passwordError && (
        <ModalError
          header="Passwords don't match."
          error="Please make sure the passwords you entered match each other."
          onClick={passwordErrorHandler}
        />
      )}
      {intentionForSubmit && (
        <ModalConfirmation
          title="Are you sure that you want to Change your Password."
          onClick={confirmedSubmission}
        />
      )}
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
          />
          <Input
            element="input"
            id="re_password"
            type="password"
            label="Re-Password:"
            errorText="*Password must be at least five(5) characters"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            Change Password
          </Button>
        </form>
      </NewsBox>
    </div>
  );
};

export default ChangePassword;
