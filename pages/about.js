import Image from 'next/image'
import styles from '../main/components/AboutUs.module.scss'
// import about from '../assets/aboutUs.svg'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import Head from 'next/head'


function AboutUs({name}) {
  return (
    <>
    <Head>
    <title>About us | Digitalaidedschool </title>
    <meta name='description' content='DAS - We are an online learning platform that provides training and placement support to creators and helps them succeed in their game development careers.' />
    <link rel='icon' href='/favicon.png' /> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
  <section className={styles.container}>
  <h1 className={styles.main_heading}>About Us</h1>
      <article className={styles.about}>
        <p className={styles.desc}>
          <FaQuoteLeft className={styles.quote} /> Digital Aided School (DAS) is a platform that aims to provide quality education to 
          everyone, everywhere. Our objective is to revolutionize the way students learn game
           development. We are focused on making learning fun, engaging, and effective by integrating 
           technology into the learning process. We bridge the gap between game developers and the gaming industry.
          <FaQuoteRight className={styles.quote} />
          </p>
          </article>
          </section>
          <hr/>
          </>
  )
}

export default AboutUs
