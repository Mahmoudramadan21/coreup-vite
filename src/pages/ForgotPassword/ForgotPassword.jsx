import React, { useState } from "react";
import styles from "./ForgotPassword.module.scss";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import SocialButton from "../../components/SocialButton/SocialButton";
import emailIcon from "../../assets/icons/email.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import googleIcon from "../../assets/icons/google.svg";

/*
 * ForgotPassword Page (Updated to match NewPassword)
 * Performance Note: Wrapped with React.memo to prevent unnecessary re-renders
 * Security Note: Avoid inline scripts to mitigate XSS attacks
 * Accessibility Note: Added semantic HTML and aria-labels
 */
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle new password logic (e.g., API call)
  };

  return (
    <AuthLayout showSidebar={false}>
      <div className={styles.forgotPassword}>
        <h1 className={styles.title}>Forgot Password</h1>
        <p className={styles.subtitle}>
          Don’t worry, happens to all of us. Enter your email below to recover
          your password
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            type="email"
            placeholder="Email Address"
            icon={emailIcon}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ariaLabel="Email address"
          />
          <Button
            type="submit"
            className="btn btn-lg"
            ariaLabel="Set email address"
            disabled={!email}
          >
            Send Code
          </Button>
        </form>
        <div className={styles.divider}>OR</div>
        <div className={styles.social}>
          <SocialButton
            className="socialButtonFacebook"
            icon={facebookIcon}
            ariaLabel="Continue with Facebook"
          >
            Continue with Facebook
          </SocialButton>
          <SocialButton icon={googleIcon} ariaLabel="Continue with Google">
            Continue with Google
          </SocialButton>
        </div>
      </div>
    </AuthLayout>
  );
};

export default React.memo(ForgotPassword);
