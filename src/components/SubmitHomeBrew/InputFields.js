import React ,{useRef }from "react";
import styles from "./InputFields.module.css";
export default function InputFields(props) {
    const inputRef = useRef();
  const thisField = (event) => {
    if (event.target.value === "" && props.required === "required") {
      console.log("empty");
    }
    props.onBlur(props.input_name,inputRef.current.value)
  };
  return (
    <div className={styles.every_input__style}>
      <span className={styles.capital_text__style}>
        {props.name}
        {props.required && (
          <span className={styles.required_star__style}>*</span>
        )}
      </span>
      <input ref={inputRef} onBlur={thisField} placeholder={props.placeholder} name={props.input_name} required={props.required} className={styles.input_field__style}></input>{" "}
    </div>
  );
}
