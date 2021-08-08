import React from 'react';
import { DATA } from '../helpers/Data';
import FeatureDetails from './FeatureDetails';
import SectionHeader from './SectionHeader';
import styles from './QualityFeature.module.scss';

function QualityFeature() {
    return (
        <section className={styles.container} id='features'>
            <div className={styles.section__header}>
                <SectionHeader text="WHATS WILL YOU LEARN"/>
            </div>
            <div className={styles.features}>
                {DATA().learning.map(item => {
                    return (
                        <div className={styles.feature} key={item.id}>
                            <FeatureDetails {...item}/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default QualityFeature
