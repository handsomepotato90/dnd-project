import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => {
 const cName = "button__style button_colors " + props.className;
  if (props.href) {
    return (
      <a>
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
>
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={cName}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      onTouchStart={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
