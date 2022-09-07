// import Image from 'next/image'
// import bannerImg from '../assets/banner.svg'
import Typewriter from 'typewriter-effect';
import styles from './Banner.module.scss';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';


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
                <h1 className={styles.title}>Study now and pay later</h1>
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
                Be a Fullstack Game Developer As Per Industry Standards.
                </h1>
                <h1 className={styles.title2}>
                Portfolio & Interview Ready Program.
                </h1>
                </div>
                <button className ={styles.button} onClick={handleForm}>Study now and pay later</button>
            </div>
        </section>
    )
}
