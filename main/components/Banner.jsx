import styles from './Banner.module.scss';
import Image from 'next/image'
import bannerImg from '../assets/blogging.svg'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';


const phrases = [
    "Full Stack Web \n development",
    "Digital Marketing",
    "Data Science"
]

function Banner() {


    return (
        <section className={styles.container}>
                    <div className={styles.banner_info}>
                <h1 className={styles.title}>Study Now <br /> and Pay Later!</h1>
                <div className={styles.static_text}>We offer, courses in
                    <p className={styles.typewriter}>
                        <Typewriter
                            options={{
                                strings: phrases,
                                autoStart: true,
                                loop: true,
                        }}
                        />
                    </p>
                </div>
            </div>
            <figure className={styles.banner__img}>
                <Image src={bannerImg} alt="study first pay later" objectFit="contain" layout="responsive"/>
            </figure>
        </section>
    )
}

export default Banner
