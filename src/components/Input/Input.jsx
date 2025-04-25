import React, { useState } from "react";
import styles from "./Input.module.scss";
import eyeIcon from "../../assets/icons/eye.svg";

// Input component for form fields
// Props:
// - type: Input type (e.g., text, password)
// - placeholder: Placeholder text
// - icon: Optional icon for input
// - value: Input value
// - onChange: Change event handler
// - ariaLabel: Accessibility label for screen readers
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
