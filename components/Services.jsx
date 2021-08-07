import React, { useState } from 'react'
import styles from './Services.module.scss';
import SectionHeader from './SectionHeader';
import FeatureDetails from './FeatureDetails';
import Performance from '../assets/key-feature/performance.svg';
import Partnership from '../assets/key-feature/partnership.svg';
import { AnimatePresence, motion } from 'framer-motion'
import { FaPlay, FaTimes } from 'react-icons/fa'


const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Understand DM Basics and setup and run campaigns on 7+ tools.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'Build, run, analyze and optimize Search and Social Media Campaigns.',
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
            <figure className={styles.service__img}>
                <div area-label="play video button" className={styles.play__btn} onClick={()=>setModalOpen(true)}>
                    <FaPlay area-label="play video button" className={styles.play__btn__arow} />
                </div>
            </figure>
            <div className={styles.content__box}>
                <div className={styles.service__header}>
                    <SectionHeader slogan="ACHIEVEMENT" text="Create content &
                    viral marketing strategies through Organic Reach and Brand awarenesscd" />
                </div>
                {data.map(item => {
                    return (
                        <div className={styles.feature__box} key={item.id}>
                            <FeatureDetails {...item} />
                        </div>
                    )
                })}
            </div>
                    <AnimatePresence>
                {isVideoModalOpen &&
                    <motion.div
                         variants={IFRAME()}
                            transition={
                                {
                                type: "spring",
                                bounce: 0.4
                                }
                            }
                            animate="vissible"
                            initial="hidden"
                            exit="exit"
                            className={styles.iframe__container}
                        >
                    <motion.iframe
                            className={styles.iframe}
                            src="https://www.youtube.com/embed/rtgbaKBhdkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </motion.iframe>
                        <FaTimes className={styles.close__btn} onClick={() => setModalOpen(false)} />
                    </motion.div>
                    
                }
            </AnimatePresence>
            
        </section >
    )
}

export default Services
