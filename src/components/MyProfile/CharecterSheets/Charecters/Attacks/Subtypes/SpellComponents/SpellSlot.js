import { useState } from "react";

export default function SpellSlot() {
  const [status, setStatus] = useState(false);
  const changeStatus = () => {
    setStatus((curr) => !curr);
  };
  return (
    <input
      type="radio"
      readOnly={true}
      checked={status}
      onTouchMove={changeStatus}
      onClick={changeStatus}
    ></input>
  );
}
