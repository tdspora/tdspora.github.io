import React from "react";
import clsx from "clsx";
import styles from "./underConstructionComponent.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export function UnderConstructionComponent() {
  return (
    <div className={clsx(styles.wrapper)}>
      <img
        src={useBaseUrl("/img/under_construction_illustration.svg")}
        alt="laying cat on the planet"
        className={styles.illustration}
      />
      <div className={clsx(styles.messages)}>
        <h1 className={clsx(styles.title)}>This page is under construction!</h1>
        <p className={clsx(styles.description)}>
          We are currently working on this page and will be back soon. If you
          have any questions contact us at{" "}
          <a href="mailto: supportepmc-tdm@epam.com">
            supportepmc-tdm@epam.com
          </a>
        </p>
      </div>
    </div>
  );
}
