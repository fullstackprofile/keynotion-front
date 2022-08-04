import Image from 'next/image'
import React from 'react'
import styles from './WhyAttedCart.module.css'

export const WhyAttedCart = ({ title, subTitle }) => {
  return (
    <div className={styles.WhyAttedCart}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
      <div className={styles.icon}>
        <Image src="/arrowRight.svg" alt="iconarrow" width={16} height={24} />
      </div>
    </div>
  )
}
