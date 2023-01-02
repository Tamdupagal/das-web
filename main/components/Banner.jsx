import Typewriter from 'typewriter-effect';
import styles from './Banner.module.scss';
import { useContext } from 'react';
import LeadForm from './Form/LeadForm';
import Modal from 'react-responsive-modal';
import { useState } from 'react';

const phrases = ["Game Development.", "Web3 Courses."];

export default function Banner() {


    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <section className={styles.container}>

            <div className={styles.banner_info}>
                <h1 className={styles.title}>Study Now and Pay later</h1>
                <div className={styles.typewriter}>
                    <Typewriter
                        onInit={t => t.changeDeleteSpeed(1).changeDelay(0.4)}
                        options={{
                            strings: phrases,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <div className={styles.para}>
                    <h1 className={styles.title2}>
                        Be a Fullstack Game Developer As Per Industry Standards<br /> Portfolio & Interview Ready Program.
                    </h1>
                    <h1 className={styles.title3}>Connect with the real gaming community.</h1>
                    <h1 className={styles.title3}>Be a Creator, Not a Player</h1>
                </div>
                <button className={styles.button}
                     onClick={onOpenModal} >Study now and pay later
                </button>
                <Modal
                    open={open}
                    onClose={onCloseModal}
                    center>
                    <LeadForm />
                </Modal>

              {/*   <p className={styles.regis}>Registration Charge</p>

                <Link href="https://rzp.io/l/xVAzXSaY6" passHref={true}>
                    <div className={styles.price} style={{ marginTop: '12px', padding: '8px', borderRadius: '8px' }}>
                        <b style={{ color: '#fff' }}>
                            Was  <s>₹10000</s> &nbsp;Now ₹2999 + GST
                        </b>
                    </div>
                </Link> */}

            </div>
        </section>
    )
}
