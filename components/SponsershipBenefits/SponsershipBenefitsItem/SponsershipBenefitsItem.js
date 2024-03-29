import Image from 'next/image'
import React from 'react'
import useIsMobile from '../../../Helpers/helpers'
import styles from './SponsershipBenefitsItem.module.css'

export const SponsershipBenefitsItem = ({
  title,
  subTitle,
  src,
  width,
  height,
  fullWidht,
}) => {
  const isMobile = useIsMobile()
  return (
    <div
      className={styles.content_item}
      style={{ width: isMobile >= 1200 ? fullWidht : 'unset' }}
    >
      <div className={styles.content_item_img}>
        <Image
          src={src}
          alt="Logo"
          width={width ? width : 110}
          height={height ? height : 110}
        />
      </div>
      <div className={styles.content_item_text}>
        <p className={styles.text_title}>{title}</p>
        <p className={styles.text_subTitle}>{subTitle}</p>
      </div>
    </div>
  )
}
