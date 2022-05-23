import React from 'react';
import clsx from "clsx";
import styles from './buttonView.module.css'

export function ButtonView({children}) {
    return <button className={clsx(styles.button)}>{children}</button>
}