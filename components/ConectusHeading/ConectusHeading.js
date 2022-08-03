import Image from 'next/image'
import React from 'react'
import styles from './ConectusHeading.module.css'

export const ConectusHeading = () => {
  return (
    <div className={styles.conectusHeading}>
      <div className={styles.conectusHeading_content}>
        <div className={styles.content_title_block}>
          <p className={styles.content_title}>Contact US</p>
        </div>
        <div className={styles.content_SubTitles_block}>
          <p className={styles.content_SubTitle}>
            Let us know how we can best help you find what you’re looking for.
            <br />
            We will be in touch shortly.
          </p>
        </div>
      </div>
      <div className={styles.conectusHeading_img}>
        <Image
          src="/ConectUsHeadingBack.png"
          alt="ConectUsHeadingBack"
          width={784}
          height={584}
        />
      </div>
    </div>
  )
}
