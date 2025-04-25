/**
 * PlanButton component for pricing plan navigation links.
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.to - Navigation path
 * @param {string} [props.variant='default'] - Button style ('default' or 'primary')
 * @param {string} [props.ariaLabel] - Accessibility label
 * @returns {JSX.Element} PlanButton element
 * @example
 * <PlanButton to="/signup" variant="primary">Get Started</PlanButton>
 */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./PlanButton.module.scss";
import arrowRight from "../../assets/icons/arrow-right.svg";
import arrowRightLight from "../../assets/icons/arrow-right-light.svg";

const PlanButton = ({ children, to, variant = "default", ariaLabel }) => {
  return (
    <Link
      to={to}
      className={`${styles.planButton} ${styles[`planButton--${variant}`]}`}
      aria-label={ariaLabel}
    >
      {children}
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
