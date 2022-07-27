import Image from 'next/image'
import React from 'react'


import styles from "./TicketsOnline.module.css"

const icons =[
    {src : "/Facebook.svg", href : "https://www.facebook.com/KEYNOTION/",width : 56, height : 56},
    {src : "/Twitter.svg", href : "https://twitter.com/keynotion/",width : 56, height : 56},
    {src : "/Linkdin.svg", href : "https://www.linkedin.com/company/keynotion/",width : 56, height : 56},
  ]

export const TicketsOnline = () => {
  return (
    <div className={styles.ticketsOnline}>
        <div className={styles.body}>
            <div className={styles.left}>
                <p className={styles.left_title}>
                Ticket: Operational Excellence & Process Transformation Summit Online
                </p>
                <div className={styles.links}>
                {icons.map(({src,href,width,height})=> 
                    <div className={styles.icon}>
                        <a href={href} target="_blank">
                            <Image src={src} alt="logo" width={width} height={height}  />
                        </a>
                    </div>
                )}
                </div>
            </div>
            <div className={styles.right}>
                <p className={styles.right_title}>SKU <span className={styles.liner}>N/A</span></p>
                <p className={styles.right_subTitle}>Category: <span className={styles.liner}>Ticket</span></p>
            </div>
        </div>
    </div>
  )
}
