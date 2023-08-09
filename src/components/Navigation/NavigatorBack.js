import "./Navigation.css";

export default function NavigatorBack(props) {

const cName = !props.className ?  "black__background": props.className;

  return <nav className={`${cName} nav__size nav__bcc`}>{props.children}</nav>;
}
