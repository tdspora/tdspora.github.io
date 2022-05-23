import React from "react";
import clsx from "clsx";
import {ButtonView} from "../ButtonView";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from './homepageHeader.module.css'
import useBaseUrl from '@docusaurus/useBaseUrl';


export function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <header className={clsx(styles.header)}>
            <div className="container">
                <div className={clsx(styles.headerContent)}>
                    <h1 className={clsx(styles.title)}>{siteConfig.tagline}</h1>
                    <p className={clsx(styles.subtitle)}>Solution powered by <span>Machine Learning</span></p>
                    <ButtonView>Request a Demo</ButtonView>
                </div>
                <div >
                    <img
                        src={useBaseUrl('/img/under_construction_illustration.svg')}
                        alt="app interfaces"
                        className=""
                    />
                </div>
            </div>
        </header>
    );
}