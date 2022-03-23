import React from 'react'
import SectionHeader from './SectionHeader'
import FeatureDetails from './FeatureDetails'
import styles from './Feature.module.scss'

function Feature({ data, className }) {
  return (
    <section className={styles.container}>
      <div className={styles.section__header}>
        <SectionHeader text='HIGHLIGHTS OF THE PROGRAM' />
      </div>
      <div className={styles.feature__box}>
        {data.map((item) => {
          return (
            <div className={styles.feature} key={item.id}>
              <FeatureDetails {...item} className={className} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Feature
