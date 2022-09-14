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
            <strong>To Create</strong> a productive learning culture in which
            every individual happily and wholeheartedly contributes to our goal
            of making the world a place where every individual thrives together
            with the usage of technology readily available.
          </p>
        </div>
        <div className={styles.box}>
          <p>
            <strong>To Elevate</strong> the thinking of the next generation by
            providing them with all the necessary tools and knowledge to enhance
            their contribution towards making the society/world a better place.
          </p>
        </div>
        <div className={styles.box}>
          <p>
            <strong>To Make</strong> good knowledge and information available to
            all while using available technology or developing a new one.
          </p>
        </div>
        <div className={styles.box}>
          <p>
            <strong>To Deliver</strong> outstanding skills and values by using
            available technology, resources and aid by providing a platform for
            their growth at a reasonably accessible price/cost.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Misson
