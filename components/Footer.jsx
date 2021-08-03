import Image from 'next/image';
import React from 'react';
import Logo from '../assets/logo.svg';
import {FaHeart} from 'react-icons/fa'
import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <figure className={styles.logo}>
                <Image src={Logo} alt="logo" width={200} objectFit="contain" />
            </figure>
            <ul className={styles.footer__navigation}>
                <li>Home</li>
                <li>Adversite</li>
                <li>Supports</li>
                <li>Marketing</li>
                <li>Contact</li>
            </ul>
            <p className={styles.copyright}>
                Made with <FaHeart className={styles.heart}/> by Utkarsh,
            </p>
        </footer>
    )
}

export default Footer