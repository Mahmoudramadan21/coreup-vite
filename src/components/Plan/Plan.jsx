/**
 * Plan component to display pricing plans with features and action button.
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Plan title (e.g., "Basic")
 * @param {string} props.description - Plan description
 * @param {string} props.price - Plan price (e.g., "$19")
 * @param {string} props.period - Billing period (e.g., "/Monthly")
 * @param {string[]} props.features - Array of feature descriptions
 * @param {boolean} [props.isRecommended=false] - Highlights recommended plan
 * @param {React.ReactNode} [props.button] - Button component
 * @returns {JSX.Element} Plan element
 * @example
 * <Plan title="Basic" price="$19" period="/Monthly" features={["Feature 1", "Feature 2"]} />
 */
import React from "react";
import styles from "./Plan.module.scss";
import checkIcon from "../../assets/icons/check.svg";

const CheckIcon = () => (
  <img
    src={checkIcon}
    className={styles["plan__check"]}
    alt="Feature available check mark"
    width="16"
    height="16"
    loading="lazy"
  />
);

const Plan = ({
  title,
  description,
  price,
  period,
  features,
  isRecommended = false,
  button,
}) => {
  return (
    <article
      className={`
        ${styles.plan}
        ${title === "Basic" ? styles["basic-plan"] : ""}
        ${title === "Standard" ? styles["standard-plan"] : ""}
        ${title === "Premium" ? styles["premium-plan"] : ""}
        ${isRecommended ? styles["plan--recommended"] : ""}`}
      aria-label={`Pricing plan: ${title}`}
      role="region"
    >
      {/* Recommended Tag */}
      {isRecommended && (
        <span className={styles["plan__recommended-tag"]}>Recommended</span>
      )}
      {/* Plan Header */}
      <header className={styles["plan__header"]}>
        <h2 className={styles["plan__title"]}>{title}</h2>
        <p className={styles["plan__description"]}>{description}</p>
        <div className={styles["plan__price"]}>
          <span className={styles["plan__price-amount"]}>{price}</span>
          <span className={styles["plan__price-period"]}>{period}</span>
        </div>
      </header>
      {/* Plan Footer */}
      <footer className={styles["plan__footer"]}>
        <ul className={styles["plan__features"]} role="list">
          {features.map((feature, index) => (
            <li key={index} className={styles["plan__feature"]} role="listitem">
              <CheckIcon />
              {feature}
            </li>
          ))}
        </ul>
        {button && <div className={styles["plan__button"]}>{button}</div>}
      </footer>
    </article>
  );
};

export default React.memo(Plan);
