import Image from 'next/image'

import React from 'react'






import { ButtonComp } from '../Button/Button'

import styles from "./SeamlessService.module.css"

export const SeamlessService = () => {
  
  return (
    <div className={styles.seamlessService}>
        <div className={styles.seamlessService_content}>
            <div className={styles.content_right}>
                <div className={styles.right_title_block}>
                    <p className={styles.right_title}>
                        SEAMLESS SERVICE
                    </p>
                </div>
                <div className={styles.right_img}>
                    <Image src="/SeamlessService.png" alt="service_img" width={736} height={549} />
                </div>
                <div className={styles.right_block}>
                    <p className={styles.right_block_title}>Event Participation | Agenda | Networking</p>
                </div>
            </div>
            <div className={styles.content_left}>
                <div className={styles.content_left_title}>
                    <p className={styles.left_title}>MANAGE YOUR EVENTS WITH OUR USER FRIENDLY MOBILE APP</p>
                </div>
                <div className={styles.content_left_subTitle}>
                    <p className={styles.left_subTitle}>CONNECT WITH OUR CUTTING-EDGE DIGITAL CONFERENCE PLATFORM</p>
                </div>
                <div className={styles.left_btns}>
                    <div className={styles.play}>
                        <a href="https://play.google.com/store/apps/details?id=com.keynotion.app&hl=en-GB" target="_blank">
                        <ButtonComp  title="Play Google" />
                        </a>
                    </div>
                    <div>
                    <a href="https://apps.apple.com/cz/app/keynotion-summit/id1623607620" target="_blank">
                        <ButtonComp  title="App Store" transparent />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
