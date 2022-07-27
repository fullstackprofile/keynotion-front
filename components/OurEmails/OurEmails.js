import Image from 'next/image'
import React from 'react'

import styles from './OurEmails.module.css'

export const OurEmails = () => {
  return (
    <div className={styles.ourEmails}>
      <div className={styles.ourEmails_content}>
        <div>
          <Image src="/RegistrationIcon.png" width={150} height={151} />
        </div>
        <p className={styles.content_title}>Registration</p>
        <p className={styles.content_subTitle}>office@key-notion.com</p>
      </div>
      <div className={styles.ourEmails_content}>
        <div>
          <Image src="/Payment.png" width={250} height={158} />
        </div>
        <p className={styles.content_title}>Payment / Invoices</p>
        <p className={styles.content_subTitle}>finance@key-notion.com</p>
      </div>
      <div className={styles.ourEmails_content}>
        <div>
          <Image src="/SponsorshipIcon.png" width={150} height={151} />
        </div>
        <p className={styles.content_title}>Sponsorship</p>
        <p className={styles.content_subTitle}>sponsorship@key-notion.com</p>
      </div>
    </div>
  )
}
