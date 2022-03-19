import styles from './Learning.module.scss';
import Image from 'next/image';
import {FaCircle} from 'react-icons/fa'
import Button from './Button'
import itdm from '../assets/introduction_to_digital_marketing.png'
import dads from '../assets/display_ads.jpg'
import im from '../assets/inbound_marketing.png'


function Learning() {
    return (
        <section className={styles.container}>
            <h1 className={styles.main_title}>What will you learn ?</h1>
                
            <div className={styles.main_wrapper}>

                    <div className={styles.wrapper}>
                        <div className={styles.course_box}>
                            <figure className={styles.course_image}>
                            <Image height={400} width={400} src={itdm} objectFit="cover" alt="Image of a course" placeholder="blur"/>
                            </figure>
                            <div className={styles.info_box}>
                                <h1 className={styles.title}>Introduction to Digital Marketing</h1>
                                    <article className={styles.points}>
                                        <span><FaCircle className={styles.dot}/>Digital Marketing Strategy Planning</span>
                                        <span><FaCircle className={styles.dot}/>Website Planning & Development (Wordpress)</span>
                                        <span><FaCircle className={styles.dot}/>Search Engine Optimization</span>
                                        <span><FaCircle className={styles.dot}/>Black Hat SEO</span>
                                        <span><FaCircle className={styles.dot}/>Ecommerce Website Development</span>
                                        <span><FaCircle className={styles.dot}/>Schema Markup and Implementation</span>
                                        <span><FaCircle className={styles.dot}/>Online Reputaion Management</span>
                                        <span><FaCircle className={styles.dot}/>Search Engine Marketing (Google ads)</span>
                                    </article>
                                <Button>Find Out More</Button>
                            </div>
                        </div>
                    </div>
                         

                    <div className={styles.wrapper}>
                        <div className={styles.course_box}>
                            <figure className={styles.course_image}>
                                <Image height={400} width={400} src={dads} objectFit="cover" alt="Image of a track" placeholder="blur"/>
                            </figure>
                            <div className={styles.info_box}>
                                <h1 className={styles.title}>Display Ads</h1>
                                    <article className={styles.points}>
                                        <span><FaCircle className={styles.dot}/>Video Ads</span>
                                        <span><FaCircle className={styles.dot}/>Google Merchant Centre</span>
                                        <span><FaCircle className={styles.dot}/>E commerce Marketing</span>
                                        <span><FaCircle className={styles.dot}/>Web Analytics</span>
                                        <span><FaCircle className={styles.dot}/>Heatmap Implementations & Analysis</span>
                                        <span><FaCircle className={styles.dot}/>Facebook Marketing</span>
                                        <span><FaCircle className={styles.dot}/>Facebook Marketing & Listing</span>
                                        <span><FaCircle className={styles.dot}/>Twitter Marketing</span>
                                    </article>
                                <Button>Find Out More</Button>
                            </div>
                            </div>
                    </div>
                         

                    <div className={styles.wrapper}>
                        <div className={styles.course_box}>
                            <figure className={styles.course_image}>
                                <Image height={400} width={400} src={im} objectFit="cover" alt="Image of a course" placeholder="blur"/>
                            </figure>
                            <div className={styles.info_box}>
                                <h1 className={styles.title}>Inbound Marketing</h1>
                                    <article className={styles.points}>
                                        <span><FaCircle className={styles.dot}/>Conversation Rate Optimization</span>
                                        <span><FaCircle className={styles.dot}/>E mail Marketing</span>
                                        <span><FaCircle className={styles.dot}/>Lead Nuturing via Email Marketing</span>
                                        <span><FaCircle className={styles.dot}/>Email Authetication</span>
                                        <span><FaCircle className={styles.dot}/>Content Market & Analysis</span>
                                        <span><FaCircle className={styles.dot}/>Lead Generation</span>
                                        <span><FaCircle className={styles.dot}/>Remarking Campaigns Listing</span>
                                        <span><FaCircle className={styles.dot}/>Blog Designing & Promotion</span>
                                    </article>
                                <Button>Find Out More</Button>
                            </div>
                            </div>
                    </div>
            </div>
        </section>
    )
}

export default Learning
