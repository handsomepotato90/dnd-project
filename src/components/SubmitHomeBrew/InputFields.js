import React, { useRef, useState } from "react";
import styles from "./InputFields.module.css";
export default function InputFields(props) {
  const inputRef = useRef();
  const [acceptedValue, setStatus] = useState('normal');
  const fieldCheck = ()=>{
    if (inputRef.current.value === "" && props.required === "required") {

    } else {
      setStatus('normal');  
    }
  }
  const thisField = () => {
    if (inputRef.current.value === "" && props.required === "required") {
      setStatus('red');
    }else{
      props.onBlur(props.input_name, inputRef.current.value);
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
          onBlur={thisField}
          onChange={fieldCheck}
          placeholder={props.placeholder}
          name={props.input_name}
          required={props.required}
          className={`${styles.input_field__style} ${styles[acceptedValue]}`}
        ></input>{" "}
        {acceptedValue ==="red" && <span className={styles.error_tiny_text__style}>*This field is NOT optional!</span>}
      </div>
    </>
  );
}
