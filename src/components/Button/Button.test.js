import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

/*
 * Reusable Button component
 * Performance Note: Wrapped with React.memo to prevent unnecessary re-renders
 * Accessibility Note: Added aria-label for better screen reader support
 */
const Button = ({
  to,
  children,
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
}) => {
  const buttonProps = {
    className: styles.button,
    onClick,
    type,
    disabled,
    "aria-label": ariaLabel,
  };

  return to ? (
    <Link to={to} className={styles.button} aria-label={ariaLabel}>
      {children}
    </Link>
  ) : (
    <button {...buttonProps}>{children}</button>
  );
};

export default React.memo(Button);
