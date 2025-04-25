/**
 * Reusable Input component with optional icon and password visibility toggle.
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.type='text'] - Input type (e.g., text, password)
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.icon] - Icon source URL
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Change event handler
 * @param {string} [props.ariaLabel] - Accessibility label
 * @returns {JSX.Element} Input element
 * @example
 * <Input type="password" value={value} onChange={handleChange} ariaLabel="Password" />
 */
import React, { useState, useCallback } from "react";
import styles from "./Input.module.scss";
import eyeIcon from "../../assets/icons/eye.svg";

const Input = ({
  type = "text",
  placeholder,
  icon,
  value,
  onChange,
  ariaLabel,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

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
          loading="lazy"
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
          <img src={eyeIcon} alt="" aria-hidden="true" loading="lazy" />
        </button>
      )}
    </div>
  );
};

export default React.memo(Input);
