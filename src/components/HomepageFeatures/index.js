import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {ButtonView} from "../ButtonView";

const FeatureList = [
  {
    title: 'Data Subsetting',
    path: '/img/pipeline-wizard.jpg',
    description: 'The process of creating a smaller referentially correct copy of a larger database. After subsetting, the cut-down database remains perfectly usable - the data is referentially correct and internally consistent.',
  },
  {
    title: 'Data Migration',
      path: '/img/pipeline-wizard.jpg',
      description: 'It is a transfer of the existing historical data to new storage, system, or file format. It involves a lot of preparation and post-migration activities including planning, creating backups, quality testing, and validation of results.',
  },
];

function Feature({path, title, description}) {
  return (
    <li className={clsx(styles.feature)}>
        <div className={clsx(styles.messages)}>
            <h3>{title}</h3>
            <p>{description}</p>
            <ButtonView>Try for free</ButtonView>
        </div>
        <div className={clsx(styles.featureImageWrapper)}>
            <img src={useBaseUrl(path)} alt={title} />
        </div>
    </li>
  );
}

export default function HomepageFeatures() {
  return (
      <div className={clsx(styles.featuresContainer)}>
        <ul className={clsx(styles.featureList)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </ul>
      </div>
  );
}
