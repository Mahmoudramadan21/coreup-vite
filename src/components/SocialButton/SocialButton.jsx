import React from "react";
import styles from "./SocialButton.module.scss";

/*
 * Reusable SocialButton component for social logins
 * Performance Note: Wrapped with React.memo to prevent unnecessary re-renders
 * Accessibility Note: Added aria-label for better screen reader support
 */
const SocialButton = ({ className, icon, children, onClick, ariaLabel }) => {
  return (
    <button
      className={`${styles.socialButton} ${styles[className]}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <img src={icon} alt="" className={styles.socialIcon} aria-hidden="true" />
      {children}
    </button>
  );
};

export default React.memo(SocialButton);
