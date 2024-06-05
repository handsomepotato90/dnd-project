import React from "react";
import styles from "./ConteinerBox.module.css";

interface ContainerProps  {
  fromStart?: Boolean ;
  fromEnd?: Boolean ;
  children?: React.ReactNode;
}

const ConteinerBox: React.FC<ContainerProps> = ({
  fromStart,
  fromEnd,
  children,
}) => {
  return (
    <div
      className={`${styles.container_box__style} ${
        fromStart && styles.fromStart
      } ${fromEnd && styles.fromEnd}`}
    >
      {children}
    </div>
  );
};
export default ConteinerBox;
