import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from './homepageHeader.module.css'

export function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <header className={clsx(styles.header)}>
            <div className="container">
                <div className={clsx(styles.headerContent)}>
                    <h1 className={clsx(styles.title)}>{siteConfig.tagline}</h1>
                    <p className={clsx(styles.subtitle)}>Solution powered by <span>Machine Learning</span></p>
                    <button>Request a Demo</button>
                </div>

            </div>
        </header>
    );
}