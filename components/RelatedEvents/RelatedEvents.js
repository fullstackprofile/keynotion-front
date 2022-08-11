import Image from 'next/image'
import React from 'react'
import { ButtonComp } from '../Button/Button'
import { Title } from '../TItle/Title'

import styles from './RelatedEvents.module.css'

export const RelatedEvents = ({ data }) => {
  return (
    <div className={styles.relatedEvents}>
      <Title title_2="Related Events" />
      <div className={styles.body}>
        {data.map((item) => (
          <div key={item.id} className={styles.content}>
            <div className={styles.img}>
              <Image src={item.event_cover} width={496} height={278} />
            </div>
            <div className={styles.content_body}>
              <p>Ticket: {item.event_title}</p>
              <div className={styles.price_block}>
                <p className={styles.price}>
                  {item.min_price}$ - {item.max_price}$ excl. VAT
                </p>
              </div>
              <div className={styles.btn}>
                <ButtonComp title="Select Options" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
