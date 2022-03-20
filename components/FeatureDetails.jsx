import Image from 'next/image';
import React, { useContext } from 'react'
import {motion} from 'framer-motion'
import styles from './FeatureDetails.module.scss';
import { GoPrimitiveDot as Dot } from "react-icons/go";
import { useEffect } from 'react';
import withForm from '../HOC/withForm';
import { AppContext } from '../AppContext';


function FeatureDetails({ id, title, text, imgSrc, altText, btnText, showIcon, leftMargin = false, isWhite = false, pattern, description, style, offset }) {
    
    const { setToggleLoginForm, setIsAdmin } = useContext(AppContext);

    const handleForm = function () {
        setIsAdmin(false);
        setToggleLoginForm(true);
    }
        
    return (
        <>
            {altText && <figure className={styles.feature__img}>
                <Image src={imgSrc} alt={altText} layout="responsive"/>
            </figure>}
            {showIcon && <div className={styles.workflow__icon}>
                <span>{"0" + id}</span>
                {pattern === 'even' ?
                    <motion.svg className={styles.arrow__even} width="204" height="43" viewBox="0 0 204 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.481201 10.2571C0.481201 10.2571 92.7812 81.7847 195.481 10.2571" stroke="#C2CBDE" strokeWidth="2" strokeDasharray="5 5"/>
                        <path d="M180.7 3.47455C180.7 3.47455 199.815 -2.05177 201.637 4.20916C203.459 10.4701 202.093 16.9444 196.176 25.8142" stroke="#C2CBDE" strokeWidth="2" strokeDasharray="4 4"/>
                    </motion.svg>
                    : pattern === 'odd' && <motion.svg className={styles.arrow__odd} width="204" height="43" viewBox="0 0 204 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.999756 32.7195C0.999756 32.7195 93.2998 -38.8081 196 32.7195" stroke="#C2CBDE" strokeWidth="2" strokeDasharray="5 5"/>
                        <path d="M181.219 39.4976C181.219 39.4976 200.334 45.024 202.156 38.763C203.978 32.5019 202.611 26.0275 196.694 17.1575" stroke="#C2CBDE" strokeWidth="2" strokeDasharray="4 4"/>
                    </motion.svg>}
            </div>}
            <div className={styles.feature__details} data-margin={offset} style={style} data-white={isWhite}>
                {title && <h1 data-white={isWhite} className={styles.title}>
                    {title}
                </h1>}
                {text instanceof Array ? text?.length && 
                    <ul className={styles.description}>
                        {text.map((phrase, index) => {
                            return <li key={index} className={styles.phrase}><Dot className={styles.dot} />{phrase}</li>
                        })}
                    </ul> : <p className={styles.text}>{text}</p>}
                {description && <p className={styles.text}>
                    {description}
                </p>}
                {btnText && <button onClick={handleForm} className={styles.feature__btn}>{btnText}</button>}
            </div>
        </>
    )
}


export default FeatureDetails
