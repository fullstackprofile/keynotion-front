import Image from 'next/image'
import React from 'react'

import styles from './DontMiss.module.css'

export const DontMiss = () => {
  return (
    <div className={styles.dontMiss}>
      <div className={styles.dontMiss_body}>
        <div className={styles.img}>
          <Image src="/DontMiss.png" width={787} height={616} />
        </div>
        <div className={styles.content}>
          <p className={styles.title}>
            Don’t miss out on this exclusive event!!!
          </p>
          <p className={styles.subTitle}>
            Industry leaders know that they need to adapt to rapid changes and
            need to learn from their peers. If you are still undecided and needs
            help with registration, send an email to{' '}
            <span className={styles.liner}>office@key-notion.com</span>{' '}
          </p>
        </div>
      </div>
    </div>
  )
}
