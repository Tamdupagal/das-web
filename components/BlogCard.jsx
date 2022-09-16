import styles from './BlogCard.module.scss'
import Image from 'next/image'

function BlogCard(props) {
    return (
        <div className={styles.card}>
            <div className={styles.blog__details}>
                <h1 className={styles.title}>{props.title}</h1>
                <figure className={styles.course_image}>
                <Image src={props.imgSrc} objectFit='fill' alt={props.alt} />
              </figure>
        <p className={styles.datetime}>{props.td}</p>
                <p className={styles.desc}>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default BlogCard
