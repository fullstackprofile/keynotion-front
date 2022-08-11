import Image from 'next/image'
import React from 'react'
import Rating from '@mui/material/Rating'
import styles from './TestiMonialsCart.module.css'

export const TestiMonialsCart = ({
  rating,
  title,
  subTitle,
  companyName,
  logo,
  position,
  profession,
}) => {
  return (
    <div className={styles.testiMonialsCart_block}>
      <div className={styles.testiMonialsCart}>
        <div>
          <div className={styles.rating}>
            <div className={styles.rating_icon}>
              <Image src="/Done.png" alt="done" width={38} height={38} />
            </div>
            <div>
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                value={rating}
                readOnly
              />
            </div>
          </div>
          <div className={styles.subTitle_block}>
            <p className={styles.subTitle}>{subTitle}</p>
          </div>
          <div className={styles.title_block}>
            <p className={styles.title}>{title},</p>
            <p className={styles.title}>{position},</p>
            <p className={styles.title}>{profession}</p>
          </div>
        </div>
        <div className={styles.company}>
          <Image src={logo} width={60} height={50} />
          <div className={styles.company_name_block}>
            <p className={styles.company_name}>{companyName}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
