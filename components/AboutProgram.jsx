import Image from 'next/image';
import styles from './AboutProgram.module.scss';
import Button from './Button'
import about from '../assets/about_the_program.png'


function AboutProgram() {
    return (
        <section className={styles.container}>
            <h1 className={styles.main_heading}>About the Program</h1>
            <div className={styles.wrapper}>
                <figure className={styles.image}>
                    <Image src={about} objectFit="contain" placeholder="blur" alt="" />
                </figure>
                <article className={styles.about}>
                    <p className={styles.desc}>
                        This online digital marketing certification course gives you an in-depth understanding and advamced knowledge of the eight most import digital marketing domains and includes real world projects and virtual simulations for gaing domain experience. You will be exposed to 40+ digital marketing tools extensive project and Mimic pro ..
                    </p>
                    <Button>Read More</Button>
                </article>
            </div>
        </section>
    )
}

export default AboutProgram
