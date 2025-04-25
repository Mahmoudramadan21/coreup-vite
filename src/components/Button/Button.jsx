/**
 * Button component for navigation or triggering actions.
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content (text or elements)
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {Function} [props.onClick] - Optional click handler
 * @param {string} [props.to] - Optional navigation path (via react-router-dom)
 * @param {string} [props.ariaLabel] - Accessibility label for screen readers
 * @param {boolean} [props.disabled=false] - Disables the button
 * @returns {JSX.Element} Button element
 * @example
 * <Button to="/home" ariaLabel="Go to home">Home</Button>
 */
import React, { useCallback } from "react";
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

  const handleClick = useCallback(() => {
    if (disabled) return;
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  }, [disabled, to, onClick, navigate]);

  return (
    <button
      type="button"
      className={`btn ${className} ${disabled ? "btn--disabled" : ""}`}
      onClick={handleClick}
      aria-label={ariaLabel}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
