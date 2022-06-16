import React from 'react'
import { ButtonComp } from '../Button/Button'




import Image from 'next/image'
import { Input } from '../Input/Input'

import styles from "./Subscribe.module.css"

export const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
        <div className={styles.subscribe_right}>

            <div className={styles.icon}>
                <Image src="/notification.svg" alt='icon' width={48} height={48} />
            </div>

            <div className={styles.right_content}>
                <div className={styles.right_title}>
                    <p className={styles.title}>
                    <span className={styles.gradient}>Subscribe</span> to our newsletter and stay in touch with all updates of events
                    </p>
                </div>
                <div className={styles.right_subTitle}>
                    <p className={styles.subTitle}>
                        Get upcoming event updates right in your inbox.
                    </p>
                </div>
                {/* <div className={styles.input_block}>
                    <input type="email" placeholder='Email' className={styles.input}></input>
                </div> */}
                <Input type="email" placeholder="Email" single/>
                <div className={styles.btn}>
                    <ButtonComp title="Subscribe"/>
                </div>
            </div>

        </div>
        <div className={styles.subscribe_left}>
            <Image src="/SubscribeImg.png" alt="SubscribeImg" width={500} height={499} />
        </div>
    </div>
  )
}
