import React from 'react';
import FeatureDetails from './FeatureDetails';
import SectionHeader from './SectionHeader';
import styles from './QualityFeature.module.scss';


const style = {
    display: "flex",
    flexDirection : "column",
    alignItems: "flex-start",
}

function QualityFeature({data}) {
    return (
        <section className={styles.container} id='features'>
            <div className={styles.section__header}>
                <SectionHeader text="WHAT WILL YOU LEARN"/>
            </div>
            <div className={styles.features}>
                {data.map(item => {
                    return (
                        <div className={styles.feature} key={item.id}>
                            <FeatureDetails style={style} {...item} offset={true} leftMargin={true}/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default QualityFeature
