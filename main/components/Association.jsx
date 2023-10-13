import Image from 'next/image';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'
import about from '../assets/association.svg'
import styles from './Association.module.scss';


function Association() {
    return (
      <section className={styles.container}>
        <h1 className={styles.heading}>WITH OUR PROGRAM YOU WILL GAIN</h1>
        <div className={styles.wrapper}>
          <div className={styles.footer_text}>
            <ul>
              <strong>Expertise Beyond Boundaries</strong>
              <li>
                <FaCheckCircle className={styles.check} />
                Learn the art and science of Generative AI
              </li>
              <li>
                <FaCheckCircle className={styles.check} />
                Digitally Aided Support
              </li>
            </ul>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ul>
              <strong>Cutting-Edge Technology</strong>
              <li>
                <FaCheckCircle className={styles.check} />
                Stay ahead with the latest advancements
              </li>
              <li>
                <FaCheckCircle className={styles.check} />
                User-Friendly Platforms
              </li>
            </ul>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ul>
              <strong>Achievement-Driven Mentorship</strong>
              <li>
                <FaCheckCircle className={styles.check} />
                Guidance that goes beyond limits
              </li>
              <li>
                <FaCheckCircle className={styles.check} />
                Focused Support and Deadlines
              </li>
            </ul>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </section>
    );
}

export default Association