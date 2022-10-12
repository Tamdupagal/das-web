import styles from './BlogCard1.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { AppContext } from '../AppContext'
import { useContext } from 'react'

function BlogCard(props) {
    const { setToggleLoginForm, setIsAdmin } = useContext(AppContext)

    const handleForm = function () {
      setIsAdmin(false)
      setToggleLoginForm(true)
    }
    return (
        <div className={styles.card} data-aos="zoom-in">
            <div className={styles.blog__details}>
                <h1 className={styles.title}>{props.title}</h1>
                <p className={styles.desc}>
                    {props.text}
                </p>
                <button className={styles.btn}  onClick={handleForm}>
              <a target="_blank" className={styles.Link}>LEARN MORE</a> 
              </button>
            </div>
        </div>
    )
}

export default BlogCard
