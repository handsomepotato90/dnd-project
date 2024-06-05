import React, { useEffect, useRef } from "react";
import styles from "./PopUpOnClick.module.css";

interface PopUpOnClickProps {
  onBlur: (value: boolean) => void;
  children: React.ReactNode;
}

const PopUpOnClick: React.FC<PopUpOnClickProps> = ({ onBlur, children }) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
        onBlur(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onBlur]);

  return (
    <div ref={componentRef} className={`${styles.popup__style} ${styles.popup__flyout}`}>
      <div className={styles.arrow__wrapper} style={{ bottom: "calc(100% - 100px)", right: "100%" }}>
        <div className={styles.arrow__style} style={{ borderTopColor: "transparent", borderRightColor: "transparent" }}></div>
      </div>
      {children}
    </div>
  );
};

export default PopUpOnClick;
