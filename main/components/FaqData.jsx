import React from 'react'
import styles from './FaqData.module.scss'
import { GoPrimitiveDot as Dot } from 'react-icons/go'


export default function FaqData(props) {
  return (
    <div>
    <section className={styles.container}>
    <div className={styles.box}>
    <h1 className={styles.title}><Dot className={styles.dot} /> {props.title}</h1>
    <p className={styles.desc}>
    {props.desc}
    </p>
    </div>
    </section>
    
    </div>
  )
}
