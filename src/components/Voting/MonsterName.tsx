import React from "react";
import styles from "./MonsterName.module.css";

interface MonsterNameTypes{
  name: string
}

const MonsterName: React.FC<MonsterNameTypes> =({name}) => {
  return (
    <span className={`${styles.name_plate} overflowing`}>{name}</span>
  );
}
export default MonsterName;