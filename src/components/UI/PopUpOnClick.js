import { useEffect, useRef } from "react";

import styles from "./PopUpOnClick.module.css";

export default function PopUpOnClick(props) {
  const componentRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
        props.onBlur(false);
    }

  };
  return (
    <div
      ref={componentRef}
      className={`${styles.popup__style} ${styles.popup__flyout}`}
    >
      <div
        className={styles.arrow__wrapper}
        style={{ bottom: "calc(100% - 100px)", right: "100%" }}
      >
        <div
          className={styles.arrow__style}
          style={{
            borderTopColor: "transparent",
            borderRightColor: "transparent",
          }}
        ></div>
      </div>
      {props.children}
    </div>
  );
}
