import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import SocialButton from "../../components/SocialButton/SocialButton";
import emailIcon from "../../assets/icons/email.svg";
import lockIcon from "../../assets/icons/lock.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import googleIcon from "../../assets/icons/google.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic (e.g., API call)
  };

  return (
    <AuthLayout showSidebar={true}>
      <div className={styles.login}>
        <h1 className={styles.title}>Welcome to Invest World</h1>
        <p className={styles.subtitle}>Login to continue</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            id="email"
            type="email"
            placeholder="Email Address"
            icon={emailIcon}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ariaLabel="Email address"
          />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            icon={lockIcon}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ariaLabel="Password"
          />
          <div className={styles.options}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                aria-label="Remember me"
              />
              Remember me
            </label>
            <Link to="/forgot-password" className={styles.forgotLink}>
              Forgot Password?
            </Link>
          </div>
          <Button type="submit" className="btn btn-lg" ariaLabel="Login">
            Login
          </Button>
        </form>
        <div className={styles.divider}>OR</div>
        <div className={styles.social}>
          <SocialButton
            icon={facebookIcon}
            className="socialButtonFacebook"
            ariaLabel="Continue with Facebook"
          >
            Continue with Facebook
          </SocialButton>
          <SocialButton icon={googleIcon} ariaLabel="Continue with Google">
            Continue with Google
          </SocialButton>
        </div>
        <p className={styles.register}>
          Don’t have an account?{" "}
          <Link to="/signup" className={styles.registerLink}>
            Register
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default React.memo(Login);
