import React from "react";
import { SvgComponent } from "../../../../../Navigation/Navigation";
import close from "../../../../../../icons/Close.svg";
import styles from "./shortLongRest.module.css";

interface DisplayWindowProps {
  onClick: (value: boolean) => void;
  children: React.ReactNode;
}

const DisplayWindow: React.FC<DisplayWindowProps> = (props) => {
  return (
    <div className={styles.display_window}>
      <div className={styles.display_window__close} onClick={() => props.onClick(false)}>
        <SvgComponent
          Image={close}
          height="40"
          color="red"
          width="70"
        ></SvgComponent>
      </div>
      {props.children}
    </div>
  );
}

export default DisplayWindow;
