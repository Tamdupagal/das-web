import React from 'react'
import styles from './SectionHeader.module.scss';

function SectionHeader({slogan, text, bigHeading, isWhite=false}) {
    return (
        <>
            <h1 className={styles.title} data-white={isWhite}>
                {slogan}
            </h1>
            {bigHeading && <h1 className={styles.big__heading} data-white={isWhite}>
                    {bigHeading}
            </h1>}
            {text && <p className={styles.heading} data-white={isWhite}>
                {text}
            </p>}
        </>
    )
}

export default SectionHeader
