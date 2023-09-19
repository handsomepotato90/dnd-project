import NewsBox from "../UI/NewsBox";
import Input from "../form-elements/Input";
import { useForm } from "../hooks/form-hook";
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from "../util/validators";
import Button from "../form-elements/Button";
import { useHttpClient } from "../hooks/http-hook";

export default function ChangeMail(props) {
  const { sendRequest } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      email: { value: "", isValid: false },
    },
    true
  );

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/change_mail",
        "POST",
        JSON.stringify({
          email: formState.inputs.email.value,
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
        <form onSubmit={authSubmitHandler}>
          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail:"
            validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
          ></Input>
          <Button type="submit" disabled={!formState.isValid}>
            Change E-Mail
          </Button>
        </form>
      </NewsBox>
    </div>
  );
}
