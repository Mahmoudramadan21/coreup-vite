/**
 * SocialButton component for social login actions.
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} props.icon - Icon source URL
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.ariaLabel] - Accessibility label
 * @returns {JSX.Element} SocialButton element
 * @example
 * <SocialButton icon={facebookIcon} ariaLabel="Login with Facebook">Facebook</SocialButton>
 */
import React, { useCallback } from "react";
import styles from "./SocialButton.module.scss";

const SocialButton = ({ className, icon, children, onClick, ariaLabel }) => {
  const handleClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return (
    <button
      type="button"
      className={`${styles.socialButton} ${className ? styles[className] : ""}`}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      <img
        src={icon}
        alt=""
        className={styles.socialIcon}
        aria-hidden="true"
        loading="lazy"
      />
      {children}
    </button>
  );
};

export default React.memo(SocialButton);
