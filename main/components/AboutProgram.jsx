import Image from 'next/image';
import styles from './AboutProgram.module.scss';
import expert from '../assets/experts.svg';
import professional from '../assets/data_pro.svg';
import sol from '../assets/sol.svg';
import about from '../assets/about_the_program.png'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'


function AboutProgram() {
    return (
        <section className={styles.container}>
            <h1 className={styles.main_heading}>About Us</h1>
                <article className={styles.about}>
                        <figure>
                            <Image src={about} layout='responsive' objectFit="contain" alt="Young Professional"/>
                        </figure>
                        <p className={styles.desc}><FaQuoteLeft className={styles.quote}/> We are Digital Aided School team of Young professionals who believe in quality education and the latest technology. Learning is never-ending but learning what is required to keep body and soul together is principal, Learning through technology where the resources are unlimited makes it more merrymaking
                            <br />
                            <br />
                            We have the perfect & feasible solutions when it comes to EDUCATION & TECHNOLOGY. We have DIGITAL in our name (pun intended)

                            <br />
                            <br />
                            For EDUCATION solutions, TECHNOLOGY solutions & DIGITAL solutions allow us to help with our plethora of band-aids as per your needs and requirements.<FaQuoteRight className={styles.quote}/></p>
                </article>
        </section>
    )
}

export default AboutProgram
