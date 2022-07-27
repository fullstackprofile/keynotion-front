import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { ButtonComp } from '../Button/Button'

import styles from './EmptyCard.module.css'

export const EmptyCard = () => {
  const router = useRouter()
  const goEvents = () => router.push('/Events')
  return (
    <div className={styles.emptyCard}>
      <div className={styles.emptyCard_body}>
        <div className={styles.left}>
          <div className={styles.left_block}>
            <p className={styles.left_title}>YOUR CART IS CURRENTLY EMPTY.</p>
          </div>
          <div className={styles.left_btn}>
            <ButtonComp title="Return To Shop" onClick={goEvents} />
          </div>
        </div>
        <div className={styles.right}>
          <Image src="/EmptyCard.png" width={912} height={664} />
        </div>
      </div>
    </div>
  )
}
