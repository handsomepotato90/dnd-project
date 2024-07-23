import React, { useState } from "react";

type AutoFocusInputEnterEventProps = {
  value: string | number;
  valuesOnsubmit: (arg0: string) => void;
  type: string;
};

const AutoFocusInputEnterEvent: React.FC<AutoFocusInputEnterEventProps> = (
  props
) => {
  const [value, setValue] = useState(props.value);
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitValue();
    }
  };
  const submitValue = () => {
    props.valuesOnsubmit(String(value));
  };
  return (
    <input
      type={props.type}
      autoFocus={true}
      onBlur={submitValue}
      onKeyUp={handleKeyUp}
      onChange={(e) => setValue(e.target.value)}
    ></input>
  );
};
export default AutoFocusInputEnterEvent;
