import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { ButtonComp } from '../../Button/Button'

import styles from './EventsHeading.module.css'

export const EventsHeading = ({ title, subTitle, img, ticket, id }) => {
  const router = useRouter()

  const goEvents = () => router.push(`/Events/${id}`)
  return (
    <div className={styles.eventsHeading}>
      <div className={styles.eventsHeading_content}>
        <Image src={img} width={1920} height={690} />
        <div
          className={
            !ticket
              ? styles.eventsHeading_title_block
              : styles.eventsHeading_title_block_ticket
          }
        >
          <p className={styles.eventsHeading_title}>{title}</p>
          <p className={styles.eventsHeading_subTitle}>{subTitle}</p>
          {ticket && (
            <div className={styles.btn}>
              <ButtonComp transparent title="Event Page" onClick={goEvents} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
