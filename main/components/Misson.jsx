import Image from 'next/image';
import React from 'react';
import about from '../assets/about_the_program.png'
import styles from './Misson.module.scss';

function Misson() {
    return (
        <section className={styles.container}>
            <h1 className={styles.main_title}>Digital Aided Schools Mission</h1>
            <div className={styles.mission__box}>
             <figure className={styles.image}>
                    <Image src={about} objectFit="contain" alt="Misson digital aided school" />
            </figure>
            <p className={styles.footer_text}>
                <strong>To Create</strong> a productive work culture in which our employees happily and whole-heartedly contribute to our goal of making the world a place where every individual thrives together with the usage of technology readily available.
                <br />
                <br />
                <strong>To make</strong> good knowledge and information available to all while using available technology or developing a new one.
                <br />
                <br />
                <strong>To elevate</strong> the thinking of the next generation by providing them with all the necessary tools and knowledge to enhance their contribution towards making the society/world a better place.
                <br />
                <br />
                <strong>To deliver</strong> important skills and values by using available technology and resources and aid by providing a platform for their growth at a fairly accessible price/cost.
                </p>
            </div>
        </section>
    )
}

export default Misson
