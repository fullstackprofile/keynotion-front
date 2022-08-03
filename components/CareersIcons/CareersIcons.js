import Image from 'next/image'
import React from 'react'
import styles from './CareersIcons.module.css'

export const CareersIcons = () => {
  return (
    <div className={styles.careersIcons}>
      <div className={styles.careersIcons_content}>
        <div>
          <Image src="/GlobalTeam.png" width={200} height={137} />
        </div>
        <p className={styles.content_title}>Global Team</p>
      </div>
      <div className={styles.careersIcons_content}>
        <div>
          <Image src="/Goal.png" width={200} height={193} />
        </div>
        <p className={styles.content_title}>Goal Driven Company</p>
      </div>
      <div className={styles.careersIcons_content}>
        <div>
          <Image src="/Deverse.png" width={200} height={160} />
        </div>
        <p className={styles.content_title}>Diverse Environment</p>
      </div>
      <div className={styles.careersIcons_content}>
        <div>
          <Image src="/Welcoming.png" width={200} height={177} />
        </div>
        <p className={styles.content_title}>Welcoming Atmosphere</p>
      </div>
    </div>
  )
}
