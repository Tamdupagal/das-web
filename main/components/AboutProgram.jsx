import Image from 'next/image';
import styles from './AboutProgram.module.scss';
import expert from '../assets/experts.svg';
import professional from '../assets/data_pro.svg';
import sol from '../assets/sol.svg';
import about from '../assets/about_the_program.png'


function AboutProgram() {
    return (
        <section className={styles.container}>
            <h1 className={styles.main_heading}>About Us</h1>
            <div className={styles.wrapper}>
                <article className={styles.about}>
                    <div>
                        <figure>
                            <Image src={about} layout='responsive' objectFit="contain" alt="Young Professional"/>
                        </figure>
                        <p className={styles.desc}>We are Digital Aided School a team of Young professionals who beliece in quality education and the lastest technolodgy. Learning is never-ending but learning what is required to keep body and soul together is principal, Learning through technology where the resources are unlimited makes it more merrymaking</p>
                    </div>
                    <div>
                        <figure>
                            <Image src={expert} objectFit="contain" layout='responsive' alt="Education technology"/>
                        </figure>
                        <p className={styles.desc}>We have the perfect & feasible solutuon when it comes to EDUCATION & TECHNOLOGY. We have DIGITAL in our name (pun intended)</p>
                    </div>
                    <div>
                        <figure>
                            <Image src={sol} objectFit="contain" layout='responsive' alt="solution"/>
                        </figure>
                        <p className={styles.desc}>For EDUCATION solutions, TECHNOLOGY solutions & DIGITAL solutions allow us to help with our plethora of band-aids as per your needs and requirements.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default AboutProgram
