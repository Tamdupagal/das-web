import Image from 'next/image'
import React from 'react'
// import mission1 from '../assets/Productive-Work-Culture.svg'
// import mission2 from '../assets/knowledge.png'
// import mission3 from '../assets/Elevate.svg'
// import mission4 from '../assets/achievement.svg'
import styles from './Misson.module.scss'
// import certify from '../assets/Certifications.svg'

function Misson() {
  return (
    <section className={styles.container}>
      <h1 className={styles.main_title}>Digital Aided School Mission</h1>
      <div className={styles.mission__box}>
        <div className={styles.box}>
          <p>
            We are an online learning platform that provides training
             and placement
             support to creators and helps them succeed in their 
            game development journey. Linking the gaming industry with passionate developers.
          </p>
        </div>
        
      </div>
    </section>
  )
}

export default Misson
