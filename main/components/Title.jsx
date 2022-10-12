import React from 'react';
import styles from './Title.module.scss';
import { GoPrimitiveDot } from "react-icons/go"

function Title(props) {
    
    const { text, ...restProps} = props
    
  return (
      <h2 {...restProps} className={styles.title}><GoPrimitiveDot className={styles.dot}/>{text}</h2>
  )
}

export default Title