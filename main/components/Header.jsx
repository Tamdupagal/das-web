import styles from './Header.module.scss';
import Images from 'next/image'
import Link from 'next/link'
import logo from '../assets/das.webp'
import { FaAngleDown, FaBars, FaTimes, FaAngleRight} from 'react-icons/fa'
import {useRef, useState } from 'react';
import { motion } from 'framer-motion';


function Header() {

    const [toggle, setToggle] = useState(false)

    const headerRef = useRef()

    const dropdown = {
        hidden: {
            scale: 0,
            originX: 0,
            originY: 0,
            opacity: 0,
        },
        vissible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                staggerChildren: 0.05,
                delayChildren: 0.3,
                duration: 0.3,
            },
        },

        
    }

    const fadeIn = {
        hidden: {
            x: "-5rem",
            opacity: 0,
        },
        vissible: {
             x: 0,
            opacity: 1
        }
    }

    return (
        <header className={styles.header} ref={headerRef}>
                <figure className={styles.logo}>
                    <Images src={logo} objectFit="contain" layout='responsive' className={styles.image}/>
            </figure>
                <div className={styles.btn_group}>
                <motion.button className={styles.btn} onTap={() => setToggle(!toggle)} onHoverStart={() => setToggle(true)} onHoverEnd={() => setToggle(false)}> Courses <FaAngleDown className={styles.arrow_down} />
                            <motion.ul key="dropdown" variants={dropdown} animate={toggle ? "vissible" : "hidden"}              initial="hidden" className={styles.dropdown}>
                                <motion.li variants={fadeIn}><FaAngleRight className={styles.arrow_right}/> Web Development</motion.li>
                                <motion.li variants={fadeIn}><FaAngleRight className={styles.arrow_right}/>Digital Marketing</motion.li>
                                <motion.li variants={fadeIn}><FaAngleRight className={styles.arrow_right}/>Data Science</motion.li>
                            </motion.ul>
                </motion.button>
                <button className={styles.btn}>Login</button>
                </div>
        </header>
    )
}

export default Header
