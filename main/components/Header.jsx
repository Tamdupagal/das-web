import styles from './Header.module.scss';
import Images from 'next/image'
import logo from '../assets/das.webp'
import { FaAngleDown, FaBars, FaTimes, FaAngleRight, FaLastfmSquare} from 'react-icons/fa'
import {useContext, useEffect, useRef, useState } from 'react';
import {useRouter} from 'next/router'
import { AppContext } from '../../AppContext';


function Header() {


    const { setIsAdmin, setToggleLoginForm } = useContext(AppContext)
    

    const headerRef = useRef()


    const [toggleDropDown, setToggleDropDown] = useState(false)

    const router = useRouter()



    const handleDropDown = (toggle) => {
        setToggleDropDown(toggle)
    } 
    



    const handleAdminLogin = function () {
        setIsAdmin(true)
        setToggleLoginForm(true)
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
            <ul className={styles.btn_group}>
                <li onClick={()=>setToggleDropDown(!toggleDropDown)} className={styles.btn}> <span  >Courses <FaAngleDown className={styles.arrow_down} /></span> 
                    {toggleDropDown && <ul className={styles.dropdown}>
                        <li onClick={() => {
                            router.push('/digital-marketing')
                            setToggleDropDown(false)
                        }
                    }>  <FaAngleRight className={styles.arrow_right} />Digital Marketing</li>
                        <li onClick={() => {
                            router.push('/web-development')
                            setToggleDropDown(false)
                        }
                        }><FaAngleRight className={styles.arrow_right} /> Web Development</li>
                    </ul>}
                    </li>
                    <li onClick={handleAdminLogin} className={styles.btn}><span>Login</span></li>               
                </ul>
        </header>
    )
}

export default Header
