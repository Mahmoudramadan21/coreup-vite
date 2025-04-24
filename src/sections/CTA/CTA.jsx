import React from "react";
import styles from "./CTA.module.scss";
import Button from "../../components/Button/Button";

/*
 * Call to Action Section to encourage users to join
 * Accessibility Note: Ensure sufficient contrast for text (handled in CTA.module.scss)
 */
const CTA = () => {
  return (
    <section className={`${styles.cta} container`}>
      <div className={styles["cta__content"]}>
        {/* CTA Title */}
        <h2 className={styles["cta__title"]}>Join COREUP</h2>
        {/* CTA Description */}
        <p className={styles["cta__description"]}>
          Join the leading matchmaking platform for startups, VC funds, angels,
          accelerators and corporates
        </p>
        {/* CTA Button */}
        <Button
          className="btn--primary btn--primary-lg"
          to="/join"
          aria-label="Join CoreUp now"
        >
          Join Now
        </Button>
      </div>
    </section>
  );
};

export default React.memo(CTA);
