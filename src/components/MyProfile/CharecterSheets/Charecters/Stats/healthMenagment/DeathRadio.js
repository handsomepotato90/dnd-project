import { useState } from "react";

export default function DeathRadio(props) {
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
