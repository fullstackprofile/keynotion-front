import Image from 'next/image'
import React from 'react'




import styles from "./EventsHeading.module.css"

export const EventsHeading = () => {
  return (
    <div className={styles.eventsHeading}>
        <div className={styles.eventsHeading_content}>
        <Image src="/eventsBackground.png" width={1920} height={690} />
        <div className={styles.eventsHeading_title_block}>
          <p className={styles.eventsHeading_title}>
          Our Upcoming Events
          </p>
          <p className={styles.eventsHeading_subTitle}>Check Them Out!</p>
        </div>
        </div>
    </div>
  )
}
