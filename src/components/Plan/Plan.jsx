import React from "react";
import styles from "./Plan.module.scss";
import checkIcon from "../../assets/icons/check.svg";

// Plan component for displaying pricing plans
// Props:
// - title: Plan title (e.g., Basic)
// - description: Plan description
// - price: Plan price (e.g., $19)
// - period: Billing period (e.g., /Monthly)
// - features: Array of plan features
// - isRecommended: Highlights recommended plan
// - button: Button component for the plan
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
  isRecommended,
  button,
}) => {
  return (
    <article
      className={`
        ${title === "Basic" ? styles["basic-plan"] : ""}
        ${title === "Standard" ? styles["standard-plan"] : ""}
        ${title === "Premium" ? styles["premium-plan"] : ""}
        ${styles.plan} ${isRecommended ? styles["plan--recommended"] : ""}`}
      aria-label={`Pricing plan: ${title}`}
    >
      {/* Recommended Tag */}
      {isRecommended && (
        <span className={styles["plan__recommended-tag"]}>Recommendation</span>
      )}
      {/* Plan Header */}
      <div className={styles["plan__header"]}>
        {/* Plan Title */}
        <h2 className={styles["plan__title"]}>{title}</h2>
        {/* Plan Description */}
        <p className={styles["plan__description"]}>{description}</p>
        {/* Plan Price */}
        <div className={styles["plan__price"]}>
          <span className={styles["plan__price-amount"]}>{price}</span>
          <span className={styles["plan__price-period"]}>{period}</span>
        </div>
      </div>
      {/* Plan Footer */}
      <div className={styles["plan__footer"]}>
        {/* Plan Features */}
        <ul className={styles["plan__features"]} role="list">
          {features.map((feature, index) => (
            <li key={index} className={styles["plan__feature"]} role="listitem">
              <CheckIcon />
              {feature}
            </li>
          ))}
        </ul>
        {/* Plan Button */}
        {button && <div className={styles["plan__button"]}>{button}</div>}
      </div>
    </article>
  );
};

export default React.memo(Plan);
