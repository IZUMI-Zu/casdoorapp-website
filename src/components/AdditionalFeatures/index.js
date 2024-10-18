import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faMobileAlt, faQrcode, faShieldAlt, faSync, faUserLock} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

const features = [
  {
    title: "Easy Account Setup",
    description: "Quickly add accounts by scanning QR codes for seamless TOTP integration.",
    icon: faQrcode,
  },
  {
    title: "Account Synchronization",
    description: "Securely sync your accounts across devices with Casdoor's central service.",
    icon: faSync,
  },
  {
    title: "Enhanced Security",
    description: "Protect your accounts with time-based one-time passwords for multi-factor authentication.",
    icon: faShieldAlt,
  },
  {
    title: "Time-Based Codes",
    description: "Generate secure, time-based one-time passwords that change every 30 seconds.",
    icon: faClock,
  },
  {
    title: "Multi-Device Support",
    description: "Access your TOTP codes on multiple devices, ensuring you're always protected.",
    icon: faMobileAlt,
  },
  {
    title: "Privacy-Focused",
    description: "Your security is our priority. All data is encrypted and stored securely.",
    icon: faUserLock,
  },
];

function AdditionalFeatures() {
  return (
    <section className={styles.additionalFeatures}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Additional Features</h2>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FontAwesomeIcon icon={feature.icon} size="2x" />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdditionalFeatures;
