import React from "react";
import styles from "./Testimonial.module.scss";
import starIcon from "../../assets/icons/star.svg";
import quoteIcon from "../../assets/icons/quote.svg";

/*
 * Testimonial Component to display each client testimonial
 * Props:
 * - avatar: User avatar image
 * - name: User name
 * - role: User role/industry
 * - text: Testimonial text
 * - isFeatured: Boolean to highlight featured testimonial
 * Performance Note: Added width and height to images to prevent layout shifts
 * Accessibility Note: Added aria-label and aria-hidden for better screen reader support
 */

// Star component for ratings
const Star = () => (
  <img
    src={starIcon}
    className={styles["testimonial__star"]}
    alt="Star rating icon"
    width="20"
    height="20"
    loading="lazy"
  />
);

const Testimonial = ({ avatar, name, role, text, isFeatured }) => {
  return (
    <article
      className={`${styles.testimonial} ${
        isFeatured ? styles["testimonial--featured"] : ""
      }`}
      aria-label={`Testimonial by ${name}`}
    >
      {/* Stars */}
      <div className={styles["testimonial__stars"]}>
        {[...Array(5)].map((_, index) => (
          <Star key={index} />
        ))}
      </div>
      {/* Testimonial Text */}
      <p className={styles["testimonial__text"]}>{text}</p>
      {/* Testimonial Footer */}
      <div className={styles["testimonial__footer"]}>
        {/* User Info */}
        <div className={styles["testimonial__user"]}>
          <img
            src={avatar}
            alt={`${name}'s avatar`}
            className={styles["testimonial__avatar"]}
            loading="lazy"
            width="50"
            height="50"
          />
          <div className={styles["testimonial__user-info"]}>
            <h3 className={styles["testimonial__name"]}>{name}</h3>
            <p className={styles["testimonial__role"]}>{role}</p>
          </div>
        </div>
        {/* Quote Icon */}
        <img
          src={quoteIcon}
          alt="Quote icon"
          className={styles["testimonial__quote"]}
          loading="lazy"
          width="30"
          height="30"
          aria-hidden="true"
        />
      </div>
    </article>
  );
};

export default React.memo(Testimonial);
