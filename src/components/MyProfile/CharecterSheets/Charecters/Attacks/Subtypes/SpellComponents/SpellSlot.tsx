import React, { useState } from "react";

const SpellSlot: React.FC = () => {
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
};

export default SpellSlot;
