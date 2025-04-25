import React from "react";
import "./Card.scss";
import Button from "../Button/Button";

// Card component for displaying content with actions
// Props:
// - className: Custom CSS classes for styling
// - title: Card title text
// - subtitle: Card subtitle text
// - description: Card description text
// - role: ARIA role for accessibility
const Card = ({ className = "", title, subtitle, description, role }) => {
  return (
    <article
      className={`card ${className}`}
      role={role}
      aria-label={`Card for ${title}`}
    >
      {/* Card Title */}
      <h2 className="card__title">{title}</h2>
      {/* Card Subtitle */}
      <h3 className="card__subtitle">{subtitle}</h3>
      {/* Card Description */}
      <p className="card__description">{description}</p>
      {/* Card Buttons */}
      <div className="card__buttons">
        <Button
          className="button--primary button--primary-md"
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
