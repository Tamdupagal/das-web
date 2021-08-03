import Image from 'next/image';
import styles from './AboutProgram.module.scss';
import Button from './Button'
import about from '../assets/about_the_program.png'


function AboutProgram() {
    return (
        <section className={styles.container}>
            <h1 className={styles.main_heading}>About Us</h1>
            <div className={styles.wrapper}>
                <figure className={styles.image}>
                    <Image src={about} objectFit="contain" placeholder="blur" alt="" />
                </figure>
                <p className={styles.about}>
                    We are Digital Aided School a team of Young professionals who beliece in quality education and the lastest technolodgy. Learning is never-ending but learning what is required to keep body and soul together is principal, Learning through technology where the resources are unlimited makes it more merrymaking
                    <br />
                    <br />
                    We have the perfect & feasible solutuon when it comes to EDUCATION & TECHNOLOGY. We have DIGITAL in our name (pun intended)
                    <br />
                    <br />
                    For EDUCATION solutions, TECHNOLOGY solutions & DIGITAL solutions allow us to help with our plethora of band-aids as per your needs and requirements.
                </p>
            </div>
        </section>
    )
}

export default AboutProgram
