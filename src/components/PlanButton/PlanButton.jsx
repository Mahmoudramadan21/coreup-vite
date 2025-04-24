import React from "react";
import { Link } from "react-router-dom";
import styles from "./PlanButton.module.scss";
import arrowRight from "../../assets/icons/arrow-right.svg";
import arrowRightLight from "../../assets/icons/arrow-right-light.svg";

/*
 * PlanButton component for pricing plan actions
 * Props:
 * - children: Button content
 * - to: Navigation path
 * - variant: Button style ("default" or "primary")
 * - ariaLabel: Accessibility label
 * Performance Note: Added width and height to arrow icon to prevent layout shifts
 * Accessibility Note: Ensure links are distinguishable beyond color (e.g., add underline in CSS)
 */
const PlanButton = ({ children, to, variant = "default", ariaLabel }) => {
  return (
    <Link
      to={to}
      className={`${styles.planButton} ${styles[`planButton--${variant}`]}`}
      aria-label={ariaLabel}
    >
      {/* Button Text */}
      {children}
      {/* Arrow Icon */}
      <img
        src={variant === "default" ? arrowRight : arrowRightLight}
        className={styles["planButton__arrow"]}
        alt="Arrow right icon"
        width="20"
        height="20"
        loading="lazy"
      />
    </Link>
  );
};

export default React.memo(PlanButton);
