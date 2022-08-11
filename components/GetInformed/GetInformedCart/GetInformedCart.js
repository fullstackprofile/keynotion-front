import { useRouter } from 'next/router'
import React from 'react'
import { ButtonComp } from '../../Button/Button'
import { convertMountName } from '../../../Helpers/help'
import styles from './GetInformedCart.module.css'

export const GetInformedCart = ({ title, dateTitle, id, category, cover }) => {
  const router = useRouter()

  const goBlog = () => router.push(`/Blog/LatestNews/${id}`)
  return (
    <div className={styles.getInformedCart}>
      <div
        className={styles.GetInformedCart_img}
        style={{ backgroundImage: `url(${cover})` }}
      ></div>
      <div className={styles.GetInformedCart_title_block}>
        <p className={styles.GetInformedCart_title}>{title}</p>
      </div>
      <div className={styles.btn_date}>
        <div className={styles.btn}>
          <ButtonComp title="Learn More" onClick={goBlog} />
        </div>
        <div className={styles.date}>
          <p className={styles.date_title}>{convertMountName(dateTitle)}</p>
        </div>
      </div>
    </div>
  )
}
