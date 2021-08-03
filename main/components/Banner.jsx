import styles from './Banner.module.scss';
import Image from 'next/image'
import Link from 'next/link'
import banner_image from '../assets/banner_image.jpg'
import { motion } from 'framer-motion';


const phrases = [
    "Full Stack Web development",
    "Digital Marketing",
    "Data Science"
]

const typewiter = {
    initial: {
        width: 0,
    },
    vissible: (i) => {
        return {
            width: "auto",
            transition: {
                type: "tween",
                duration: 2,
                delay: 0.05 * i
            },
            transitionEnd: {
                display: 'none'
            },
        }
    }
}

function Banner() {
    return (
        <section className={styles.container}>
                    <div className={styles.banner_info}>
                        <h1 className={styles.title}>Study Now and Pay Later!</h1>
                        <motion.p className={styles.desc}>
                    {phrases.map((phrase, i) => {
                        // return (
                        //     // <motion.span custom={i} variants={typewiter} animate="vissible" initial="initial" className={styles.phrase}>{phrase}</motion.span>
                        //         )
                            })}
                        </motion.p>
                    </div>
        </section>
    )
}

export default Banner
