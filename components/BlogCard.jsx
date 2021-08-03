import Image from 'next/image';
import React from 'react';
import styles from './BlogCard.module.scss';

function BlogCard(props) {
    return (
        <div className={styles.card}>
            <figure>
                <Image src={props.imgSrc} alt={props.alt} objectFit="contain"/>
            </figure>
            <div className={styles.blog__details}>
                <h1 className={styles.title}>{props.role}</h1>
                <div className={styles.blog__author}>
                    <span className={styles.name}>{props.name}</span>
                    <span className={styles.date}>{props.date}</span>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
