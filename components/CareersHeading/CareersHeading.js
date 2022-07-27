import Image from 'next/image'
import React from 'react'

import styles from './CareersHeading.module.css'

export const CareersHeading = () => {
  return (
    <div className={styles.careersHeading}>
      <div className={styles.careersHeading_content}>
        <div className={styles.content_title_block}>
          <p className={styles.content_title}>Join Us</p>
        </div>
        <div className={styles.content_SubTitles_block}>
          <p className={styles.content_SubTitle}>
            Being a part of Keynotion is a rewarding experience for
            professionals from diverse fields.
          </p>
          <p className={styles.content_SubTitle}>
            As part of a global team, our staff has the opportunity to
            collaborate with a diverse, multi-cultural set of colleagues – whose
            talent and commitment to integrity make them one of the
            organisation’s most valuable assets.{' '}
          </p>
          <p className={styles.content_SubTitle}>
            Check out all announcements below or follow our social media
            channels not to miss new opportunities.
          </p>
        </div>
      </div>
      <div className={styles.careersHeading_img}>
        <Image
          src="/CareersHeading.png"
          alt="CareersHeading"
          width={680}
          height={649}
        />
      </div>
    </div>
  )
}
