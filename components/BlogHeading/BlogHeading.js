import Image from 'next/image'
import React from 'react'

import styles from './BlogHeading.module.css'

export const BlogHeading = () => {
  return (
    <div className={styles.blogHeading}>
      <div className={styles.blogHeading_content}>
        <p className={styles.home}>Home</p>
        <div className={styles.arrow}>
          <Image src="/BlogArrowLiner.svg" width={18} height={18} />
        </div>
        <p className={styles.blog}>Blog</p>
      </div>
    </div>
  )
}
