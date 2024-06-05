import React, { ReactNode } from "react";
import styles from "./Charecters.module.css";

interface ButtonActionProps {
  onClick: (value: boolean) => void;
  children: ReactNode;
}

const ButtonActionComponent: React.FC<ButtonActionProps> = (props) => {
  return (
    <div className={styles.save_btn_holder_position}>
      <button
        onClick={() => props.onClick(true)}
        className={`red_text black__background ${styles.save_btn_position}`}
      >
        {props.children}
      </button>
    </div>
  );
}

export default ButtonActionComponent;
