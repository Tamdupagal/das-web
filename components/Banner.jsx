import { motion } from 'framer-motion';
import { useState, useEffect, useRef, useContext } from 'react';
import Image from 'next/image';
import React from 'react';
import BannerImg from "../assets/lms.png";
import styles from './Banner.module.scss';
import { GoPrimitiveDot as Dot } from "react-icons/go"
import { AppContext } from '../AppContext';
import withForm from '../HOC/withForm';





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

function Banner({ data }) {
    
    const { setToggleLoginForm, setIsAdmin} = useContext(AppContext)
    

    const handleForm = function () {
        setIsAdmin(false);
        setToggleLoginForm(true);
    }


    return (
        <section className={styles.container} id="home">
            <motion.div variants={FadeIn} animate="vissible" initial="initial" className={styles.content__box}>
                <h1 className={styles.heading}>Learn First, Pay Later !</h1>
                <p className={styles.desc}> 
                    <span>{data.title}</span> 
                    <h2>{data.program}</h2>
                    <ul>
                            <li><Dot className={styles.dot}/> Worlds 1st Live online classes </li>
                            <li><Dot className={styles.dot}/> Agency style cohort-based learning  </li>
                            <li><Dot className={styles.dot}/> 1:8 collaborative Live project building academic experience </li>
                            <li><Dot className={styles.dot}/> 8+ Live Real Life industry-standard Live projects</li>
                            <li><Dot className={styles.dot}/> 10+ certification</li>
                    </ul>
                    <span>Batches</span>
                    <ul>
                            <li><Dot className={styles.dot}/> Weekday batch [Monday-Friday (1.5hours/class)] </li>
                            <li><Dot className={styles.dot}/> Weekend batch [Saturday-Sunday(3.5hours/class)]</li>
                            <li><Dot className={styles.dot}/> The next batch starts Mid August</li>
                    </ul>
                </p>
                <button onClick={handleForm} className={styles.banner__btn}>Study first Pay later</button>
            </motion.div>
            <figure className={styles.banner__img}>
                <Image src={BannerImg} alt="banner thumb"  objectFit="fill" />
            </figure>
        </section>
    )
}

export default Banner
    

