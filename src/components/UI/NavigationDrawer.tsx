import React from "react";
import ReactDOM from "react-dom";

import "./NavigationDrawer.css";

interface NavigationDrawerProps {
  className: string;
  onClick: (boolean: boolean) => void;
  children: React.ReactNode;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({ className, onClick, children }) => {
  const overlayRoot = document.getElementById("overlay-root");

  if (!overlayRoot) return null;

  return ReactDOM.createPortal(
    <div className={className}>
      <button className="close_btn__style" onClick={() => onClick(false)}>Close</button>
      {children}
    </div>,
    overlayRoot
  );
}

export default NavigationDrawer;
