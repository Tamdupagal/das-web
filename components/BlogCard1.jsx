import styles from './BlogCard1.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { AppContext } from '../AppContext'
import { useContext } from 'react'
import Popup from 'reactjs-popup'
import LeadForm from '../main/components/Form/LeadForm'

function BlogCard(props) {
    const { setToggleLoginForm, setIsAdmin } = useContext(AppContext)

    const handleForm = function () {
        setIsAdmin(false)
        setToggleLoginForm(true)
    }
    return (
        <div className={styles.card}>
            <div className={styles.blog__details}>
                <h1 className={styles.title}>{props.title}</h1>
                <p className={styles.desc}>
                    {props.text}
                </p>
                <button className={styles.btn} >
                    <Link href={"/foundation-course"} className={styles.Link}>LEARN MORE</Link>


                </button>
            </div>
        </div>
    )
}

export default BlogCard
