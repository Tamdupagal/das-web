import styles from './BlogCard.module.scss'

function BlogCard(props) {
    return (
        <div className={styles.card}>
            <div className={styles.blog__details}>
                <h1 className={styles.title}>{props.title}</h1>
                <p className={styles.desc}>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default BlogCard
