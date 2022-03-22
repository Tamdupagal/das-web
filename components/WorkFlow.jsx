import React from 'react';
import {WORKFLOW_DATA } from '../helpers/WorkFlow';
import SectionHeader from './SectionHeader';
import styles from './WorkFlow.module.scss';

function WorkFlow() {
    return (
        <section className={styles.container}>
            <div className={styles.section__header}>
                <SectionHeader isWhite slogan="ADMISSION PROCESS" text="Let’s see how it works"/>
            </div>
            <div className={styles.content__box}>
                {WORKFLOW_DATA().map(({pattern, title, id}) => {
                    return (
                        <div className={styles.workflow__box} key={id}>
                            <div className={styles.workflow__icon}>
                                <span>{"0" + id}</span>
                                {pattern === 'even' ?
                                    <svg className={styles.arrow__even} width="204" height="43" viewBox="0 0 204 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.481201 10.2571C0.481201 10.2571 92.7812 81.7847 195.481 10.2571" stroke="#C2CBDE" strokeWidth="2" strokeDasharray="5 5"/>
                                        <path d="M180.7 3.47455C180.7 3.47455 199.815 -2.05177 201.637 4.20916C203.459 10.4701 202.093 16.9444 196.176 25.8142" stroke="#C2CBDE" strokeWidth="2" strokeDasharray="4 4"/>
                                    </svg>
                                    : pattern === 'odd' && <svg className={styles.arrow__odd} width="204" height="43" viewBox="0 0 204 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.999756 32.7195C0.999756 32.7195 93.2998 -38.8081 196 32.7195" stroke="#C2CBDE" strokeWidth="2" strokeDasharray="5 5"/>
                                        <path d="M181.219 39.4976C181.219 39.4976 200.334 45.024 202.156 38.763C203.978 32.5019 202.611 26.0275 196.694 17.1575" stroke="#C2CBDE" strokeWidth="2" strokeDasharray="4 4"/>
                                    </svg>}
                            </div>
                            <h1 className={styles.title}>
                                    {title}
                             </h1>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default WorkFlow
