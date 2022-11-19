import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './TestimonialCard.module.scss';


// <figure>
//         <Image src={props.avatar} alt={props.name} layout="fill"/>
//         </figure>
function TestimonialCard(props) {

    return (
        <div className={styles.card}>
          
        <div className={styles.author__box}>
        
        <div className={styles.author__about}>
        <p className={styles.author__name}>{props.name} </p>
        </div>
        <ul className={styles.review__star}>
                {[0,1,2,3,4].map(item => {
                    return (
                        <motion.li key={item} data-color={props.review - item >= 1 && true}>
                            <FaStar className={styles.star}/>
                        </motion.li>
                    )
                })}
                </ul>
        <p className={styles.desc}>{props.description}</p>
            </div>
        </div>
    )
}

export default TestimonialCard
