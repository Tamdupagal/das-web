import styles from './Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image';
import joy from '../../assets/joy.png'
import { AppContext } from '../../AppContext'
import { useContext } from 'react'

import {
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
  FaYoutube,
  FaAngleRight,
  FaFacebook,
  FaHeart,
  FaGamepad,
} from 'react-icons/fa'
import {AiTwotoneMessage} from 'react-icons/ai'

function Footer() {
  const { setToggleLoginForm, setIsAdmin } = useContext(AppContext)

  const handleForm = function () {
    setIsAdmin(true)
    setToggleLoginForm(true)
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul className={styles.ul1}>
          <span><b>Policies</b></span>
          <li>
            <Link href='/about'>
              <a className={styles.link}>About Us</a>
            </Link>
          </li>
          <li>
            <Link href='/terms-conditions'>
              <a className={styles.link}>Terms & Conditions</a>
            </Link>
          </li>
          <li>
            <Link href='refund-policy'>
              <a className={styles.link}>Refund Policy</a>
            </Link>
          </li>
          <li>
            <Link href='/privacy_policy'>
              <a className={styles.link}>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href='/customer-feedback'>
              <a className={styles.link}>Customer Feedback</a>
            </Link>
          </li>
        </ul>
        <hr/>
        <ul className={styles.ul2}>
        <span><b>Contact Us</b></span>
          <li>
            <FaPhone className={styles.icon} /> +91 7304360502
          </li>
          <li className={styles.smalll}>
            <FaEnvelope className={styles.icon} /> hello@digitalaidedschool.com
          </li>
          <li className={styles.ico} onClick={handleForm}>
            <AiTwotoneMessage className={styles.icon} /> Connect us
          </li>
        </ul>
        <hr/>
        <ul className={styles.ul3}>
        <span><b>Social Media</b></span>
          <li>
            {' '}
            <Link href='https://www.linkedin.com/company/digital-aided-school/'>
              <a>
                <FaLinkedinIn className={styles.social} /> LinkedIn
              </a>
            </Link>
          </li>
          <li>
          {' '}
          <Link href='https://www.instagram.com/digitalaidedschool/'>
          <a>
          <FaInstagram className={styles.social} /> Instagram
          </a>
          </Link>
          </li>
          <li>
          {' '}
          <Link href='https://twitter.com/DigiAidedSchool'>
          <a>
          <FaTwitter className={styles.social} /> Twitter
          </a>
          </Link>{' '}
          </li>
          <li>
          {' '}
          <Link href='https://m.facebook.com/digitalaidedschool'>
          <a>
          <FaFacebook className={styles.social} /> Facebook
          </a>
          </Link>{' '}
          </li>
          </ul>
          <hr/>
        <ul className={styles.ul4}>
        <span><b>Our Address</b></span>
        <li>
            Spectrum Tower, 5th, Chincholi Bunder Road, Mindspace, Malad
            West, Mumbai Maharastra 400064{' '}
          </li> 
          <li>India</li>
          </ul>
          <hr/>
          </div>
          <div className={styles.fot}>
          <div className={styles.copyright}>
          <p>Made with <FaGamepad className={styles.heart} /> by <b>DIGITAL AIDED SCHOOL </b> All rights reserved.
          </p>

          </div>
          </div>
    </footer>
  )
}

export default Footer
