import React from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import styles from './ButtonGroup.module.scss';

function ButtonGroup({ pause, play, next, prev, isOrange}) {
    return (
        <>
            <button onClick={prev} data-color={isOrange} className={styles.left__arow}><IoIosArrowRoundBack className={styles.arrow}/></button>
            <button onClick={next} data-color={isOrange} className={styles.right__arow}><IoIosArrowRoundForward className={styles.arrow}/></button>
        </>
    )
}

export default ButtonGroup
