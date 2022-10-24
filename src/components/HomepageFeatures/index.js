import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Lernen und Lehren",
    Svg: require("@site/static/img/educator.svg").default,
    description: (
      <>
        Lehrkräfte müssen sich stetig weiterbilden. Diese Website hilft dir
        dabei, den Lehr- und Lernprozess digitaler zu gestalten.
      </>
    ),
  },
  {
    title: "Kinderleicht",
    Svg: require("@site/static/img/easy.svg").default,
    description: (
      <>
        Digitalisierung ist nicht einfach - aber dieses Wiki macht die
        Einbindung digitaler Tools und Methoden in deinen Unterricht super
        einfach!
      </>
    ),
  },
  {
    title: "Community",
    Svg: require("@site/static/img/community.svg").default,
    description: (
      <>
        Dieses Wiki ist Open Source. Jeder kann demnach Änderungs- und
        Ergänzungsanträge stellen, die bei der Weiterentwicklung dieser Sammlung
        mit einbezogen werden.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
