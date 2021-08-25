import styles from './Banner.module.scss';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
// import bannerImg from '../assets/blogging.svg'
import bannerImg from '../assets/Studying.svg'
import Typewriter from 'typewriter-effect';
import Button from  '../../components/Button'
import { motion } from 'framer-motion';
import Display from './Display';
import AdminLogin from './AdminLogin';


const phrases = [
    "Full Stack Web \n development.",
    "Digital Marketing.",
    "Data Science."
]

function Banner() {

    const [popup, setPopup] = useState(false);

    return (
        <section className={styles.container}>
                    <div className={styles.banner_info}>
                <h1 className={styles.title}>Study Now <span className={styles.red}>and</span> <br /> Pay Later<span className={styles.red}>&nbsp; !</span></h1>
                <span className={styles.text}>Courses in</span>
                    <p className={styles.typewriter}>
                        <Typewriter
                            onInit={t=>t.changeDeleteSpeed(1).changeDelay(0.4)}
                            options={{
                                strings: phrases,
                                autoStart: true,
                                loop: true,
                                }}
                        />
                </p>
                <Button style={{marginTop: '2rem',  fontSize: '1.8rem', borderRadius : '6rem' ,fontWeight : 'bolder', cursor: 'pointer'}} onClick={ () => setPopup(true) } >Study First & Pay later!</Button>
            </div>
            <figure className={styles.banner__img}>
                <Image src={bannerImg} alt="study first pay later" objectFit="contain" layout="responsive"/>
            </figure>
            <Display trigger={popup} setTrigger={setPopup}/>
            {/* <AdminLogin trigger={popup} setTrigger={setPopup}/> */}
        </section>
    )
}

export default Banner
