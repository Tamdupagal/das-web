import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

import styles from './TestimonialCard.module.scss';
import Image from 'next/image';

function TestimonialCard(props) {
    console.log(props.img)
    return (
        <div className={styles.card} data-aos="zoom-in-down">
            {/* <h2 className={styles.title}>{props.title}</h2> */}

            <p className={styles.desc}>{props.description}</p>
            <div className={styles.author__box}>

                <ul className={styles.review__star}>
                    {[0, 1, 2, 3, 4].map(item => {
                        return (
                            <motion.li key={item} data-color={props.review - item >= 1 && true}>
                                <FaStar className={styles.star} />
                            </motion.li>
                        )
                    })}
                </ul>

                <div className={styles.author__about}>

                    <Image  src={props.img} alt={props.name} width={50} height={50}/>
                    <div style={{marginLeft:"10px"}}>
                        <p className={styles.author__name}>{props.name} </p>
                        <p className={styles.author__designation}>{props.designation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
