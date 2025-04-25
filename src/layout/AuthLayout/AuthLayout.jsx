import React from "react";
import { Link } from "react-router-dom";
import styles from "./AuthLayout.module.scss";
import AuthSidebar from "../../sections/AuthSidebar/AuthSidebar";
import logo from "../../assets/logo-white.svg";

/*
 * AuthLayout component for authentication pages
 * Performance Note: Wrapped with React.memo to prevent unnecessary re-renders
 * Accessibility Note: Added semantic HTML and aria-label for navigation
 */
const AuthLayout = ({ children, showSidebar = true }) => {
  return (
    <div className={styles.layout}>
      {showSidebar && <AuthSidebar />}
      <header
        className={`${styles.header} ${
          children.props.className?.includes("login") ? styles.loginHeader : ""
        }`}
      >
        <Link
          to="/login"
          className={`${styles.logo} ${
            children.props.className?.includes("login") ? styles.loginLogo : ""
          }`}
          aria-label="Go to CoreUp homepage"
        >
          <img
            src={logo}
            alt="CoreUp Logo"
            loading="eager"
            width="150"
            height="24"
          />
        </Link>
        <Link
          to={`${
            children.props.className?.includes("login") ? "/signup" : "/login"
          }`}
          className={`${styles.loginLink} ${
            children.props.className?.includes("login")
              ? styles.loginLinkActive
              : ""
          }`}
          aria-label={`Go to ${
            children.props.className?.includes("login") ? "signup" : "login"
          } page`}
        >
          {children.props.className?.includes("login") ? "regitser" : "login"}
        </Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>Copyright © 2024, CoreUp Inc. All Rights Reserved</p>
        <Link to="/help" className={styles.helpLink} aria-label="Need help?">
          Need help?
        </Link>
      </footer>
    </div>
  );
};

export default React.memo(AuthLayout);
