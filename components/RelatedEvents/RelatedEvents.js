import Image from 'next/image'
import React from 'react'
import { ButtonComp } from '../Button/Button'
import { Title } from '../TItle/Title'


import styles from "./RelatedEvents.module.css"

export const RelatedEvents = () => {
  return (
    <div className={styles.relatedEvents}>
        <Title title_2="Related Events" />
        <div className={styles.body}>
            <div className={styles.content}>
                <div className={styles.img} >
                    <Image src="/EmptyCard.png" width={496} height={278}/>
                </div>
                <div className={styles.content_body}>
                    <p>Ticket: Lorem Ipsum</p>
                    <div className={styles.price_block}>
                    <p className={styles.price}>$450.00 - $9,500.00 excl. VAT</p>
                    </div>
                    <div className={styles.btn}>
                        <ButtonComp title="Select Options"/>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.img} >
                    <Image src="/EmptyCard.png" width={496} height={278}/>
                </div>
                <div className={styles.content_body}>
                    <p>Ticket: Lorem Ipsum</p>
                    <div className={styles.price_block}>
                    <p className={styles.price}>$450.00 - $9,500.00 excl. VAT</p>
                    </div>
                    <div className={styles.btn}>
                        <ButtonComp title="Select Options"/>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.img} >
                    <Image src="/EmptyCard.png" width={496} height={278}/>
                </div>
                <div className={styles.content_body}>
                    <p>Ticket: Lorem Ipsum</p>
                    <div className={styles.price_block}>
                    <p className={styles.price}>$450.00 - $9,500.00 excl. VAT</p>
                    </div>
                    <div className={styles.btn}>
                        <ButtonComp title="Select Options"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
