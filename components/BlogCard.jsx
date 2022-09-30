import styles from './BlogCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'


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
                <button className={styles.btn}>
              <Link  href="https://share.hsforms.com/1pNjOe_2IQC6jbHw4xtxlsgdk9uk" >
              <a target="_blank" className={styles.Link}>JOIN EVENT</a> 
              </Link>
              </button>
            </div>
        </div>
    )
}

export default BlogCard
