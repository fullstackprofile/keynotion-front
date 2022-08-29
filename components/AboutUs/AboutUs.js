import React from 'react'
import { AboutEvantsCart } from '../AboutEvants/AboutEvantsCart/AboutEvantsCart'
import styles from './AboutUs.module.css'
import { AboutUsCard } from './AboutUsCard/AboutUsCard'

export const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUs_content}>
        <AboutUsCard title="100%" subTitle="Professionalism" />
        <AboutUsCard title="100%" subTitle="Expertise" />
        <AboutUsCard title="100%" subTitle="Quality" />
      </div>
    </div>
  )
}
