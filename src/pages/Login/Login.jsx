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

// Login page for user authentication
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
        <div className={styles.login__container}>
          {/* Page Title */}
          <h1 className={styles.login__title}>Welcome to Invest World</h1>
          {/* Page Subtitle */}
          <p className={styles.login__subtitle}>Login to continue</p>
          {/* Login Form */}
          <form onSubmit={handleSubmit} className={styles.login__form}>
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
            {/* Form Options */}
            <div className={styles.login__options}>
              <label className={styles.login__checkbox}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  aria-label="Remember me"
                />
                Remember me
              </label>
              <Link to="/forgot-password" className={styles.login__forgotLink}>
                Forgot Password?
              </Link>
            </div>
            <Button
              type="submit"
              className="button button--lg"
              ariaLabel="Login"
            >
              Login
            </Button>
          </form>
          {/* Divider */}
          <div className={styles.login__divider}>OR</div>
          {/* Social Login Options */}
          <div className={styles.login__social}>
            <SocialButton
              icon={facebookIcon}
              className="socialButton--facebook"
              ariaLabel="Continue with Facebook"
            >
              Continue with Facebook
            </SocialButton>
            <SocialButton icon={googleIcon} ariaLabel="Continue with Google">
              Continue with Google
            </SocialButton>
          </div>
          {/* Register Link */}
          <p className={styles.login__register}>
            Don’t have an account?{" "}
            <Link to="/signup" className={styles.login__registerLink}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default React.memo(Login);
