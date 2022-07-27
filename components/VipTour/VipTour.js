import React from 'react'
import Image from 'next/image'
import styles from './VipTour.module.css'
import { Title } from '../TItle/Title'

export const VipTour = ({ vip_tour, cover }) => {
  return (
    <div className={styles.vipTour}>
      <Title title="Vip" title_2="Tour" />
      <p className={styles.subTitle}>Tour Registration Details</p>
      <div className={styles.img}>
        <Image src={cover} width={1920} height={520} />
      </div>
      <div className={styles.tour_descriptions}>
        {vip_tour.map(({ date, description }, index) => (
          <div key={index} className={styles.tour_description}>
            <p className={styles.description}>
              {date}
              {`-${description}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
