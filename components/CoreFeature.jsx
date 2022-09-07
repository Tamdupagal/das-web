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
// <figure className={styles.section__img}>
// </figure>

function CoreFeature({ data, btnText,title}) {
    return (
        <section className={styles.container}>
            <div className={styles.content__box}>
                <div className={styles.section__header}>
                <SectionHeader slogan="ABOUT THE PROGRAM" title={title}/>
                </div>
                <div className={styles.feature__box}>
                    <FeatureDetails style={style} description={data} btnText={btnText}/>
                </div>
            </div>
        </section>
    )
}

export default CoreFeature
