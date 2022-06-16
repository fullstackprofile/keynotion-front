import React from 'react'


import Image from "next/image"

import { ButtonComp } from '../../Button/Button'

import styles from "./Heading.module.css"


export const Heading = () => {
  return (
    <div className={styles.heading}>
        <div className={styles.heading_content}>
            <p className={styles.content_title}>Keynotion</p>
            <p className={styles.content_subTitle}>Our industry-driven summits promises to connect you with your peers through high quality networking  activities...</p>
            <div>
                <ButtonComp title="Learn More" />
            </div>
        </div>
        <div className={styles.heading_img}>
            <Image src="/HeadingImg.png" alt="Img" width={992} height={423} />
        </div>
        
        
    </div>
  )
}
