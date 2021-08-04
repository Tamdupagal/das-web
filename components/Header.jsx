import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import Logo from '../main/assets/das.webp';
import { motion, AnimateSharedLayout, m, AnimatePresence } from 'framer-motion'
import {Link} from 'react-scroll'
import { useRouter } from 'next/router'
import {FaBars, FaTimes} from 'react-icons/fa' 
import styles from './Header.module.scss';


const MENU_ITEM = [
    {path: 'home', label:"Home"},
    {path: 'features', label:"Features"},
    {path: 'pricing', label:"Pricing"},
    {path: 'testimonial', label:"Testimonial"},
]

function Header() {

    const router = useRouter()

    const [toggle, setToggle] = useState()

    const [isSelected, setSelected] = useState({
        0 : true
    })

    const [isDrawerToggled , setDrawerToggle] = useState(false)

    const linkRef = useRef({})

    const headerRef = useRef()

    const handleClick = (index) => {
        setSelected(prev => ({[index] : true}))
    }

    const handleMobileDrawer = (open=false) => {
        setDrawerToggle(open)
    }

    const DRAWER_VARIANT = () => {
        return {
            hidden: {
                scaleX: 0,
                transition: {
                    type: 'spring',
                    bounce: 0.3,
                    duration: 0.5,
                    staggerChildren: 0.05,
                    delay: 0.1,
                },
            },
            vissible: {
                scaleX: 1,
                originX: 0,
                originY : 0,
                transition: {
                    type: 'spring',
                    bounce: 0.3,
                    duration: 0.5,
                    delayChildren: 0.1,
                    staggerChildren: 0.05,
                }
            }
        }
    }

    const ITEM_VARIANT = () => {
        return {
            hidden: {
                x: "-8rem",
                opacity: 0,
            },
            vissible: {
                x: 0,
                opacity: 1,
            }
        }
    }

    const handleTap = () => {
        console.log("tapped")
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
        <>
        <header className={styles.header} ref={headerRef}>
            <figure className={styles.logo}>
                <Image src={Logo} alt="logo"  objectFit="contain" layout="responsive"/>
            </figure>
            <nav className={styles.nav}>
                <AnimateSharedLayout>
                    <ul>
                        {MENU_ITEM.map((item, index) => {
                            return (
                                <motion.li  key={index}>
                                    {isSelected[index] && <motion.div layout layoutId="underline" className={styles.underline}></motion.div>}
                                    <Link onClick={()=>handleClick(index)} className={styles.link} activeClass="active" to={item.path} spy={true} smooth={true}>{item.label}</Link>
                            </motion.li>
                            )
                        })}
                    </ul>
                </AnimateSharedLayout>
                <FaBars onClick={()=>handleMobileDrawer(true)} aria-label="menu button" className={styles.menu}/>      
            </nav>
            <button className={styles.header__btn}>Get Started</button>
            </header>
            <AnimatePresence>
            {isDrawerToggled &&
                <motion.nav className={styles.mobile__drawer} variants={DRAWER_VARIANT()} initial="hidden" animate="vissible" exit="hidden">
                    <motion.div className={styles.close}><FaTimes area-label="close button" className={styles.close__btn} onClick={()=>handleMobileDrawer(false)}/></motion.div>
                <ul>
                    {MENU_ITEM.map((item, index) => {
                            return (
                                <motion.li variants={ITEM_VARIANT()} whileTap={handleTap} whileHover={{scale: 1.05, color: "blue", originX:0, transition:{type:"tween", duration: 0.1,}}}  key={index}>
                                    <Link onClick={()=>handleClick(index)} className={styles.mobile__link} activeClass="active" to={item.path} spy={true} smooth={true}>{item.label}</Link>
                                </motion.li>
                            )
                    })}
                </ul>
                    </motion.nav>}
            </AnimatePresence>
            
        </>
    )
}

export default Header
