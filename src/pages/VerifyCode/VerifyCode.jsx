import React, { useState } from "react";
import styles from "./VerifyCode.module.scss";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const VerifyCode = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Submitted code:", code);
    navigate("/new-password");
  };

  return (
    <AuthLayout showSidebar={false}>
      <div className={styles.verifyCode}>
        <h1 className={styles.title}>Verify Code</h1>
        <p className={styles.subtitle}>
          An authentication code has been sent to your email.
        </p>
        <div className={styles.form}>
          <Input
            type="text"
            placeholder="Enter Code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              console.log("Code updated:", e.target.value);
            }}
            ariaLabel="Verification code"
          />
          <Button
            onClick={handleClick}
            type="button"
            className="btn btn-lg"
            ariaLabel="Send code"
            disabled={!code}
          >
            Send Code
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default React.memo(VerifyCode);
