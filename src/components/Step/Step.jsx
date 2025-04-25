/**
 * Step component for displaying steps in a process (e.g., "How It Works").
 * @component
 * @param {Object} props - Component props
 * @param {string} props.icon - Step icon source URL
 * @param {string} props.title - Step title
 * @param {string} props.description - Step description
 * @param {string} [props.connector] - Connector image source URL
 * @returns {JSX.Element} Step element
 * @example
 * <Step icon={stepIcon} title="Step 1" description="Complete your profile" />
 */
import React from "react";
import styles from "./Step.module.scss";

const Step = ({ icon, title, description, connector }) => {
  return (
    <article
      className={`${styles.step} ${
        title === "Complete your profile" ? styles["step--document"] : ""
      }`}
      aria-label={`Step: ${title}`}
      role="region"
    >
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
      <h3 className={styles["step__title"]}>{title}</h3>
      <p className={styles["step__description"]}>{description}</p>
      {connector && (
        <img
          src={connector}
          alt=""
          className={`${styles["step__connector"]} ${
            title === "Complete your profile"
              ? styles["step__connector--reversed"]
              : ""
          }`}
          loading="lazy"
          aria-hidden="true"
        />
      )}
    </article>
  );
};

export default React.memo(Step);
