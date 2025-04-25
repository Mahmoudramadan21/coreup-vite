import React from "react";
import styles from "./AuthSidebar.module.scss";
import handshakeImage from "../../assets/handshake.png";
import logo from "../../assets/logo-white.svg";

/*
 * AuthSidebar section for the login page
 * Performance Note: Set loading="eager" for critical image to improve LCP
 * Accessibility Note: Added alt text for images
 */
const AuthSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.image}>
        <img
          src={handshakeImage}
          alt="Illustration of a handshake representing investment partnerships"
          loading="eager"
          // width="300"
          // height="300"
        />
      </div>
    </aside>
  );
};

export default React.memo(AuthSidebar);
