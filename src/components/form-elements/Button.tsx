import React, { ReactNode, MouseEvent, TouchEvent } from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

interface ButtonProps {
  className?: string;
  href?: string;
  to?: string;
  exact?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  inverse?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  href,
  to,
  type,
  onClick,
  disabled,
  inverse,
  children
}: ButtonProps) => {
  const cName = `button__style button_colors ${inverse ? 'button_inverse' : ''} ${className || ''}`;

  if (href) {
    return (
      <a href={href} className={cName}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={cName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cName}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
      onTouchStart={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
