import React, { Suspense } from "react";
import styles from "./HowItWorks.module.scss";

// Importing icons in WebP format to reduce payload size
import userIcon from "../../assets/icons/user.svg";
import documentIcon from "../../assets/icons/document.svg";
import searchIcon from "../../assets/icons/search.svg";
import envelopeIcon from "../../assets/icons/envelope.svg";

// Importing connectors in WebP format
import connectorLine from "../../assets/icons/connector-line.svg";
import connectorReversedLine from "../../assets/icons/connector-reversed-line.svg";

// Lazy load the Step component for better performance
const Step = React.lazy(() => import("../../components/Step/Step"));

/*
 * HowItWorks Section to display the steps for using the platform
 * Performance Note: Using React.lazy and Suspense to reduce initial load time and minimize main-thread work
 * Performance Note: Converted SVG icons to WebP to reduce payload size
 * Accessibility Note: Added aria-label for better screen reader support
 */
const stepsData = [
  {
    icon: userIcon,
    title: "Create account",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit dictum tortor volutpat.",
    connector: connectorLine,
  },
  {
    icon: documentIcon,
    title: "Complete your profile",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros risus et tincidunt.",
    connector: connectorReversedLine,
  },
  {
    icon: searchIcon,
    title: "Find an investor",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt praesent nec.",
    connector: connectorLine,
  },
  {
    icon: envelopeIcon,
    title: "Apply now",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet non eget egestas eu.",
  },
];

const HowItWorks = () => {
  return (
    <section
      className={`${styles["how-it-works"]}`}
      aria-label="How CoreUp Works"
    >
      <div className="container">
        {/* Section Title */}
        <h2 className={styles["how-it-works__title"]}>How CoreUp Works</h2>
        {/* Steps Container */}
        <div className={styles["how-it-works__steps"]}>
          {/* Suspense for lazy loading Step component */}
          <Suspense
            fallback={
              <div
                style={{ height: "200px", width: "100%" }}
                aria-live="polite"
              >
                Loading...
              </div>
            }
          >
            {stepsData.map((step) => (
              <Step
                key={step.title}
                icon={step.icon}
                title={step.title}
                description={step.description}
                connector={step.connector}
                loading="lazy" // Defer icon loading
              />
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HowItWorks);
