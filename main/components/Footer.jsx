import styles from './Footer.module.scss'
import Link from 'next/link'
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
} from 'react-icons/fa'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul className={styles.ul}>
          <span>Policies</span>
          <li>
            <Link href='/terms-conditions'>
              <a className={styles.link}>Terms & Conditions</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a className={styles.link}>Refund Policy</a>
            </Link>
          </li>
          <li>
            <Link href='/privacy_policy'>
              <a className={styles.link}>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a className={styles.link}>Customer Feedback</a>
            </Link>
          </li>
        </ul>
        <ul className={styles.ul}>
          <span>Contact Us</span>
          <li>
            <FaPhone className={styles.icon} /> +91 7304360502
          </li>
          <li>
            <FaPhone className={styles.icon} /> +44 7405888449
          </li>
          <li>
            <FaEnvelope className={styles.icon} /> hello@digitalaidedschool.com
          </li>
        </ul>
        <ul className={styles.ul}>
          <li>
            {' '}
            <Link href='#'>
              <a>
                <FaLinkedinIn className={styles.social} />
              </a>
            </Link>
          </li>
          <li>
            {' '}
            <Link href='#'>
              <a>
                <FaYoutube className={styles.social} />
              </a>
            </Link>
          </li>
          <li>
            {' '}
            <Link href='#'>
              <a>
                <FaTwitter className={styles.social} />
              </a>
            </Link>{' '}
          </li>
          <li>
            {' '}
            <Link href='#'>
              <a>
                <FaFacebook className={styles.social} />
              </a>
            </Link>{' '}
          </li>
        </ul>
      </div>
      <div className={styles.address}>
        <ul>
          <span>Our Address</span>
          <li>India</li>
          <li>
            Spectrum Tower, 5th, Chincholi Bunder Road, <br /> Mindspace, Malad
            West, <br /> Mumbai Maharastra 400064{' '}
          </li>
          <li className={styles.uk}>UK</li>
          <li>61 Bridge Street, Kington HR5 3DJ</li>
        </ul>
      </div>
      <p className={styles.copyright}>
        Made with <FaHeart className={styles.heart} /> by DIGITAL AIDED SCHOOL.
        All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
