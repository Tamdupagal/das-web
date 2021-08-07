import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import BannerImg from "../assets/banner-thumb.png";
import styles from './Banner.module.scss';

const FadeIn = {
    initial: {
        y: "5rem",
        opacity: 0,
    },
    vissible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            bouces: 0.25,
            delay: 0.2,
        }
    }
}

function Banner() {
    return (
        <section className={styles.container} id="home">
            <motion.div variants={FadeIn} animate="vissible" initial="initial" className={styles.content__box}>
                <h1 className={styles.heading}>STUDY FIRST PAY LATER
                            FULL STACK DIGITAL MARKETING PROGRAM</h1>
                <p className={styles.desc}>Performance Marketing 
Organic Reach
Brand Awareness
Growth Hacking</p>
                <button className={styles.banner__btn}>Study First Pay Later</button>
            </motion.div>
            <figure className={styles.banner__img}>
                <Image src={BannerImg} alt="banner thumb" width={800} quality={0} objectFit="contain" />
            </figure>
        </section>
    )
}

export default Banner
