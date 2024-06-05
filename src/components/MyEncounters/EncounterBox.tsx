import React from "react";
import { Link } from "react-router-dom";
import styles from "./EncounterBox.module.css";

interface Monster {
  img: string;
}

interface EncounterBoxProps {
  id: string;
  name: string;
  monsters: Monster[];
}

const EncounterBox: React.FC<EncounterBoxProps> = (props) => {
  let image_url: string;
  if (props.monsters.length < 1) {
    image_url =
      "https://cdn.pixabay.com/photo/2016/12/15/14/32/question-mark-background-1909040_1280.png";
  } else {
    image_url = props.monsters[0].img;
  }

  const style = {
    backgroundImage: `url(${image_url})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Link
      to={`/battle_scr/${props.id}`}
      className={styles.encounter_box__style}
    >
      <div style={style} className={styles.image__style}>
        <span className={styles.encounter_name__style}>{props.name}</span>
      </div>
    </Link>
  );
};

export default EncounterBox;
