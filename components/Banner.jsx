import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import React from 'react';
import BannerImg from "../assets/lms.png";
import styles from './Banner.module.scss';
import Register from './Register'

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

    const [popup, setPopup] = useState(false);

    // let menuRef = useRef();

    // useEffect(() => {
    //     document.addEventListener("mousedown", (event) => {
    //         if(!menuRef.target.contains(event.target)){
    //             setPopup(false);
    //         }
    //     })
    //     // return () => {
    //     //     cleanup
    //     // }
    // }, [popup])

    return (
        <section className={styles.container} id="home">
            <motion.div variants={FadeIn} animate="vissible" initial="initial" className={styles.content__box}>
                <h1 className={styles.heading}>LEARN first, PAY Later!</h1>
                <p className={styles.desc}>MASTERS/PROFESSIONAL CERTIFICATION IN 
                            Fullstack Digital Marketing 
                                                (6-month Program)
                                                <br />
                                                <br />

                            Worlds 1st Live online classes <br />
                            Agency style cohort-based learning <br />
                            1:8 collaborative Live project building academic experience <br />
                            8+ Live Real Life industry-standard Live projects <br />
                    10+ certification
                    <br />
                    <br />
 
                    Weekday batch [Monday-Friday (1.5hours/class)]
                    <br />
                    Weekend batch [Saturday-Sunday(3.5hours/class)]
                    <br />
The next batch starts Mid August</p>
                <button className={styles.banner__btn} onClick={ () => setPopup(true) }>STUDY first Pay Later</button>
            </motion.div>
            <Register trigger={popup} setTrigger={setPopup}/>
            <figure className={styles.banner__img}>
                <Image src={BannerImg} alt="banner thumb" width={800} quality={0} objectFit="contain" />
            </figure>
        </section>
    )
}

export default Banner


//ref={menuRef}