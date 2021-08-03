import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './TestimonialCard.module.scss';

function TestimonialCard(props) {

    return (
        <div className={styles.card}>
            <ul className={styles.review__star}>
                {[0,1,2,3,4].map(item => {
                    return (
                        <motion.li key={item} data-color={props.review - item >= 1 && true}>
                            <FaStar className={styles.star}/>
                        </motion.li>
                    )
                })}
            </ul>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.desc}>{props.description}</p>
            <div className={styles.author__box}>
                <figure>
                    <Image src={props.avatar} alt={props.name} layout="fill"/>
                </figure>
                <div className={styles.author__about}>
                    <p className={styles.author__name}>{props.name} </p>
                    <p className={styles.author__designation}>{props.designation}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
