import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { useState } from 'react'
import { PACKAGE_DATA, responsive } from '../helpers/Package';
import ButtonGroup from './ButtonGroup';
import styles from './Package.module.scss';
import PackageCard from './PackageCard';
import SectionHeader from './SectionHeader';




function Package() {
    const { monthly, annual } = PACKAGE_DATA();

    const [selectedPlan, setSelectedPlan] = useState({
        0 : true
    })

    const sliderParams = {
        additionalTransfrom: 0,
        arrows: false,
        autoPlaySpeed: 3000,
        centerMode: false,
        className: '',
        slidesToSlide: 1,
        items: 3,
        containerClass: 'carousel-container',
        customButtonGroup: <ButtonGroup />,
        dotListClass: '',
        focusOnSelect: false,
        infinite: false,
        keyBoardControl: false,
        itemClass: '',
        minimumTouchDrag: 80,
        renderButtonGroupOutside: true,
        renderDotsOutside: false,
        responsive,
        showDots: false,
        sliderClass: '',
    };

    const btn_transition = {
        type: 'spring',
        bounce: 0.25,
        duration: 0.4
    }

    const plan_variant = (i) => {
        return {
            hidden: {
                x: '-30rem',
                opacity: 0,
            },
            vissible: {
                x: 0,
                opacity: 1,
                transition: {
                    delay: 0.05 * i,
                    when: "beforeChildren",
                },
            },
        }
    }

    return (
        <section className={styles.container} id='pricing'>
            <div className={styles.section__header}>
                <SectionHeader slogan="PRICING PLAN" text="Choose your pricing policy"/>
            </div>
            <AnimateSharedLayout>
                <motion.div layout className={styles.package__button}>
                     <AnimatePresence>                    
                           {selectedPlan[1] ? <motion.button key="btn" layout layoutId="planBtn" transition={btn_transition} className={styles.button}>STUDY FIRST PAY LATER</motion.button> : <span onClick={() => setSelectedPlan({ 0 : true })} className={styles.dummy}>STUDY FIRST PAY LATER</span >}
                    </AnimatePresence>
                </motion.div>
            </AnimateSharedLayout>
           <p className={styles.price__desc}>With Study first pay later,scholarship & EMI options, your payment can be Pay as you like or pay as you go.
<br/> <br/> Total fee: Rs 1.5L inclusive of GST.</p>
        </section>
    )
}

export default Package
