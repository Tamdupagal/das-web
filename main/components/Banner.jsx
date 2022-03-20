import Image from 'next/image'
import bannerImg from '../assets/banner.svg'
import Typewriter from 'typewriter-effect';
import Modal from 'react-modal'
import Form from './Form';
import styles from './Banner.module.scss';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import withForm from '../../HOC/withForm';


const phrases = [
    "Full Stack Web \n development.",
    "Digital Marketing.",
    "Data Science."
]

function Banner() {

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
                <h1 className={styles.title}>study now and pay later</h1>
                {/* <span className={styles.text}>Courses in</span> */}
                    {/* <div className={styles.typewriter}>
                        <Typewriter
                            onInit={t=>t.changeDeleteSpeed(1).changeDelay(0.4)}
                            options={{
                                strings: phrases,
                                autoStart: true,
                                loop: true,
                                }}
                        />
                </div> */}
                <p className={styles.desc}>From Basics to Advance, learn all that is <br/>
                    all about Any Course. Get up-to-date <br/>
                    lectures from our industry experts.</p>
                <button className ={styles.button} onClick={handleForm}>Study now and pay later</button>
            </div>
        </section>
    )
}

export default Banner
