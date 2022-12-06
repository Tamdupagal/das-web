import styles from './Header.module.scss';
import Images from 'next/image'
import logo from '../assets/das.webp'
import { FaAngleDown, FaAngleRight, } from 'react-icons/fa'
import { GiGameConsole } from 'react-icons/gi'
import { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'
import { AppContext } from '../../AppContext';
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import Popup from 'reactjs-popup';
import LeadForm from './Form/LeadForm';

function Header(props) {
    const { setIsAdmin, setToggleLoginForm } = useContext(AppContext);
    const { status } = useSession();

    const headerRef = useRef()
    const btnRef = useRef();
    const btnRef1 = useRef();
    const headRef = useRef();


    const [toggleDropDown, setToggleDropDown] = useState(false)
    const [toggleSocial, setToggleSocial] = useState(false)

    useEffect(() => {

        const closeDropDown = e => {

            if (e.path[0] !== btnRef.current) {
                setToggleDropDown(false);
            }
        }

        document.body.addEventListener('click', closeDropDown);
        return () => document.body.removeEventListener('click', closeDropDown);
    }, []);




    useEffect(() => {
        const closeDropDown1 = e => {
            if (e.path[0] !== btnRef1.current) {
                setToggleSocial(false);
            }
        }

        document.body.addEventListener('click', closeDropDown1);
        return () => document.body.removeEventListener('click', closeDropDown1);
    }, []);

    const router = useRouter()

    const handleAdminLogin = function () {
        setIsAdmin(true)
        setToggleLoginForm(true)
    }

    const classToggle = () => {
        if (!headerRef.current) return
        if (window.scrollY >= 5) {
            headerRef.current.classList.add(styles.active);
            return
        } else {
            if (!headerRef.current.classList.contains(styles.active)) return
            headerRef.current.classList.remove(styles.active);
        }
    }

    useEffect(() => {
        setToggleDropDown(false)
        window.addEventListener('scroll', classToggle)
        return () => {
            window.removeEventListener('scroll', classToggle)
        }
    }, [])
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <figure className={styles.logo} onClick={() => router.push('/')}>
                    <Images src={logo} objectFit="contain" layout='responsive' alt='logo' className={styles.image} />
                </figure>
                <ul className={isOpen === false ?
                    styles.navmenu : styles.navmenu + ' ' + styles.active}>
                    <li className={`${styles.navitem} ${styles.btn}`} onClick={() => { router.push('/') }}>Home</li>

                    {
                        status === "authenticated" ? <li className={`${styles.navitem} ${styles.btn}`} onClick={() => { router.push('/info') }}>Dashboard</li> : ""
                    }


                    <li className={styles.navitem}>
                        <button ref={btnRef} onClick={() => setToggleDropDown(!toggleDropDown)} className={styles.btn}>Courses
                            {toggleDropDown && <ul className={styles.dropdown}>
                                <li onClick={() => {
                                    router.push('/foundation-course')
                                    setToggleDropDown(false)
                                    setIsOpen(false)
                                }
                                }>  <FaAngleRight className={styles.arrow_right} />Foundation Course</li>
                                <li onClick={() => {
                                    router.push('/game-development')
                                    setToggleDropDown(false)
                                    setIsOpen(false)
                                }
                                }><FaAngleRight className={styles.arrow_right} /> Game Development</li>
                            </ul>}
                        </button>
                    </li>
                    <li className={`${styles.navitem} ${styles.btn}`} onClick={() => { router.push('/blog') }}>Blog</li>
                    <li className={styles.navitem}>
                        <button ref={btnRef1} onClick={() => { setToggleSocial(!toggleSocial) }} className={styles.btn}>Social
                            {toggleSocial && <ul className={styles.dropdown}>
                                <li onClick={() => {
                                    router.push('/events')
                                    setToggleSocial(false)
                                    setIsOpen(false)
                                }
                                }>  <FaAngleRight className={styles.arrow_right} />Events</li>
                                <li onClick={() => {
                                    router.push('/frequently-asked-question')
                                    setToggleSocial(false)
                                    setIsOpen(false)
                                }
                                }><FaAngleRight className={styles.arrow_right} /> FAQ</li>
                            </ul>}

                        </button>
                    </li>
                    <li className={styles.navitem}>
                        <button className={styles.bttn} >
                            <p style={{ color: 'white', padding: '0 2px', letterSpacing: '1px' }} className={isOpen === false ? styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}><GiGameConsole style={{ fontSize: '16px' }} />
                                <Popup
                                    trigger={<a target="_blank" className={styles.Link}>&nbsp;Game Dev Careers</a>}
                                    position="bottom center">
                                    {
                                        close => (
                                            <LeadForm close={close} />
                                        )
                                    }

                                </Popup>
                            </p>
                        </button>

                    </li>
                </ul>
                <button className={isOpen === false ?
                    styles.hamburger : styles.hamburger + ' ' + styles.active}
                    onClick={openMenu}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </nav>
        </header>

    )
}

export default Header
