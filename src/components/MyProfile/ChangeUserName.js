import { useState } from "react";
import NewsBox from "../UI/NewsBox";
import Input from "../form-elements/Input";
import Button from "../form-elements/Button";
import { useForm } from "../hooks/form-hook";
import ModalError from "../UI/ModalError";
import LoadingSpinner from "../UI/LoadingSpinner";
import ModalConfirmation from "../UI/ModalConfirmation";
import { useNavigate } from "react-router-dom";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../util/validators";

import { useHttpClient } from "../hooks/http-hook";

export default function ChangeUserName(props) {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [intentionForSubmit, setintentionForSubmit] = useState(false);
  const [formState, inputHandler] = useForm(
    {
      u_name: { value: "", isValid: false },
    },
    true
  );
  const navigate = useNavigate();

  const errorHandler = () => {
    clearError(null);
  };
  const confirmedSubmision = async (answer) => {
    if (answer === false) {
      setintentionForSubmit(false);
      return;
    }
    try {
      setintentionForSubmit(false);
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
      navigate(`/myProfile`);
    } catch (err) {}
  };
  const submitUserNameChange = (event) => {
    event.preventDefault();
    setintentionForSubmit(true);
  };

  return (
    <div>
      {isLoading && <LoadingSpinner as0verlay></LoadingSpinner>}
      {error && (
        <ModalError
          header="An Error Occurred"
          error={error}
          onClick={errorHandler}
        ></ModalError>
      )}
      {intentionForSubmit && (
        <ModalConfirmation
          title={`Are you shure that you want to Change your User name to ${formState.inputs.u_name.value}.`}
          onClick={confirmedSubmision}
        ></ModalConfirmation>
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
          ></Input>
          <Button type="submit" disabled={!formState.isValid}>
            Change Username
          </Button>
        </form>
      </NewsBox>
    </div>
  );
}
