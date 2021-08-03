import styles from './WhoCanApply.module.scss'
import Image from 'next/image';
import js from '../assets/job_seekers.webp';
import wp from '../assets/working_professional.webp';
import s from '../assets/students.webp';
import bo from '../assets/business.webp';


function WhoCanApply() {
    return (
        <section className={styles.container}>
            <h1 className={styles.main_heading}>Who can apply for our Digital Marketing Course</h1>
            <div className={styles.wrapper}>
                <div className={styles.track_box}>
                    <figure className={styles.tract_image}>
                        <Image width={130} src={s} objectFit="contain" alt="Track image" placeholder="blur" objectPosition="50% 50%"/>
                    </figure>
                    <h1 className={styles.title}>Students</h1>
                    <p className={styles.desc}>All you need is dedication and interest in the sane, irrespective of your education background and you can get job ready with a 3 month long digital marketing course</p>
                </div>
                <div className={styles.track_box}>
                    <figure className={styles.tract_image}>
                        <Image width={130} src={js} objectFit="contain" alt="Track image" placeholder="blur" objectPosition="50% 50%"/>
                    </figure>
                    <h1 className={styles.title}>Job Seekers</h1>
                    <p className={styles.desc}>Our course will not only help you receive greater preferance in terms of payment but will also improve your work profile and broaden your carrer prospects matching the current job trends</p>
                </div>
                <div className={styles.track_box}>
                    <figure className={styles.tract_image}>
                        <Image width={130} src={wp} objectFit="contain" alt="Track image" placeholder="blur" objectPosition="50% 50%"/>
                    </figure>
                    <h1 className={styles.title}>Working Professional</h1>
                    <p className={styles.desc}>After you are finished with our comprehensive digital marketing course you get to gain much exposure to your clients and know how to target your audience in no time</p>
                </div>
                <div className={styles.track_box}>
                    <figure className={styles.tract_image}>
                        <Image width={130} src={bo} objectFit="contain" alt="Track image" placeholder="blur" objectPosition="50% 50%"/>
                    </figure>
                    <h1 className={styles.title}>Business Owners</h1>
                    <p className={styles.desc}>In a scenerio of a limited budget, you can implement various digital marketing techniques on your own and grow your business after the completion of the course</p>
                </div>
            </div>
        </section>
    )
}

export default WhoCanApply
