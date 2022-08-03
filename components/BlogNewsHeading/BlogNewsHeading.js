import Image from 'next/image'
import React from 'react'
import styles from './BlogNewsHeading.module.css'

export const BlogNewsHeading = () => {
  return (
    <div className={styles.blogNewsHeading}>
      <div className={styles.blogHeading_content}>
        <p className={styles.home}>Home</p>
        <div className={styles.arrow}>
          <Image src="/BlogNewsArrow.svg" width={18} height={18} />
        </div>
        <p className={styles.blog}>Blog</p>
        <div className={styles.arrow}>
          <Image src="/BlogArrowLiner.svg" width={18} height={18} />
        </div>
        <p className={styles.news}>News</p>
      </div>
    </div>
  )
}
