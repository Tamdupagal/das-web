import { useContext } from 'react'
import React from 'react'
import styles from './Banner.module.scss'
import { GoPrimitiveDot as Dot } from 'react-icons/go'
import { AppContext } from '../AppContext'
import Link from 'next/link'

const FadeIn = {
  initial: {
    y: '5rem',
    opacity: 0,
  },
  vissible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bouces: 0.25,
      delay: 0.2,
    },
  },
}

function Banner({ data, checkBanner }) {
  const { setToggleLoginForm, setIsAdmin } = useContext(AppContext)

  const handleForm = function () {
    setIsAdmin(true)
    setToggleLoginForm(true)
  }

  return (
    <section className={styles.container} id='home'>
      <div
        variants={FadeIn}
        animate='vissible'
        initial='initial'
        className={styles.content__box}
      >
        <h1 className={styles.heading}>Learn First, Pay Later !</h1>
        <div className={styles.desc}>
          <span>{data.title}</span>
          <h2>{data.program}</h2>
          <ul>
          <div clasName={styles.dev}>
          <li>
          <Dot className={styles.dot} /> Live online classes{' '}
          </li>
          <li>
          <Dot className={styles.dot} /> Agency style cohort-based learning{' '}
          </li>
          <li>
          <Dot className={styles.dot} /> 1:10 collaborative Live project
          building academic experience{' '}
          </li>
          </div>
          <div clasName={styles.dev}>
          <li>
          <Dot className={styles.dot} /> 3+ Live projects
          </li>
          <li>
          <Dot className={styles.dot} />
          1.5 hour/class instructor-led classes.
          </li>
          <li>
          <Dot className={styles.dot} />
          200+ hours of training & project building.
          </li>
          </div>
            </ul>
            <span>Batches</span>
            </div>
              <p style={{textAlign: 'center' ,fontSize:'16px',color:'#005778'}}>
              The Next batch starts from 15 October 2022
              </p>
              
              <button className={styles.banner__btn} onClick={handleForm}>
              <a target="_blank" className={styles.Link}>STUDY FIRST PAY LATER</a> 
              </button>
              <div className={styles.price} style={{ marginTop: '15px', border: '2px solid #005877 ' ,padding: '8px',borderRadius: '8px'}}>
              <b style={{ color:'#005877' }}>
              <s>₹10000</s>&nbsp;₹2999 + GST 
              </b>
              </div>
      </div>
    </section>
  )
}

export default Banner
