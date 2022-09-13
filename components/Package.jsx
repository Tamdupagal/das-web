import React, { useContext } from 'react'
import { AppContext } from '../AppContext';
import {responsive } from '../helpers/Package';
import ButtonGroup from './ButtonGroup';
import styles from './Package.module.scss';
import SectionHeader from './SectionHeader';
import Link from 'next/link';



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
                    <button  className={styles.button}>
                    <Link  href="https://wa.me/917304360502?text=I'm%20interested%20in%20your%20Game%20Development%20Course" >
                    <a target="_blank" className={styles.Link}>Study First Pay Later</a> 
                    </Link>
                    </button> 
            <p className={styles.price__desc}>{data}</p>
        </section>
    )
}

export default Package
