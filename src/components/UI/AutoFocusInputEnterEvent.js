import { useState } from "react";
export default function AutoFocusInputEnterEvent(props) {
  const [value, setValue] = useState(props.value);
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      submitValue();
    }
  };
  const submitValue = () => {
    props.valuesTosubmit(value);
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
}
