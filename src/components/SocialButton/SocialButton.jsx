import React from "react";
import styles from "./SocialButton.module.scss";

// SocialButton component for social login buttons
// Props:
// - className: Custom CSS classes for styling
// - icon: Social media icon
// - children: Button content
// - onClick: Click event handler
// - ariaLabel: Accessibility label for screen readers
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
