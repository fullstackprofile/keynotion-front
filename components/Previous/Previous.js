import Image from 'next/image'
import React from 'react'
import { ButtonComp } from '../Button/Button'

import styles from './Previous.module.css'

export const Previous = ({ img, title }) => {
  console.log(title)
  return (
    <div className={styles.previousHeading_wrapper}>
      <div className={styles.previousHeading}>
        <div className={styles.previousHeading_content}>
          <Image src={img} width={1920} height={590} />
          <div className={styles.previousHeading_block}>
            <p className={styles.previousHeading_title}>{title}</p>
            <div className={styles.checkOut_block}>
              <p className={styles.checkOut_title}>
                Check Out Conjoint 2018 Summits
              </p>
              <p className={styles.checkOut_subTitle}>
                Click here to get the PDF of 2018’s events highlights
              </p>
              <div className={styles.checkOut_btn}>
                <ButtonComp title="Get It Here!" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
