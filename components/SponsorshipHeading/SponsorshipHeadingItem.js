import React from 'react'
import Image from 'next/image'

import styles from './SponsorshipHeadingItem.module.css'

export const SponsorshipHeadingItem = ({
  src,
  title,
  subTitle,
  width,
  height,
}) => {
  return (
    <>
      <div className={styles.about_sponsoship_content_item}>
        <div className={styles.content_img}>
          <Image src={src} alt="logo" width={width} height={height} />
        </div>
        <div className={styles.content_item_text_block}>
          <p className={styles.text_block_title}>{title}</p>
          <p className={styles.text_block_subTitle}>{subTitle}</p>
        </div>
      </div>
    </>
  )
}
