import React from "react";
import TitleNTextArea from "./DescriptionComponents/TitleNTextArea";
// import Background from "./DescriptionComponents/Background";
import Characteristics from "./DescriptionComponents/Characteristics";
import styles from "./Inventory.module.css";

const Description: React.FC = () => {
  return (
    <div className={styles.description_style}>
      <TitleNTextArea title={"BACKGROUND"}></TitleNTextArea>
      <Characteristics></Characteristics>
      <TitleNTextArea title={"APPEARANCE"}></TitleNTextArea>
    </div>
  );
}

export default Description;
