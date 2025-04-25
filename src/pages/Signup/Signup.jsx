import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.scss";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import userIcon from "../../assets/icons/user-gray-icon.svg";
import emailIcon from "../../assets/icons/email.svg";
import lockIcon from "../../assets/icons/lock.svg";

/*
 * Signup Page
 * Performance Note: Wrapped with React.memo to prevent unnecessary re-renders
 * Security Note: Avoid inline scripts to mitigate XSS attacks
 * Accessibility Note: Added semantic HTML and aria-labels
 */
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("investor");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic (e.g., API call)
  };

  return (
    <AuthLayout showSidebar={false}>
      <div className={styles.signup}>
        <h1 className={styles.title}>Create an account</h1>
        <p className={styles.subtitle}>
          Let’s get you all set up so you can access your personal account.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            type="text"
            placeholder="First Name"
            icon={userIcon}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            ariaLabel="First name"
          />
          <Input
            type="text"
            placeholder="Last Name"
            icon={userIcon}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            ariaLabel="Last name"
          />
          <Input
            type="email"
            placeholder="Email Address"
            icon={emailIcon}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ariaLabel="Email address"
          />
          <Input
            type="password"
            placeholder="Password"
            icon={lockIcon}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ariaLabel="Password"
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            icon={lockIcon}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            ariaLabel="Confirm password"
          />
          <div className={styles.role}>
            <p>Who are you?</p>
            <div className={styles.roleOptions}>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="investor"
                  checked={role === "investor"}
                  onChange={() => setRole("investor")}
                  aria-label="Investor role"
                />
                Investor
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="startup"
                  checked={role === "startup"}
                  onChange={() => setRole("startup")}
                  aria-label="Startup role"
                />
                Startup
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="job-seeker"
                  checked={role === "job-seeker"}
                  onChange={() => setRole("job-seeker")}
                  aria-label="Job seeker role"
                />
                Job Seeker
              </label>
            </div>
          </div>
          <div className={styles.terms}>
            <input
              type="checkbox"
              name="terms"
              id={styles.terms}
              required
              aria-label="Agree to terms of use and privacy policy"
            />
            <label for="terms" className={styles.termsLabel}>
              By creating an account, I agree to our{" "}
              <Link to="/terms" className={styles.termsLink}>
                Terms of use
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className={styles.termsLink}>
                Privacy Policy
              </Link>
            </label>
          </div>
          <Button
            type="submit"
            className="btn btn-lg"
            ariaLabel="Create account"
          >
            Create account
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default React.memo(Signup);
