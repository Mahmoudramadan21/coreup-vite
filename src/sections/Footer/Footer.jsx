import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import linkedinIcon from "../../assets/icons/linkedin.svg";

/*
 * Footer component with links, newsletter form, and contact info
 * Performance Note: Use WebP for LinkedIn icon and added width/height to prevent layout shifts
 * Accessibility Note: Ensure links are distinguishable beyond color (handled in Footer.module.scss)
 */
const Footer = () => {
  const newsletterCheckboxId = "newsletter-consent";

  return (
    <footer className={styles.footer}>
      <div className={`${styles["footer__container"]} container`}>
        {/* Main Columns */}
        <div className={styles["footer__columns"]}>
          {/* Platform Column */}
          <div className={styles["footer__column"]}>
            <h2 className={styles["footer__column-title"]}>Platform</h2>
            <ul className={styles["footer__column-list"]}>
              <li className={styles["footer__column-item"]}>
                <Link
                  to="/startups"
                  className={styles["footer__column-link"]}
                  aria-label="Navigate to Startups page"
                >
                  Startups
                </Link>
              </li>
              <li className={styles["footer__column-item"]}>
                <Link
                  to="/investors"
                  className={styles["footer__column-link"]}
                  aria-label="Navigate to Investors page"
                >
                  Investors
                </Link>
              </li>
              <li className={styles["footer__column-item"]}>
                <Link
                  to="/job-seeker"
                  className={styles["footer__column-link"]}
                  aria-label="Navigate to Job Seeker page"
                >
                  Job Seeker
                </Link>
              </li>
              <li className={styles["footer__column-item"]}>
                <Link
                  to="/messages"
                  className={styles["footer__column-link"]}
                  aria-label="Navigate to Messages page"
                >
                  Messages
                </Link>
              </li>
              <li className={styles["footer__column-item"]}>
                <Link
                  to="/faqs"
                  className={styles["footer__column-link"]}
                  aria-label="Navigate to FAQs page"
                >
                  FAQs
                </Link>
              </li>
              <li className={styles["footer__column-item"]}>
                <Link
                  to="/help"
                  className={styles["footer__column-link"]}
                  aria-label="Navigate to Help page"
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className={styles["footer__column"]}>
            <h2 className={styles["footer__column-title"]}>Resources</h2>
            <ul className={styles["footer__column-list"]}>
              <li className={styles["footer__column-item"]}>
                <Link
                  to="/blog"
                  className={styles["footer__column-link"]}
                  aria-label="Navigate to Blog page"
                >
                  Blog
                </Link>
              </li>
              <li className={styles["footer__column-item"]}>
                <Link
                  to="/portfolio"
                  className={styles["footer__column-link"]}
                  aria-label="Navigate to Portfolio page"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className={styles["footer__column"]}>
            <h2 className={styles["footer__column-title"]}>Company</h2>
            <ul className={styles["footer__column-list"]}>
              <li className={styles["footer__column-item"]}>
                <Link
                  to="/careers"
                  className={styles["footer__column-link"]}
                  aria-label="Navigate to Careers page"
                >
                  Careers
                </Link>
              </li>
              <li className={styles["footer__column-item"]}>
                <Link
                  to="/terms"
                  className={styles["footer__column-link"]}
                  aria-label="Navigate to Terms of Service page"
                >
                  Terms of Service
                </Link>
              </li>
              <li className={styles["footer__column-item"]}>
                <Link
                  to="/privacy"
                  className={styles["footer__column-link"]}
                  aria-label="Navigate to Privacy Policy page"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className={styles["footer__column-item"]}>
                <Link
                  to="/cookies"
                  className={styles["footer__column-link"]}
                  aria-label="Navigate to Cookies Policy page"
                >
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className={styles["footer__column"]}>
            <h2 className={styles["footer__column-title"]}>
              Subscribe newsletter
            </h2>
            <form
              className={styles["footer__newsletter-form"]}
              aria-describedby="newsletter-description"
            >
              <div className={styles["footer__newsletter-input-wrapper"]}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles["footer__newsletter-input"]}
                  aria-label="Enter your email to subscribe to newsletter"
                />
                <button
                  type="submit"
                  className={styles["footer__newsletter-button"]}
                  aria-label="Submit newsletter subscription"
                >
                  →
                </button>
              </div>
              <p
                id="newsletter-description"
                className={styles["footer__newsletter-description"]}
              >
                Subscribe to receive updates and news from Coreup.
              </p>
              <label
                htmlFor={newsletterCheckboxId}
                className={styles["footer__newsletter-checkbox"]}
              >
                <input
                  type="checkbox"
                  id={newsletterCheckboxId}
                  className={styles["footer__newsletter-checkbox-input"]}
                />
                <span className={styles["footer__newsletter-checkbox-text"]}>
                  I agree my personal data to be stored and processed for online
                  communication.{" "}
                  <Link
                    to="/privacy"
                    className={styles["footer__newsletter-link"]}
                    aria-label="Read more about our privacy policy"
                  >
                    Read more
                  </Link>
                </span>
              </label>
            </form>
          </div>
        </div>

        {/* Contact and Copyright */}
        <div className={styles["footer__bottom"]}>
          <div className={styles["footer__contact"]}>
            <div className={styles["footer__contact-follow"]}>
              <span className={styles["footer__contact-label"]}>Follow us</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["footer__contact-icon"]}
                aria-label="Follow Coreup on LinkedIn"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn icon"
                  loading="lazy"
                  width="20"
                  height="20"
                />
              </a>
            </div>
            <div className={styles["footer__contact-emails"]}>
              <a
                href="mailto:office@coreup.com"
                className={styles["footer__contact-email"]}
              >
                office@coreup.com
              </a>
              <a
                href="mailto:media@coreup.com"
                className={styles["footer__contact-email"]}
              >
                media@coreup.com
              </a>
            </div>
          </div>
          <div className={styles["footer__copyright"]}>
            <p>© 2025 Coreup. All rights reserved.</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className={styles["footer__disclaimer"]}>
          <p>
            The material presented via this website is for informational
            purposes only. Nothing on this website constitutes a solicitation
            for the purchase or sale of any financial product or service.
            Material presented on this website does not constitute a public
            offering of securities or investment services in any jurisdiction.
            Investing in startup and early stage companies involves risks,
            including loss of dividends, loss of investment and dilution, and it
            should be done only as part of a diversified portfolio. The
            investments presented in this website are suitable only for
            investors who are sufficiently experienced to understand these risks
            and make their own investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
