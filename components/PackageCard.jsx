import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import styles from './PackageCard.module.scss';



const point_variant = {
    initial: {
        x: "-10rem",
        opacity: 0,
    },
    vissible: {
        x: 0,
        opacity: 1,
    }
}

function PackageCard(props) {
    return (
        <div className={styles.card}>
            <h1 className={styles.plan__name}>{props.name}</h1>
            <p className={styles.plan__desc}>{props.description}</p>
            <motion.div className={styles.plan__points} transition={{staggerChildren: 0.05, delayChildren: 0.1}} animate="vissible" initial="initial" >
            {props.points.map(item => {
                return (
                    <motion.div className={styles.plan__point} key={item.id} variants={point_variant} >
                        <item.icon className={styles.plan__icon} />
                        <span className={styles.plan__desc}>{item.text}</span>
                    </motion.div>
                )
            })}
            </motion.div>
            <div className={styles.plan__price}>
                <span>{props.priceWithUnit}</span>/Monthly
            </div>
            <button className={styles.plan__btn}>
                {props.buttonText}
            </button>
            {props.anotherOption && <h2 className={styles.another__option}>{props.anotherOption}</h2>}
        </div>
    )
}

export default PackageCard
