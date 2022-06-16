import React from 'react'




import { ButtonComp } from '../../Button/Button'

import styles from "./GetInformedCart.module.css"

export const GetInformedCart = ({title,dateTitle}) => {
  return (
    <div className={styles.getInformedCart}>
        <div className={styles.GetInformedCart_img}>
            {/* image */}
        </div>
        <div className={styles.GetInformedCart_title_block}>
            <p className={styles.GetInformedCart_title}>{title}</p>
        </div>
        <div className={styles.btn_date}>
        <div className={styles.btn}>
            <ButtonComp title="Learn More" />
        </div>
        <div className={styles.date}>
            <p className={styles.date_title}>{dateTitle}</p>
        </div>
        </div>
        
        
    </div>
  )
}