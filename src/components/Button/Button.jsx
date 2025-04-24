import React from "react";
import "./Button.scss";
import { useNavigate } from "react-router-dom";

/*
 * Button component for navigation or triggering actions
 * Props:
 * - children: Button content (text or elements)
 * - className: Additional CSS classes
 * - onClick: Optional click handler
 * - to: Optional navigation path (via react-router-dom)
 * - ariaLabel: Accessibility label for screen readers
 * - disabled: Optional prop to disable the button
 * Accessibility Note: Ensure sufficient contrast for button text (handled in Button.scss)
 */
const Button = ({
  children,
  className = "",
  onClick,
  to,
  ariaLabel,
  disabled = false,
}) => {
  const navigate = useNavigate();

  // Handle click: Either navigate or call onClick handler
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
