import { useState } from "react";

import styles from "./HealthSystem.module.css";

export default function DeathRadio(props) {
  const [radio, setRadio] = useState(false);
  return (
    <input
      type="radio"
      checked={radio}
      onClick={() => setRadio((current) => !current)}
    ></input>
  );
}
