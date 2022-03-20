import React from 'react'
import { DATA } from '../helpers/Data'
import styles from './CoreFeature.module.scss'
import FeatureDetails from './FeatureDetails'
import SectionHeader from './SectionHeader'


const style = {
    display: "flex",
    flexDirection : "column",
    alignItems: "flex-start",
}

function CoreFeature({ data, btnText}) {
    return (
        <section className={styles.container}>
            <div className={styles.content__box}>
                <div className={styles.section__header}>
                <SectionHeader slogan="ABOUT THE PROGRAM" text="MASTERS/PROFESSIONAL CERTIFICATION IN 
Fullstack Digital Marketing"/>
                </div>
                <div className={styles.feature__box}>
                    <FeatureDetails style={style} description={data} btnText={btnText}/>
                </div>
            </div>
            <figure className={styles.section__img}>
            </figure>
        </section>
    )
}

export default CoreFeature
