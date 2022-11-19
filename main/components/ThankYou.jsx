import React from 'react'
import styles from './ThankYou.module.scss';
import Images from 'next/image'
import logo from '../assets/das.webp'


const ThankYou = () => {
  return (
    <div className={styles.container}>
    <div className={styles.box}>

    <figure className={styles.logo}>
                    <Images src={logo} objectFit="fill"  alt="Digital Aided School" /> 
                </figure>
  <h2 className={styles.title}>Game Development & Web3 Courses</h2>
    <p className={styles.description}>Thank you for showing your Interest! <br/> 
    Our Game Development Mentor will connect you soon🎮</p>
    </div>
    </div>
  )
}

export default ThankYou