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
      <h1 className={styles.main_title}>Digital Aided School</h1>
      <div className={styles.mission__box}>
        <div className={styles.box}>
          <p>
            Empower Yourself with Generative AI Expertise. We're your partner on
            the journey to mastering Generative AI. Bridging the gap between
            aspiring learners and the AI revolution.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Misson
