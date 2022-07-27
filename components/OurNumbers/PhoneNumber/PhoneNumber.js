import Image from 'next/image'
import React from 'react'

import styles from "./PhoneNumber.module.css"

export const PhoneNumber = ({text,number}) => {
  return (
    <div className={styles.content_body_item}>
        <Image src="/PhoneIcon_.svg" width={38} height={38} />
        <p className={styles.item_text}>{text} <span className={styles.black}>{number}</span></p>
    </div>
  )
}
