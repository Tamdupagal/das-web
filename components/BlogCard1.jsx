import styles from './BlogCard1.module.scss'
import Image from 'next/image'
import Link from 'next/link'


function BlogCard(props) {
    return (
        <div className={styles.card}>
            <div className={styles.blog__details}>
                <h1 className={styles.title}>{props.title}</h1>
                <p className={styles.desc}>
                    {props.text}
                </p>
                <button className={styles.btn}>
              <Link  href="https://wa.me/917304360502?text=I'm%20interested%20in%20your%20Game%20Development%20Course" >
              <a target="_blank" className={styles.Link}>LEARN MORE</a> 
              </Link>
              </button>
            </div>
        </div>
    )
}

export default BlogCard
