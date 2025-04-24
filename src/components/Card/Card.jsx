import React from "react";
import "./Card.scss";
import Button from "../Button/Button";

/*
 * Card component for displaying content with actions
 * Props:
 * - className: Additional CSS classes
 * - title: Card title
 * - subtitle: Card subtitle
 * - description: Card description
 * - role: ARIA role for accessibility
 * Accessibility Note: Links rely on color to be distinguishable (handled in Button.scss)
 */
const Card = ({ className = "", title, subtitle, description, role }) => {
  return (
    <article
      className={`card ${className}`}
      role={role}
      aria-label={`Card for ${title}`}
    >
      {/* Card Title */}
      <h2 className="card-title">{title}</h2>
      {/* Card Subtitle */}
      <h3 className="card-subtitle">{subtitle}</h3>
      {/* Card Description */}
      <p className="card-description">{description}</p>
      {/* Card Buttons */}
      <div className="card-buttons">
        <Button
          className="btn--primary btn--primary-md"
          to="register"
          aria-label="Join now"
        >
          Join now
        </Button>
        <Button to="#" aria-label="Read more about this card">
          Read more
        </Button>
      </div>
    </article>
  );
};

export default React.memo(Card);
