import Image from 'next/image';
import React from 'react';
import chat from '../assets/widget/chat.svg';
import community from '../assets/widget/community.svg';
import github from '../assets/widget/github.svg';
import styles from './Subscribe.module.scss';

function Subscribe() {
    return (
        <section className={styles.container}>
            <div className={styles.subcribe__box}>
                <h1 className={styles.title}>
                    Subscribe to our Blog
                </h1>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing  elitsed eiusmod <br />tempor incididunt labore dolore.
                </p>
                <div className={styles.input}>
                    <input type="text" placeholder="Enter your email address" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className={styles.social}>
                <div className={styles.social__card}>
                    <figure>
                        <Image src={chat} alt="Chat communication" width={150} objectFit="contain"/>
                    </figure>
                    <h1 className={styles.social__title}>
                        Join the Community
                    </h1>
                    <p className={styles.desc} data-color="black">
                        Lorem ipsum dolor sit <br /> amet consectetur adipisicing<br /> elit sed  eiusmod tempor.
                    </p>
                </div>
                <div className={styles.social__card}>
                    <figure>
                        <Image src={community} alt="Chat communication" width={150} objectFit="contain"/>
                    </figure>
                    <h1 className={styles.social__title}>
                        Chat Communication
                    </h1>
                    <p className={styles.desc} data-color="black">
                        Lorem ipsum dolor sit <br /> amet consectetur adipisicing<br /> elit sed  eiusmod tempor.
                    </p>
                </div>
                <div className={styles.social__card}>
                    <figure>
                        <Image src={github} alt="Chat communication" width={150} objectFit="contain"/>
                    </figure>
                    <h1 className={styles.social__title}>
                        Github Access
                    </h1>
                    <p className={styles.desc} data-color="black">
                       Lorem ipsum dolor sit <br /> amet consectetur adipisicing<br /> elit sed  eiusmod tempor.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
