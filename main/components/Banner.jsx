import styles from './Banner.module.scss';
import Image from 'next/image'
// import bannerImg from '../assets/blogging.svg'
import bannerImg from '../assets/studying.svg'
import Typewriter from 'typewriter-effect';
import Button from  '../../components/Button'
import { motion } from 'framer-motion';


const phrases = [
    "Full Stack Web \n development.",
    "Digital Marketing.",
    "Data Science."
]

function Banner() {

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
                <Button style={{marginTop: '2rem',  fontSize: '1.8rem', borderRadius : '6rem' ,fontWeight : 'bolder'}}>Study First & Pay later!</Button>
            </div>
            <figure className={styles.banner__img}>
                <Image src={bannerImg} alt="study first pay later" objectFit="contain" layout="responsive"/>
            </figure>
        </section>
    )
}

export default Banner
