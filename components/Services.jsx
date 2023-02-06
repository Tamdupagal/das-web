import React, { useState } from 'react'
import styles from './Services.module.scss';
import SectionHeader from './SectionHeader';
import FeatureDetails from './FeatureDetails';
import { GoPrimitiveDot as Dot } from 'react-icons/go'


function Services({ data, className}) {
    

    return (
        <section className={styles.container}>
            <div className={styles.content__box}>
                <div className={styles.service__header}>
                    <SectionHeader slogan="OBJECTIVES" text="Start getting Industry ready Identified & solve problems for companies 
Build a strong foundation for the gaming industry." />
<div className={styles.sec}>
                <div className={styles.divi}>
                <h5>Understanding Programming & Logic</h5>
                <li>Web3 Game Development</li>
                <li>Creative & Problem solving skills.</li>
                </div>
                <div className={styles.divi}>
                <h5>Structured Curriculum</h5>
                <li>Build, run, analyze and optimize web3 games</li>
                <li>Set up and run basic games from scratch.</li>
                </div>
                </div>
                </div>            
                </div>
        </section >
    )
}

export default Services
