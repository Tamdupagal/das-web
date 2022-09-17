import Image from 'next/image'
import styles from '../main/components/AboutUs.module.scss'
// import about from '../assets/aboutUs.svg'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import Head from 'next/head'

function AboutUs() {
  return (
    <>
    <Head>
    <title>About Us</title>
    <meta name='description' content='Generated by create next app' />
    <link rel='icon' href='/favicon.png' />
  </Head>
  <section className={styles.container}>
  <h1 className={styles.main_heading}>About Us</h1>
      <article className={styles.about}>
        <p className={styles.desc}>
          <FaQuoteLeft className={styles.quote} /> We are Digital Aided School, a team of passionate tech geeks and enthusiasts who
          believe in quality education for all. We love solving problems and addressing the
          existing pain points in the current system.
          
          <br />
          <br />
          We provide Education & Technology related solutions tailor-made to cater to the
existing challenges with the goal of Digitally enabling and aiding people.

          <br />
          <br />
          Integrating Tech with Education to work on a plethora of products helping various
people with their needs and requirements
          <FaQuoteRight className={styles.quote} />
          </p>
          </article>
          </section>
          <hr/>
          </>
  )
}

export default AboutUs