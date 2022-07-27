import Image from 'next/image'
import React from 'react'
import { Title } from '../TItle/Title'

import styles from './OurPastAttendees.module.css'

export const OurPastAttendees = ({ attendees, title, title_2 }) => {
  return (
    <div className={styles.ourPastAttendees}>
      <div className={styles.ourPastAttendees_body}>
        <Title
          title={title ? title : 'Our Past '}
          title_2={title_2 ? title_2 : 'Attendees'}
        />
        <div className={styles.OurPastAttendees_content}>
          {attendees.map(({ logo, width, height }, index) => (
            <div key={index} className={styles.OurPastAttendees_content_item}>
              <Image
                src={logo}
                width={width ? width : 210}
                height={height ? height : 100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
