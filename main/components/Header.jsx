import styles from './Header.module.scss';
import Images from 'next/image'
import logo from '../assets/das.webp'
import { FaAngleDown, FaBars, FaTimes, FaAngleRight, FaLastfmSquare,FaUser,FaSun,FaMoon} from 'react-icons/fa'
import {useContext, useEffect, useRef, useState } from 'react';
import {useRouter} from 'next/router'
import { AppContext } from '../../AppContext';
import Link from 'next/link'
// import { useState } from "react";
import {useTheme} from 'next-themes';


function Header() {
    const {systemTheme,theme,setTheme} = useTheme();
    const RenderThemeChange =() =>{
        const currentTheme = theme =='system' ? systemTheme : theme;

        if (currentTheme == 'dark'){
            return(
                <FaSun className="icon" role='button' onClick={() => setTheme('light')} />
            )
        }
        else {
            return(
                <FaMoon className="icon" role="button" onClick={() => setTheme('dark')} />
            )
        }
    }

    const { setIsAdmin, setToggleLoginForm} = useContext(AppContext)
    

    const headerRef = useRef()


    const [toggleDropDown, setToggleDropDown] = useState(false)
    const [toggleSocial, setToggleSocial] = useState(false)

    const router = useRouter()

    const handleAdminLogin = function () {
        setIsAdmin(true)
        setToggleLoginForm(true)
    }

    const classToggle = () => {
        if(!headerRef.current) return
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
    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);


    // <header className={styles.header} ref={headerRef}>
    //     <figure className={styles.logo} onClick={()=>router.push('/')}>
    //             <Images src={logo} objectFit="contain" layout='responsive' className={styles.image}/>
    //     </figure>
    //     <ul className={styles.btn_group}>
    //     <li onClick={()=>router.push('/')} className={styles.btn}><span>Home</span></li>
    //     <li onClick={handleAdminLogin} className={styles.btn}><span>About us</span></li>
    //     <li onClick={handleAdminLogin} className={styles.btn}><span>Social</span></li>
    //         <li onClick={()=>setToggleDropDown(!toggleDropDown)} className={styles.btn}> <span  >Courses <FaAngleDown className={styles.arrow_down} /></span> 
    //             {toggleDropDown && <ul className={styles.dropdown}>
    //                 <li onClick={() => {
    //                     router.push('/foundation-course')
    //                     setToggleDropDown(false)
    //                 }
    //             }>  <FaAngleRight className={styles.arrow_right} />Foundation Course</li>
    //                 <li onClick={() => {
    //                     router.push('/game-development')
    //                     setToggleDropDown(false)
    //                 }
    //                 }><FaAngleRight className={styles.arrow_right} /> Game Development</li>
    //             </ul>} 
    //         </li>
    //             <li onClick={handleAdminLogin} className={styles.btn}><span>Login</span></li>     
    //         </ul>
    // </header>

//     <li className={styles.navitem}>
//     <Link href='/'>
//       <a className={isOpen === false ? 
//                  styles.navlink : styles.navlink+' '+styles.active}
//                  onClick={openMenu}>Home</a>
//      </Link>
//  </li>
//  <li className={styles.navitem}>
//      <Link href='/about'>
//        <a className={isOpen === false ? 
//                  styles.navlink : styles.navlink+' '+styles.active}
//                  onClick={openMenu}>About us</a>
//      </Link>
//  </li>


    return (
        <header className={styles.header}>
        <nav className={styles.navbar}>
        <figure className={styles.logo} onClick={()=>router.push('/')}>
                    <Images src={logo} objectFit="contain" layout='responsive' className={styles.image}/>
            </figure>
        <ul className={isOpen === false ? 
                styles.navmenu : styles.navmenu +' '+ styles.active}>
          
                

                
            <li className={styles.navitem}>
            <li onClick={()=>setToggleDropDown(!toggleDropDown)} className={styles.btn}> <span  >Courses <FaAngleDown className={styles.arrow_down} /></span> 
            {toggleDropDown && <ul className={styles.dropdown}>
               <li onClick={() => {
                   router.push('/foundation-course')
                   setToggleDropDown(false)
               }
           }>  <FaAngleRight className={styles.arrow_right} />Foundation Course</li>
           <li onClick={() => {
               router.push('/game-development')
                   setToggleDropDown(false)
               }
               }><FaAngleRight className={styles.arrow_right} /> Game Development</li>
               </ul>}
               </li>
            </li> 



            <li className={styles.navitem}>
            <li onClick={()=>setToggleSocial(!toggleSocial)} className={styles.btn}> <span>Social<FaAngleDown className={styles.arrow_down} /></span> 
            {toggleSocial && <ul className={styles.dropdown}>
               <li onClick={() => {
                   router.push('/events')
                   setToggleSocial(false)
               }
           }>  <FaAngleRight className={styles.arrow_right} />Events</li>
           <li onClick={() => { router.push('/frequently-asked-question')
            setToggleSocial(false)}
               }><FaAngleRight className={styles.arrow_right} /> FAQ</li>
               </ul>}

               </li>
            </li>
            <li className={styles.navitem}>
                <Link href="https://wa.me/917304360502?text=I'm%20interested%20in%20your%20Game%20Development%20Course">
                <button className={styles.bttn} >
                <a target="_blank" style={{color:'white', padding:'0 2px',letterSpacing:'1px'}} className={isOpen === false ? styles.navlink : styles.navlink+' '+styles.active}
                onClick={openMenu}><FaUser style={{fontSize:'16px'}}/>&nbsp;Job Hunt</a>
                </button>
                </Link>
            </li>
        </ul>
        <button  className={isOpen === false ? 
                            styles.hamburger : styles.hamburger+' '+styles.active}
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
