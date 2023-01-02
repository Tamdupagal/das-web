import React, { useContext } from 'react'
import { AppContext } from '../AppContext';
import { responsive } from '../helpers/Package';
import ButtonGroup from './ButtonGroup';
import styles from './Package.module.scss';
import SectionHeader from './SectionHeader';
import Link from 'next/link';
import Popup from 'reactjs-popup';
import LeadForm from '../main/components/Form/LeadForm';
import { useState } from 'react';
import Modal from 'react-responsive-modal';



function Package({ data }) {
    const { setToggleLoginForm, setIsAdmin } = useContext(AppContext)

    
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);



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
                <SectionHeader slogan="PRICING PLAN" text="Choose your pricing policy" />
            </div>
            <button className={styles.button} >

                <p className={styles.Link}>
                    <a onClick={onOpenModal} target="_blank" className={styles.Link}>STUDY FIRST PAY LATER</a>
                </p>

            </button>
            <Modal
                open={open}
                onClose={onCloseModal}
                center>
                <LeadForm />
            </Modal>
            <p className={styles.price__desc}>{data}</p>
        </section>
    )
}

export default Package
