import styles from './Footer.module.scss';
import logo from '../assets/das.webp'
import Link from 'next/link'
import { FaAppStore, FaEnvelope, FaGooglePlay, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

function Footer() {
    return (
        <footer className={styles.footer}>
            <figure className={styles.logo}>
                <Image src={logo} width={200} height={100} alt="digital aided school" objectFit="contain"/>
            </figure>
            <main className={styles.wrapper}>
                <p className={styles.text}>We all have thought of providing additonal information to our kids at some point of time.</p>
                <ul className={styles.ul}><span>Important Links</span> 
                    <li><Link href="#"><a className={styles.link}>Home</a></Link></li>
                    <li><Link href="#"><a className={styles.link}>Courses</a></Link></li>
                    <li><Link href="#"><a className={styles.link}>For Schools</a></Link></li>
                    <li><Link href="#"><a className={styles.link}>For Business</a></Link></li>
                    <li><Link href="#"><a className={styles.link}>Login</a></Link></li>
                </ul>
                <ul className={styles.ul}><span>Contact Us</span>
                    <li>India</li>
                    <li><address>Spectrum Tower, 5th, Chincholi Bunder Road, Mindspace, Malad West, Mumbai Maharastra 400064</address> </li>
                    <li><FaPhone className={styles.icon} /> +91 7304360502</li>
                    <li>United Kingdom</li>
                    <li><FaPhone className={styles.icon}/> +44 7405888449</li>
                    <li><FaEnvelope className={styles.icon}/> hello@digitalaidedschool.com</li>
                </ul>
                <ul className={styles.ul}><span>Policies</span> 
                    <li><Link href="#"><a className={styles.link}>Terms $ Conditions</a></Link></li>
                    <li><Link href="#"><a className={styles.link}>Refund Policy</a></Link></li>
                    <li><Link href="#"><a className={styles.link}>Privacy Policy</a></Link></li>
                    <li><Link href="#"><a className={styles.link}>Customer Feedback</a></Link></li>
                </ul>
                <ul className={styles.ul}><span>Follow Us</span>  
                    <li><FaInstagram className={styles.social} /><FaLinkedinIn className={styles.social} />
                        <FaYoutube className={styles.social} />
                    <FaTwitter className={styles.social}/></li>
                </ul>
                <ul className={styles.ul}><span>Mobile</span>
                    <li><FaGooglePlay className={styles.store} />
                    <FaAppStore className={styles.store}/></li>
                </ul>
            </main>
            <div className={styles.footer_text}>
                <span>With our Association you will gain</span>
                <ul>
                    <strong>Ouality Outcome</strong>
                    <li>Learning Life and technology</li>
                    <li>Digitally Aided Support</li>
                </ul>
                <ul>
                    <strong>State of the Art Technology</strong>
                    <li>Latest Tech</li>
                    <li>User Friendly</li>
                </ul>
                <ul>
                    <strong>Achievement Driven Support</strong>
                    <li>Endless support till Achievement</li>
                    <li>Deadlines</li>
                </ul>
            </div>
             <p className={styles.footer_text}>
                <span>Payment</span>
                Digital Aided School offers you multiple payment methods. Payment gateway partners use secure encryption technology to keep your transaction details
                confidential at all times. You may use Internet Banking. Wallet and QR Support to make your purchase.
            </p>
        </footer>
    )
}

export default Footer
