import React, { useState } from "react";
import styles from "./ForgotPassword.module.scss";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import SocialButton from "../../components/SocialButton/SocialButton";
import emailIcon from "../../assets/icons/email.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import googleIcon from "../../assets/icons/google.svg";

// ForgotPassword page for password recovery
// Handles email input and social login options
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password recovery logic (e.g., API call)
  };

  return (
    <AuthLayout showSidebar={false}>
      <div className={styles.forgotPassword}>
        {/* Page Title */}
        <h1 className={styles.forgotPassword__title}>Forgot Password</h1>
        {/* Page Subtitle */}
        <p className={styles.forgotPassword__subtitle}>
          Don’t worry, happens to all of us. Enter your email below to recover
          your password
        </p>
        {/* Recovery Form */}
        <form onSubmit={handleSubmit} className={styles.forgotPassword__form}>
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
            className="button button--lg"
            ariaLabel="Set email address"
            disabled={!email}
          >
            Send Code
          </Button>
        </form>
        {/* Divider */}
        <div className={styles.forgotPassword__divider}>OR</div>
        {/* Social Login Options */}
        <div className={styles.forgotPassword__social}>
          <SocialButton
            className="socialButton--facebook"
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
