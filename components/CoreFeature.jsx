import React from 'react'
import { DATA } from '../helpers/Data'
import styles from './CoreFeature.module.scss'
import FeatureDetails from './FeatureDetails'
import SectionHeader from './SectionHeader'

function CoreFeature() {
    return (
        <section className={styles.container}>
            <div className={styles.content__box}>
                <div className={styles.section__header}>
                    <SectionHeader slogan="CORE FEATURES" text="MASTERS/PROFESSIONAL CERTIFICATION IN
Fullstack Digital Marketing"/>
                </div>
                <div className={styles.feature__box}>
                    <FeatureDetails text={DATA().coreFeature.description} btnText={DATA().coreFeature.buttonText}/>
                </div>
            </div>
            <figure className={styles.section__img}>
            </figure>
        </section>
    )
}

export default CoreFeature
