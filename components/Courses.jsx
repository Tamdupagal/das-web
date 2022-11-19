import styles from './Courses.module.scss';
import Image from 'next/image';
import {FaHourglassHalf, FaStar} from 'react-icons/fa'
import Button from './Button'
import fswd from '../assets/fullstack_web_development.jpg'
import fsawd from '../assets/fullstack_angular_web_development.jpg'
import fscc from '../assets/fullstack_cloud_computing.jpg'


function Courses() {
    return (
        <section className={styles.container}>
            <h1 className={styles.main_title}>Our Courses</h1>
                
            <div className={styles.main_wrapper}>

                    <div className={styles.wrapper}>
                        <h1 className={styles.heading}>Backend & Fullstack Development</h1>
                        <div className={styles.course_box}>
                            <figure className={styles.course_image}>
                                <Image height={400} width={500} src={fswd} objectFit="cover" alt="Image of a course" placeholder="blur"/>
                            </figure>
                            <div className={styles.info_box}>
                                <h1 className={styles.title}>Full Stack Web Development</h1>
                                <div className={styles.review}>
                                        <FaStar className={styles.stars}/>
                                        <FaStar className={styles.stars}/>
                                        <FaStar className={styles.stars}/>
                                        <FaStar className={styles.stars}/>
                                        <FaStar className={styles.stars} />
                                        4.8 (95 reviews)
                                </div>
                                <p className={styles.desc}>
                                    Build Complete Web and Hybrid Mobile Solutions. Master front-end web, hybrid mobile app and
                                    server-side development in three comprehensive courses
                                    <br/>
                                    <br />
                                    <span><FaHourglassHalf className={styles.hourglass}/> 12+ classes</span>
                                </p>
                                <Button href='/full-stack-development'>Find Out More</Button>
                            </div>
                            </div>
                </div>
                

                    <div className={styles.wrapper}>
                        <h1 className={styles.heading}>Data Science</h1>
                        <div className={styles.course_box}>
                            <figure className={styles.course_image}>
                                <Image  height={400} width={500} src={fsawd} objectFit="cover" alt="Image of a course" placeholder="blur"/>
                            </figure>
                            <div className={styles.info_box}>
                                <h1 className={styles.title}>Full Stack angular development</h1>
                                <div className={styles.review}>
                                        <FaStar className={styles.stars}/>
                                        <FaStar className={styles.stars}/>
                                        <FaStar className={styles.stars}/>
                                        <FaStar className={styles.stars}/>
                                        <FaStar className={styles.stars} />
                                        4.8 (58 reviews)
                                </div>
                                <p className={styles.desc}>
                                    Build Complete Web and Hybrid Mobile Solutions. Master front-end web, hybrid mobile app and
                                    server-side development in three comprehensive courses
                                    <br/>
                                    <br />
                                     <span><FaHourglassHalf className={styles.hourglass}/> 10+ classes</span>
                                </p>
                                <Button href="/data-science">Find Out More</Button>
                            </div>
                            </div>
                </div>
                
            
                    <div className={styles.wrapper}>
                        <h1 className={styles.heading}>Digital Marketing</h1>
                        <div className={styles.course_box}>
                            <figure className={styles.course_image}>
                                <Image  height={400} width={500} src={fscc} objectFit="cover" alt="Image of a course" placeholder="blur"/>
                            </figure>
                            <div className={styles.info_box}>
                                <h1 className={styles.title}>Full Stack cloud computing</h1>
                                <div className={styles.review}>
                                        <FaStar className={styles.stars}/>
                                        <FaStar className={styles.stars}/>
                                        <FaStar className={styles.stars}/>
                                        <FaStar className={styles.stars}/>
                                        <FaStar className={styles.stars} />
                                        4.8 (95 reviews)
                                </div>
                                <p className={styles.desc}>
                                    Build Complete Web and Hybrid Mobile Solutions. Master front-end web, hybrid mobile app and
                                    server-side development in three comprehensive courses
                                    <br/>
                                    <br />
                                     <span><FaHourglassHalf className={styles.hourglass}/> 4+ classes</span>
                                </p>
                                <Button>Find Out More</Button>
                            </div>
                            </div>
                    </div>
            </div>
            <Button style={{alignSelf: 'center'}}>View All Courses</Button>
        </section>
    )
}

export default Courses
