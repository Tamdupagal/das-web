import React, { useState } from 'react'
import styles from './Services.module.scss';
import SectionHeader from './SectionHeader';
import FeatureDetails from './FeatureDetails';



// <figure className={styles.service__img}/>
function Services({ data, className}) {
    

    return (
        <section className={styles.container}>
            <div className={styles.content__box}>
                <div className={styles.service__header}>
                    <SectionHeader slogan="ACHIEVEMENT" text="Start getting Industry ready
Identified & solve problems for companies 
Build a strong foundation for the gaming industry.
                    " />
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
