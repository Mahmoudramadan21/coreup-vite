import React from "react";
import styles from "./Hero.module.scss";
import Button from "../../components/Button/Button";
import heroGraphics from "../../assets/hero-graphics.webp";

const Hero = () => {
  return (
    <section
      className={`${styles.hero} container`}
      aria-labelledby="hero-title"
    >
      <div className={styles.hero__content}>
        <h1 id="hero-title" className={styles.hero__title}>
          All-In-One Platform For{" "}
          <span className={styles.highlight}>Startups</span>
        </h1>
        <p className={styles.hero__subtitle}>
          Lorem ipsum dolor sit amet consectetur. Urna nulla sed scelerisque sit
          donec lectus pellentesque. Quam vitae elementum suspendisse risus.
          Dolor cursus cursus arcu in faucibus.
        </p>
        <Button to="register" aria-label="Join now">
          Join now
        </Button>
      </div>
      <div className={styles.hero__graphic}>
        <img
          src={heroGraphics}
          alt="Illustration of a startup workspace"
          width="540"
          height="400"
          loading="eager"
          fetchpriority="high"
          style={{ aspectRatio: "540/400" }}
        />
      </div>
    </section>
  );
};

export default React.memo(Hero);
