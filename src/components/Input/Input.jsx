import React, { useState } from "react";
import styles from "./Input.module.scss";
import eyeIcon from "../../assets/icons/eye.svg";

/*
 * Reusable Input component
 * Performance Note: Wrapped with React.memo to prevent unnecessary re-renders
 * Security Note: Use type="password" for password fields to enhance security
 * Accessibility Note: Added aria-label and role for better screen reader support
 */
const Input = ({
  type = "text",
  placeholder,
  icon,
  value,
  onChange,
  ariaLabel,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className={styles.inputWrapper}>
      {icon && (
        <img
          src={icon}
          alt=""
          className={styles.inputIcon}
          aria-hidden="true"
        />
      )}
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
        aria-label={ariaLabel}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className={styles.eyeButton}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <img src={eyeIcon} alt="" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default React.memo(Input);
