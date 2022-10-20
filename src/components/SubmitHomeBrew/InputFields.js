import React, { useRef, useState } from "react";
import { useHttpClient } from "../hooks/http-hook";
import styles from "./InputFields.module.css";
export default function InputFields(props) {
  const inputRef = useRef();
  const [acceptedValue, setStatus] = useState("normal");
  const [duplicate, setDuplicate] = useState(false);

  const { sendRequest } = useHttpClient();
  const fieldCheck = () => {
    if (inputRef.current.value.trim() === "" && props.required === "required") {
      setStatus("red");
    } else {
      setStatus("normal");
      props.onBlur(props.input_name, inputRef.current.value.trim());
    }
  };

  const nameChecker = async () => {
    if (props.input_name === "name" && inputRef.current.value.trim()) {
      console.log(inputRef.current.value);
      try {
        const second = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/submit_homebrew/check_name",
          "POST",
          JSON.stringify({
            name: inputRef.current.value.trim(),
          }),
          {
            "Content-Type": "application/json",
          }
        );
        if (second.length > 0) {
          setDuplicate(true);
        }else{
          setDuplicate(false);
        }
      } catch (err) {}
    }
  };

  return (
    <>
      <div className={styles.every_input__style}>
        <span className={styles.capital_text__style}>
          {props.name}
          {props.required && (
            <span className={styles.required_star__style}>*</span>
          )}
        </span>
        <input
          ref={inputRef}
          onBlur={nameChecker}
          onChange={fieldCheck}
          placeholder={props.placeholder}
          name={props.input_name}
          required={props.required}
          className={`${styles.input_field__style} ${styles[acceptedValue]}`}
        ></input>{" "}
        {acceptedValue === "red" ? (
          <span className={styles.error_tiny_text__style}>
            *This field is NOT optional!
          </span>
        ): duplicate  ? (
          <span className={styles.error_tiny_text__style}>
            *There is a creature with this name in the Library!
          </span>
        ):'' }
        {/* {duplicate  && (
          <span className={styles.error_tiny_text__style}>
            *There is a creature with this name in the Library!
          </span>
        )} */}
      </div>
    </>
  );
}
