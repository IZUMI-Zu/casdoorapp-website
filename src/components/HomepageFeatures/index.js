import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Multi-Factor Authentication",
    Svg: require("@site/static/img/home/security.svg").default,
    description: (
      <>
        Secure your accounts with TOTP-based multi-factor authentication,
        generating time-based one-time passwords for enhanced security.
      </>
    ),
  },
  {
    title: "Cross-Platform Support",
    Svg: require("@site/static/img/home/devices.svg").default,
    description: (
      <>
        Available for both iOS and Android, ensuring you can use Casdoor
        Authenticator on your preferred mobile device.
      </>
    ),
  },
  {
    title: "Seamless Integration",
    Svg: require("@site/static/img/home/connection.svg").default,
    description: (
      <>
        Easily integrate with Casdoor&apos;s central service and desktop client
        for a unified authentication experience across your devices.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
