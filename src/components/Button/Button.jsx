import React from "react";
import "./Button.scss";
import { useNavigate } from "react-router-dom";

const Button = ({
  children,
  className = "",
  onClick,
  to,
  ariaLabel,
  disabled = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (disabled) return;
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={`btn ${className} ${disabled ? "btn--disabled" : ""}`}
      onClick={handleClick}
      aria-label={ariaLabel}
      disabled={disabled}
      aria-disabled={disabled ? "true" : "false"}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
