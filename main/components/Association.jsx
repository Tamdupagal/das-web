import Image from 'next/image';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'
import about from '../assets/With-Association-01.svg'
import styles from './Association.module.scss';

function Association() {
    return (
        <section className={styles.container}>
            <h1 className={styles.heading}>
                With our Association you will gain
            </h1>
            <div className={styles.wrapper}>
                <figure className={styles.img}>
                    <Image src={about} layout="responsive" objectFit="contain" alt="Association"/>
                </figure>

                <div className={styles.footer_text}>
                        <ul>
                            <strong>Ouality Outcome</strong>
                            <li><FaCheckCircle className={styles.check} />Learning Life and technology</li>
                            <li><FaCheckCircle className={styles.check} />Digitally Aided Support</li>
                        </ul>
                        <ul>
                            <strong>State of the Art Technology</strong>
                            <li><FaCheckCircle className={styles.check} />Latest Tech</li>
                            <li><FaCheckCircle className={styles.check} />User Friendly</li>
                        </ul>
                        <ul>
                            <strong>Achievement Driven Support</strong>
                            <li><FaCheckCircle className={styles.check} />Endless support till Achievement</li>
                            <li><FaCheckCircle className={styles.check} />Deadlines</li>
                        </ul>
                    </div>
            </div>

        </section>
    )
}

export default Association
