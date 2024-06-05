import React from "react";

import styles from "../mainstyling.module.css";

interface NameAndAlignmentProps {
  name:string;
  meta:{ size: string; type: string; alignment: string };
}

const NameAndAlignment: React.FC<NameAndAlignmentProps> = ({name, meta}) => {
  return (
    <div className={styles.name_box}>
      <div className={styles.name_styling}>{name.toUpperCase()}</div>
      <div>{`${meta.size} ${meta.type}, ${meta.alignment}`}</div>
    </div>
  );
};
export default NameAndAlignment;
