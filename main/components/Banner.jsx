import Image from 'next/image'
import bannerImg from '../assets/banner.svg'
import Typewriter from 'typewriter-effect';
import styles from './Banner.module.scss';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';


const phrases = [
    "Full Stack Web \n development.",
    "Digital Marketing.",
]

export default function Banner() {

    const { setToggleLoginForm, setIsAdmin } = useContext(AppContext)
        
    const handleForm = function () {
        setIsAdmin(false);
        setToggleLoginForm(true);
    
    }


    return (
        <section className={styles.container}>
             <figure className={styles.banner__img}>
                <Image src={bannerImg} alt="study first pay later" objectFit="contain" layout="responsive"/>
            </figure>
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
                <button className ={styles.button} onClick={handleForm}>Study now and pay later</button>
            </div>
        </section>
    )
}
