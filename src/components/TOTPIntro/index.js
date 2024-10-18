import React from "react";
import styles from "./styles.module.css";

export default function TOTPIntro() {
  return (
    <section className={styles.totpIntro}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2>What is TOTP?</h2>
            <p>
              TOTP (Time-based One-Time Password) is a widely used algorithm that generates temporary, single-use passwords.
              It enhances security by providing a second factor of authentication, typically used in addition to a regular password.
              TOTP codes change every 30 seconds, making them highly secure against unauthorized access.
            </p>
            <ul>
              <li>Enhances account security</li>
              <li>Time-based, changing every 30 seconds</li>
              <li>Widely supported by many services and apps</li>
              <li>Easy to use with mobile authenticator apps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
