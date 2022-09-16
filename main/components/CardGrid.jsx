import styles from './CardGrid.module.scss'
import { COURSE_DATA } from '../helpers/Courses'

import { useEffect, useRef, useState } from 'react'
import Card from './Card'


function CardGrid() {
 
  return (
    <section className={styles.container}>
      <div className={styles.carousel__box}>
                  {COURSE_DATA.map((item) => {
            return (
              <div className={styles.card__wrapper} key={item.id}>
                <Card {...item} />
              </div>
            )
          })}
          </div>
    </section>
  )
}

export default CardGrid
