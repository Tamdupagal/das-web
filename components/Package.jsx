import React, { useContext } from 'react'
import { AppContext } from '../AppContext';
import {responsive } from '../helpers/Package';
import ButtonGroup from './ButtonGroup';
import styles from './Package.module.scss';
import SectionHeader from './SectionHeader';




function Package({ data }) {
    

    const {setToggleLoginForm, setIsAdmin} = useContext(AppContext)
    
    const handleForm = function () {

        setIsAdmin(false);
        setToggleLoginForm(true)
    }


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



    return (
        <section className={styles.container} id='pricing'>
            <div className={styles.section__header}>
                <SectionHeader slogan="PRICING PLAN" text="Choose your pricing policy"/>
            </div>
                    <button onClick={handleForm} className={styles.button}>STUDY FIRST PAY LATER</button> 
            <p className={styles.price__desc}>{data}</p>
        </section>
    )
}

export default Package
