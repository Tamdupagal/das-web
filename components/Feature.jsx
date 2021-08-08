import React from 'react';
import SectionHeader from './SectionHeader';
import FeatureDetails from './FeatureDetails';
import styles from './Feature.module.scss';
import { DATA } from '../helpers/Data';



function Feature() {
    return (
        <section className={styles.container}>
            <div className={styles.section__header}>
                <SectionHeader text="Key Principles of growth"/>
            </div>
            <div className={styles.feature__box}>
                {DATA().growth.map((item) => {
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

export default Feature
