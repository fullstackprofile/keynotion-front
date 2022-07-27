import Image from 'next/image'
import React from 'react'
import { Title } from '../Title/Title'

import styles from "./AboutTheEvent.module.css"

export const AboutTheEvent = ({about,cover}) => {
  return (
    <div className={styles.aboutTheEvent}>
        <Title title_2="About The Event" />
        <div className={styles.body}>
            <div className={styles.content}>
                <p className={styles.text}>{about}</p>
            </div>
            <div className={styles.img}>
                <Image src={cover} width={784} height={614} />
            </div>
        </div>
    </div>
  )
}
