import React, { useState } from 'react'
import styles from './Services.module.scss';
import SectionHeader from './SectionHeader';
import FeatureDetails from './FeatureDetails';



function Services({ data, className}) {
    

    return (
        <section className={styles.container}>
            <figure className={styles.service__img}/>
            <div className={styles.content__box}>
                <div className={styles.service__header}>
                    <SectionHeader slogan="ACHIEVEMENT" text="Be Industry ready
Come up with new ideas for DM 
Identified & solve DM problems for companies " />
                </div>
                {data.map(item => {
                    return (
                        <div className={styles.feature__box} key={item.id}>
                            <FeatureDetails {...item} className={className}/>
                        </div>
                    )
                })}
            </div>            
        </section >
    )
}

export default Services
