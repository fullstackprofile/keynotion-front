import Image from 'next/image'
import React from 'react'

import styles from './AboutUsCard.module.css'

export const AboutUsCard = ({ title, subTitle }) => {
  return (
    <div className={styles.aboutUsCard}>
      <div>
        <Image src="/AboutEventCart.svg" alt="Cart" width={38} height={38} />
      </div>
      <div className={styles.aboutUsCard_text_block}>
        <p className={styles.aboutEvantsCart_title}>{title}</p>
        <p className={styles.aboutEvantsCart_subTitle}>{subTitle}</p>
      </div>
    </div>
  )
}
