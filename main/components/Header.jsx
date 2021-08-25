import styles from './Header.module.scss';
import Images from 'next/image'
import Link from 'next/link'
import logo from '../assets/das.webp'
import Login from '../../components/Login'
import { FaAngleDown, FaBars, FaTimes, FaAngleRight, FaLastfmSquare} from 'react-icons/fa'
import {useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {useRouter} from 'next/router'


function Header() {

    const [toggle, setToggle] = useState(false)
    const [popup, setPopup] = useState(false)

    // useEffect(() => {
    //     document.addEventListener("mousedown",() => {
    //         setPopup(false);
    //     })
    //     // return () => {
    //     //     cleanup
    //     // }
    // });

    const headerRef = useRef()

    const router = useRouter()

    const dropdown = {
        hidden: {
            opacity: 0,
        },
        vissible: {
            opacity: 1,
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

    const classToggle = () => {
        if (window.scrollY >= 5) {
                headerRef.current.classList.add(styles.active);
                return
        } else {
            if(!headerRef.current.classList.contains(styles.active)) return
            headerRef.current.classList.remove(styles.active);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', classToggle)
        return  ()=> {
            window.removeEventListener('scroll', classToggle)
        }
    }, [])

    return (
        <header className={styles.header} ref={headerRef}>
            <figure className={styles.logo} onClick={()=>router.push('/')}>
                    <Images src={logo} objectFit="contain" layout='responsive' className={styles.image}/>
            </figure>
                <div className={styles.btn_group}>
                <motion.button className={styles.btn} onTap={() => setToggle(!toggle)} onHoverStart={() => setToggle(true)} onHoverEnd={() => setToggle(false)}> Courses <FaAngleDown className={styles.arrow_down} />
                    <motion.ul key="dropdown" transition={{
                        type: "tween",
                        staggerChildren: 0.05,
                        delayChildren: 0.15,
                        duration: 0.3,
                    }} variants={dropdown} animate={toggle ? "vissible" : "hidden"}              initial="hidden" className={styles.dropdown}>
                                <motion.li variants={fadeIn} onClick={()=>router.push('/digital-marketing')}><FaAngleRight className={styles.arrow_right}/>Digital Marketing</motion.li>
                                <motion.li variants={fadeIn} onClick={()=>router.push('/web-development')}><FaAngleRight className={styles.arrow_right}/> Web Development</motion.li>
                                <motion.li variants={fadeIn} onClick={()=>router.push('/data-science')}><FaAngleRight className={styles.arrow_right}/>Data Science</motion.li>
                            </motion.ul>
                </motion.button>
                <button className={styles.btn} onClick={ () => setPopup(true) }>Login</button>
                </div>
                <Login trigger={popup} setTrigger={setPopup}/>
        </header>
    )
}

export default Header
