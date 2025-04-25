import React from "react";
import { Link } from "react-router-dom";
import styles from "./AuthLayout.module.scss";
import AuthSidebar from "../../sections/AuthSidebar/AuthSidebar";
import logo from "../../assets/logo-white.svg";

// AuthLayout component for authentication pages
// Props:
// - children: Content to render in the main section
// - showSidebar: Toggles sidebar visibility (default: true)
const AuthLayout = ({ children, showSidebar = true }) => {
  return (
    <div className={styles.authLayout}>
      {showSidebar && <AuthSidebar />}
      {/* Header Section */}
      <header
        className={`${styles.authLayout__header} ${
          children.props.className?.includes("login")
            ? styles["authLayout__header--login"]
            : ""
        }`}
      >
        {/* Logo Link */}
        <Link
          to="/login"
          className={`${styles.authLayout__logo} ${
            children.props.className?.includes("login")
              ? styles["authLayout__logo--login"]
              : ""
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
        {/* Navigation Link */}
        <Link
          to={`${
            children.props.className?.includes("login") ? "/signup" : "/login"
          }`}
          className={`${styles.authLayout__link} ${
            children.props.className?.includes("login")
              ? styles["authLayout__link--active"]
              : ""
          }`}
          aria-label={`Go to ${
            children.props.className?.includes("login") ? "signup" : "login"
          } page`}
        >
          {children.props.className?.includes("login") ? "regitser" : "login"}
        </Link>
      </header>
      {/* Main Content */}
      <main className={styles.authLayout__main}>{children}</main>
      {/* Footer Section */}
      <footer className={styles.authLayout__footer}>
        <p>Copyright © 2024, CoreUp Inc. All Rights Reserved</p>
        <Link
          to="/help"
          className={styles.authLayout__helpLink}
          aria-label="Need help?"
        >
          Need help?
        </Link>
      </footer>
    </div>
  );
};

export default React.memo(AuthLayout);
