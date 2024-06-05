import React, { useState } from "react";

const DeathRadio: React.FC = () => {
  const [radio, setRadio] = useState(false);
  return (
    <input
      type="radio"
      checked={radio}
      onChange={() => {}}
      onClick={() => setRadio((current) => !current)}
    ></input>
  );
}
export default DeathRadio;