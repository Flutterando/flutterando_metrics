import Translate, { translate } from '@docusaurus/Translate';
import clsx from 'clsx';
import React from 'react';
import styles from './HomepageFeatures.module.css';



const FeatureList = [
  {
    title: translate({ message: 'featureList.code' }),
    Svg: require('../../static/img/quality.svg').default,
    description: (
      <Translate>
        featureList.code.description
      </Translate>
    ),
  },
  {
    title: translate({ message: 'featureList.cicd' }),
    Svg: require('../../static/img/ci.svg').default,
    description: (
      <Translate>
        featureList.cicd.description
      </Translate>
    ),
  },
  {
    title: translate({ message: 'featureList.community' }),
    Svg: require('../../static/img/feedback.svg').default,
    description: (
      <Translate>
        featureList.community.description
      </Translate>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.featuresRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
