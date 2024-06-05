import React from "react";
import "./Navigation.css";

interface NavigatorBackProps {
  className:string,
  children:React.ReactNode,
}

const NavigatorBack: React.FC<NavigatorBackProps> = ({className, children}) => {

const cName = !className ?  "black__background": className;

  return <nav className={`${cName} nav__size nav__bcc`}>{children}</nav>;
}
export default NavigatorBack;