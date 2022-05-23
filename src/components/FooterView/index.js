import React from "react";
import clsx from "clsx";
import styles from './footerView.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";

export function FooterView() {
    return (
        <footer className={clsx(styles.footer)}>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.logoContainer)}>
                    <span className={clsx(styles.creditsMessage)}>Sponsored by</span>
                    <div className={clsx(styles.logoImgContainer)}>
                        <img src={useBaseUrl('/img/epam-logo.svg')} alt=""/>
                    </div>
                </div>
            </div>
        </footer>
    )
}