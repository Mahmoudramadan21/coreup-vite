/**
 * Testimonial component for displaying client testimonials with ratings.
 * @component
 * @param {Object} props - Component props
 * @param {string} props.avatar - User avatar image URL
 * @param {string} props.name - User name
 * @param {string} props.role - User role or industry
 * @param {string} props.text - Testimonial text
 * @param {boolean} [props.isFeatured=false] - Highlights featured testimonial
 * @returns {JSX.Element} Testimonial element
 * @example
 * <Testimonial avatar={avatar} name="John Doe" role="CEO" text="Great platform!" />
 */
import React from "react";
import styles from "./Testimonial.module.scss";
import starIcon from "../../assets/icons/star.svg";
import quoteIcon from "../../assets/icons/quote.svg";

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

const Testimonial = ({ avatar, name, role, text, isFeatured = false }) => {
  return (
    <article
      className={`${styles.testimonial} ${
        isFeatured ? styles["testimonial--featured"] : ""
      }`}
      aria-label={`Testimonial by ${name}`}
      role="article"
    >
      <div className={styles["testimonial__stars"]}>
        {[...Array(5)].map((_, index) => (
          <Star key={index} />
        ))}
      </div>
      <p className={styles["testimonial__text"]}>{text}</p>
      <footer className={styles["testimonial__footer"]}>
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
        <img
          src={quoteIcon}
          alt=""
          className={styles["testimonial__quote"]}
          loading="lazy"
          width="30"
          height="30"
          aria-hidden="true"
        />
      </footer>
    </article>
  );
};

export default React.memo(Testimonial);
