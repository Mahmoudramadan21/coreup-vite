import React from "react";
import styles from "./Step.module.scss";

// Step component for "How It Works" section
// Props:
// - icon: Step icon image
// - title: Step title
// - description: Step description
// - connector: Optional connector image between steps
const Step = ({ icon, title, description, connector }) => {
  return (
    <div
      className={`${styles.step} ${
        title === "Complete your profile" ? styles["step--document"] : ""
      }`}
      aria-label={`Step: ${title}`}
    >
      {/* Step Icon */}
      <div
        className={`${styles["step__icon"]} ${
          title === "Complete your profile"
            ? styles["step__icon--document"]
            : ""
        }`}
      >
        <img
          src={icon}
          alt={`${title} step icon`}
          loading="lazy"
          width="32"
          height="32"
        />
      </div>
      {/* Step Title */}
      <h3 className={styles["step__title"]}>{title}</h3>
      {/* Step Description */}
      <p className={styles["step__description"]}>{description}</p>
      {/* Step Connector */}
      {connector && (
        <img
          src={connector}
          alt="Connector line between steps"
          className={`${styles["step__connector"]} ${
            title === "Complete your profile"
              ? styles["step__connector--reversed"]
              : ""
          }`}
          loading="lazy"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default React.memo(Step);
