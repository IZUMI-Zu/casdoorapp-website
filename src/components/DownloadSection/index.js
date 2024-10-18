import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function DownloadSection() {
  return (
    <section className={styles.downloadSection}>
      <div className="container">
        <h2>Download the app</h2>
        <p>Get started with Casdoor Authenticator App today!</p>
        <div className={styles.downloadButtons}>
          <Link
            className={`${styles.primaryButton} button--lg button`}
            to="https://github.com/casdoor/casdoor-app/releases/latest">
            Download for Android
          </Link>
          <Link
            className={`${styles.secondaryButton} button--lg button`}
            to="https://github.com/casdoor/casdoor-app">
            View on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
