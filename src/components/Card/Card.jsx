/**
 * Card component for displaying content with action buttons.
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string} props.title - Card title
 * @param {string} props.subtitle - Card subtitle
 * @param {string} props.description - Card description
 * @param {string} [props.role] - ARIA role for accessibility
 * @returns {JSX.Element} Card element
 * @example
 * <Card title="Startup" subtitle="For new ventures" description="Join our platform..." />
 */
import React from "react";
import "./Card.scss";
import Button from "../Button/Button";

const Card = ({ className = "", title, subtitle, description, role }) => {
  return (
    <article
      className={`card ${className}`}
      role={role || "article"}
      aria-label={`Card for ${title}`}
    >
      {/* Card Header */}
      <header className="card-header">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-subtitle">{subtitle}</h3>
      </header>
      {/* Card Content */}
      <p className="card-description">{description}</p>
      {/* Card Footer */}
      <footer className="card-buttons">
        <Button
          className="btn--primary btn--primary-md"
          to="register"
          aria-label="Join now"
        >
          Join now
        </Button>
        <Button to="#" aria-label={`Read more about ${title}`}>
          Read more
        </Button>
      </footer>
    </article>
  );
};

export default React.memo(Card);
