import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.scss";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import userIcon from "../../assets/icons/user-gray-icon.svg";
import emailIcon from "../../assets/icons/email.svg";
import lockIcon from "../../assets/icons/lock.svg";

// Signup page for user registration
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
        {/* Page Title */}
        <h1 className={styles.signup__title}>Create an account</h1>
        {/* Page Subtitle */}
        <p className={styles.signup__subtitle}>
          Let’s get you all set up so you can access your personal account.
        </p>
        {/* Signup Form */}
        <form onSubmit={handleSubmit} className={styles.signup__form}>
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
          {/* Role Selection */}
          <div className={styles.signup__role}>
            <p>Who are you?</p>
            <div className={styles.signup__roleOptions}>
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
          {/* Terms Agreement */}
          <div className={styles.signup__terms}>
            <input
              type="checkbox"
              name="terms"
              id={styles.signup__termsCheckbox}
              required
              aria-label="Agree to terms of use and privacy policy"
            />
            <label for="terms" className={styles.signup__termsLabel}>
              By creating an account, I agree to our{" "}
              <Link to="/terms" className={styles.signup__termsLink}>
                Terms of use
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className={styles.signup__termsLink}>
                Privacy Policy
              </Link>
            </label>
          </div>
          <Button
            type="submit"
            className="button button--lg"
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
