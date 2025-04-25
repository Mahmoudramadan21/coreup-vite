import React, { useState } from "react";
import styles from "./NewPassword.module.scss";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import lockIcon from "../../assets/icons/lock.svg";

// NewPassword page for setting a new password
const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const calculatePasswordStrength = (value) => {
    let strength = 0;
    if (value.length > 0) strength += 25;
    if (value.length >= 8) strength += 25;
    if (/[A-Z]/.test(value)) strength += 25;
    if (/[0-9]/.test(value) || /[!@#$%^&*]/.test(value)) strength += 25;
    return strength;
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordStrength(calculatePasswordStrength(value));
    setPasswordMatch(value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordMatch(value === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return;
    // Handle new password logic (e.g., API call)
  };

  return (
    <AuthLayout showSidebar={false}>
      <div className={styles.newPassword}>
        {/* Page Title */}
        <h1 className={styles.newPassword__title}>Set a new password</h1>
        {/* Page Subtitle */}
        <p className={styles.newPassword__subtitle}>
          Your previous password has been reset. Please set a new password for
          your account.
        </p>
        {/* Password Form */}
        <form onSubmit={handleSubmit} className={styles.newPassword__form}>
          <Input
            id="password"
            type="password"
            placeholder="New Password"
            icon={lockIcon}
            value={password}
            onChange={handlePasswordChange}
            ariaLabel="New password"
          />
          {/* Password Strength Bar */}
          <div className={styles.newPassword__strength}>
            <div
              className={styles.newPassword__strengthBar}
              style={{ width: `${passwordStrength}%` }}
            ></div>
          </div>
          <Input
            id="confirm-password"
            type="password"
            placeholder="Confirm New Password"
            icon={lockIcon}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            ariaLabel="Confirm new password"
          />
          {!passwordMatch && (
            <p className={styles.newPassword__error}>Passwords do not match</p>
          )}
          <Button
            type="submit"
            className="button button--lg"
            ariaLabel="Set password"
            disabled={
              !password ||
              !confirmPassword ||
              !passwordMatch ||
              passwordStrength < 75
            }
          >
            Set Password
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default React.memo(NewPassword);
