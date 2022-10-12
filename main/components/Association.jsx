import Image from 'next/image';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'
import about from '../assets/association.svg'
import styles from './Association.module.scss';


function Association() {
    return (
        <section className={styles.container} >
            <h1 className={styles.heading}>
                With our Association you will gain
            </h1>
            <div className={styles.wrapper} data-aos="fade-up"  data-aos-anchor-placement="center-bottom">
    

                <div className={styles.footer_text}>
                    <ul>
                        <strong>Ouality Outcome</strong>
                        <li><FaCheckCircle className={styles.check} />Learning Life and technology</li>
                        <li><FaCheckCircle className={styles.check} />Digitally Aided Support</li>
                    </ul>&nbsp;&nbsp;&nbsp;&nbsp;
                    <ul>
                        <strong>State of the Art Technology</strong>
                        <li><FaCheckCircle className={styles.check} />Latest Tech</li>
                        <li><FaCheckCircle className={styles.check} />User Friendly</li>
                    </ul>&nbsp;&nbsp;&nbsp;&nbsp;
                    <ul>
                        <strong>Achievement Driven Support</strong>
                        <li><FaCheckCircle className={styles.check} />Endless support till Achievement</li>
                        <li><FaCheckCircle className={styles.check} />Deadlines</li>
                    </ul> &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>

        </section>
    )
}

export default Association