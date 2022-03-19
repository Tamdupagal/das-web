import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import {FaHourglassHalf, FaStar} from 'react-icons/fa'
import styles from './CourseBox.module.scss';
import Button from './Button';
import { motion } from 'framer-motion';

function CourseBox(props) {

    return (
                        <div className={styles.course_box}>
                            <figure className={styles.course_image}>
                                <Image src={props.imgSrc} objectFit="fill" alt={props.alt}/>
                            </figure>
                            <div className={styles.info_box}>
                                <h3 className={styles.title}>{props.title}</h3>
                                <h1 className={styles.heading}>{props.heading}</h1>
                                <motion.p className={styles.desc}>
                                    {props.description}
                                    <br/>
                                    <br />
                                    <span>{props.classes}</span>
                                </motion.p>
                                <div className={styles.btn_wrapper}>
                                    <Button style={{backgroundColor : "orangered"}} href={"/"+props.path}>{props.btnText}</Button>
                                </div>
                            </div>
                        </div>
    )
}

export default CourseBox