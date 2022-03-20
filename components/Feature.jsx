import React from 'react';
import SectionHeader from './SectionHeader';
import FeatureDetails from './FeatureDetails';
import styles from './Feature.module.scss';
import { DATA } from '../helpers/Data';


function Feature({ data }) {
    
    const style = {
    display: "flex",
    flexDirection : "column",
    alignItems: "flex-start",
    marginLeft : '4rem',
}

    return (
        <section className={styles.container}>
            <div className={styles.section__header}>
                <SectionHeader text="HIGHLIGHTS OF THE PROGRAM"/>
            </div>
            <div className={styles.feature__box}>
                {data.map((item) => {
                    return (
                        <div  className={styles.feature} key={item.id}>
                            <FeatureDetails style={style} {...item}/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Feature
