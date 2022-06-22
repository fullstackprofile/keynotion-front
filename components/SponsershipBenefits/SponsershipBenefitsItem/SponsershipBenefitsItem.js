import Image from 'next/image'
import React from 'react'


import styles from "./SponsershipBenefitsItem.module.css"

export const SponsershipBenefitsItem = ({title,subTitle,src}) => {
  return (
    <>
     <div className={styles.content_item}>
                <div className={styles.content_item_img}>
                    <Image src={src} alt='Logo' width={110} height={110} />
                </div>
                <div className={styles.content_item_text}>
                    <p className={styles.text_title}>{title}</p>
                    <p className={styles.text_subTitle}>{subTitle}</p>
                </div>
    </div>
    </>
  )
}
