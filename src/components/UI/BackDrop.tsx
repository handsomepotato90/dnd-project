import React from "react";
import styles from "./BackDrop.module.css";

interface BackDropProps {
  onClick: (value: boolean) => void;
  children?: React.ReactNode;
}

const BackDrop: React.FC<BackDropProps> = ({ onClick, children }) => {
  return (
    <div onClick={() => onClick(false)} className={styles.modal_style}>
      {children}
    </div>
  );
};

export default BackDrop;
