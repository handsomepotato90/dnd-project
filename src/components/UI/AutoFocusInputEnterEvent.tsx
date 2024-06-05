import { useState } from "react";

export default function AutoFocusInputEnterEvent(props: { value: string|number; valuesOnsubmit: (arg0: string|number) => void; type: string; }) {
  const [value, setValue] = useState(props.value);
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitValue();
    }
  };
  const submitValue = () => {
    props.valuesOnsubmit(value);
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
