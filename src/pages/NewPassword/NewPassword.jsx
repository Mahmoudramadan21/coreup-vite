import React, { useState } from "react";
import styles from "./NewPassword.module.scss";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import lockIcon from "../../assets/icons/lock.svg";

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
        <h1 className={styles.title}>Set a new password</h1>
        <p className={styles.subtitle}>
          Your previous password has been reset. Please set a new password for
          your account.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            id="password"
            type="password"
            placeholder="New Password"
            icon={lockIcon}
            value={password}
            onChange={handlePasswordChange}
            ariaLabel="New password"
          />
          <div className={styles.strength}>
            <div
              className={styles.strengthBar}
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
            <p className={styles.error}>Passwords do not match</p>
          )}
          <Button
            type="submit"
            className="btn btn-lg"
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
