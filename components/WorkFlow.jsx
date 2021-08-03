import React from 'react';
import {WORKFLOW_DATA } from '../helpers/WorkFlow';
import FeatureDetails from './FeatureDetails';
import SectionHeader from './SectionHeader';
import styles from './WorkFlow.module.scss';

function WorkFlow() {
    return (
        <section className={styles.container}>
            <div className={styles.section__header}>
                <SectionHeader isWhite slogan="WHATS THE FUNCTION" text="Let’s see how it works"/>
            </div>
            <div className={styles.content__box}>
                {WORKFLOW_DATA().map(item => {
                    return (
                        <div className={styles.workflow__box} key={item.id}>
                            <FeatureDetails {...item} isWhite/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default WorkFlow
