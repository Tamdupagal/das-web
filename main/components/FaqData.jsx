import React from 'react'
import styles from './FaqData.module.scss'
import { GoPrimitiveDot as Dot } from 'react-icons/go'
import Accordion from './Accordion'


export default function FaqData(props) {
  return (
    <div>
      <div></div>
      <section className={styles.container}>
        <div className={styles.box}>
          <Accordion
            title={props.title}
            content={props.desc}
            content1={props.desc1}
            content2={props.desc2}
            content3={props.desc3}
            content4={props.desc4}
            content5={props.desc5}
          />
        </div>
      </section>
    </div>
  );
}
