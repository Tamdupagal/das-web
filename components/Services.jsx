import React, { useState } from 'react'
import styles from './Services.module.scss';
import SectionHeader from './SectionHeader';
import FeatureDetails from './FeatureDetails';
import Performance from '../main/assets/Understanding-DM.svg';
import Partnership from '../main/assets/art.svg';



const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Understanding DM',
    title: 'Understanding DM',
    text:
      'Understand DM Basics\nDomain-specific Research & development',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'State of the art DM',
    title: 'State of the art DM',
    text:
      'Build, run, analyze and optimize Search and SM Campaigns\nSetup and run industry-relevant DM campaigns',
    },]


const IFRAME = () => {
    return {
        hidden: {
            x: "calc(-50% - 30rem)",
            y: "-50%",
            opacity: 0,
        },
        vissible: {
            x: "-50%",
            opacity: 1,
        },
        exit: {
            x: "calc(-50% + 30rem)",
            opacity: 0,
        }
        }
}
    


function Services() {
    
    const [isVideoModalOpen, setModalOpen] = useState(false)

    return (
        <section className={styles.container}>
            <figure className={styles.service__img}/>
            <div className={styles.content__box}>
                <div className={styles.service__header}>
                    <SectionHeader slogan="ACHIEVEMENT" text="Be Industry ready
Come up with new ideas for DM 
Identified & solve DM problems for companies " />
                </div>
                {data.map(item => {
                    return (
                        <div className={styles.feature__box} key={item.id}>
                            <FeatureDetails {...item} />
                        </div>
                    )
                })}
            </div>            
        </section >
    )
}

export default Services
