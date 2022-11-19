import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, {useState } from 'react';
import { TEAM_DATA } from '../helpers/Team';
import SectionHeader from './SectionHeader';
import styles from './Team.module.scss';


function Team() {

    const [isHovering, setHovering] = useState(false)


    const icon_variant = {
        initial: {
            x: "10rem",
            opacity: 0,
        },
        vissible: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.5,
                delay: 0.05*(3-i),
            }
        }),
        exit: {

        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.section__header}>
                <SectionHeader slogan="OUR TEAM" text="The most qualified and talented individuals"/>
            </div>
            <div className={styles.team__box}>
                {TEAM_DATA.map(item => {
                    return (
                        <motion.div key={item.id} className={styles.team__member} onTapStart={() => setHovering({ [item.id]: true })} onTap={() => setHovering({ [item.id]: true })} onHoverStart={() => setHovering({ [item.id]: true })} onHoverEnd={()=>setHovering({ [item.id]: false })}>
                            <figure className={styles.image}>
                                {/* <Image src={item.imgSrc} alt={item.altText} layout="fill"/> */}
                            </figure>
                            <span className={styles.title}>{item.title}</span>
                            <h1 className={styles.designation}>{item.designation}</h1>
                            <AnimatePresence>
                                {isHovering[item.id] &&
                                    <motion.ul key={item.id} className={styles.social__icons}>
                                    {item.socialProfile.map(item => {
                                        return (
                                            <motion.li layout variants={icon_variant} custom={item.id} animate="vissible" initial="initial" key={item.id}>{<item.icon aria-label={item.name} className={styles.icon} />}</motion.li>
                                            )
                                        })}
                                    </motion.ul>}
                            </AnimatePresence>
                        </motion.div>
                    )
                })}
            </div>
        </section >
    )
}

export default Team
