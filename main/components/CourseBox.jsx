import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaHourglassHalf, FaStar } from 'react-icons/fa'
import styles from './CourseBox.module.scss'
import Button from './Button'
import { motion } from 'framer-motion'


function CourseBox(props) {
  return (
    <div className={styles.course_box}>  
      <div className={styles.info_box}>
        <h3 className={styles.title}>{props.title}</h3>
        <h1 className={styles.heading}>{props.heading}</h1>
        {props.description.split('\n').map((text) => {
          return (
            <motion.p
              className={styles.desc}
              style={{ margin: '2px' }}
              key={text}
            >
              {text}
            </motion.p>
          )
        })}
        <span className={styles.desc} style={{ margin: '2px' }}>
          {props.classes}
        </span>
        <div className={styles.btn_wrapper}>
          <Button className={styles.btn}
            href={'/' + props.path}
          >
            {props.btnText}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CourseBox
