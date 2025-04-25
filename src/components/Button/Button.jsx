import React from "react";
import "./Button.scss";
import { useNavigate } from "react-router-dom";

// Button component for navigation or actions
// Props:
// - children: Button content (text or elements)
// - className: Custom CSS classes for styling
// - onClick: Click event handler
// - to: Navigation path for routing
// - ariaLabel: Accessibility label for screen readers
// - disabled: Disables the button when true
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
      className={`button ${className} ${disabled ? "button--disabled" : ""}`}
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
