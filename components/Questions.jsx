import styles from './Questions.module.scss'
import {FaPlus} from 'react-icons/fa'

function Questions() {
    return (
        <section className={styles.container}>
            <h1 className={styles.main_heading}>Frequently asked questions!</h1>
            <div className={styles.wrapper}>
                <div className={styles.accordian}>
                    <p>How is Digital Marketing Certificate different from others ?<FaPlus className={styles.plus}/></p>
                </div>
                <div className={styles.accordian}>
                    <p>What kind of certification will i get after the course ? <FaPlus className={styles.plus}/></p>
                </div>
                <div className={styles.accordian}>
                    <p>How much time do i need to spend well in this course ?<FaPlus className={styles.plus}/></p>
                </div>
                <div className={styles.accordian}>
                    <p>What kind of real industry project are part of this course ? <FaPlus className={styles.plus}/></p>
                </div>
                <div className={styles.accordian}>
                    <p>How do i know that this project curriculum is the best? <FaPlus className={styles.plus}/></p>
                </div>
                <div className={styles.accordian}>
                    <p>Who can take this course? <FaPlus className={styles.plus}/></p>
                </div>
                <div className={styles.accordian}>
                    <p>Can i get a refund?<FaPlus className={styles.plus}/></p>
                </div>
                <div className={styles.accordian}>
                    <p>Do you provide a demo class?<FaPlus className={styles.plus}/></p>
                </div>
                <div className={styles.accordian}>
                    <p>Who will teach us digital marketing course? <FaPlus className={styles.plus}/></p>
                </div>
                <div className={styles.accordian}>
                    <p>How do i start my course? <FaPlus className={styles.plus}/></p>
                </div>
            </div>
        </section>
    )
}

export default Questions
