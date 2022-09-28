import Typewriter from 'typewriter-effect';
import styles from './Banner.module.scss';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import Link from 'next/link'

const phrases = [
    "Game Development.",
    "Web3 Courses.",
]

export default function Banner() {

    const { setToggleLoginForm, setIsAdmin } = useContext(AppContext)
        
    const handleForm = function () {
        setIsAdmin(false);
        setToggleLoginForm(true);
    }


    return (
        <section className={styles.container}>
            
            <div className={styles.banner_info}>
                <h1 className={styles.title}>Study Now and Pay later</h1>
                    <div className={styles.typewriter}>
                        <Typewriter
                            onInit={t=>t.changeDeleteSpeed(1).changeDelay(0.4)}
                            options={{
                                strings: phrases,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                </div>
                <div className={styles.para}>
                <h1 className={styles.title2}>
                Be a Fullstack Game Developer As Per Industry Standards<br/> Portfolio & Interview Ready Program.
                </h1>
                <h1 className={styles.title3}>Be a Creator, Not a Player</h1>
                <h1 className={styles.title3}>Connect with the real gaming community.</h1>
                </div>
                <button className={styles.button}>
                <Link  href="https://wa.me/919920350084?text=I'm%20interested%20in%20your%20Game%20Development%20Course" >
                <a target="_blank" className={styles.Link}>Study now and pay later</a> 
                </Link>
                </button>
            </div>
        </section>
    )
}

