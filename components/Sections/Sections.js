import React from 'react'
import Image from 'next/image'
import styles from './Sections.module.css'
import useIsMobile from '../../Helpers/helpers'

const SectionsItems = [
  { img: '/setting.svg', title: 'Manufacturing & Engineering' },
  { img: '/willHang.svg', title: 'Biotech & Pharma' },
  { img: '/gift.svg', title: 'Retial & Consumer Goods' },
  { img: '/tool.svg', title: 'Cross Industry' },
]

export const Sections = () => {
  const isMobile = useIsMobile()
  return (
    <div className={styles.unknow}>
      <div className={styles.unknow_content}>
        <ul className={styles.content_items}>
          {SectionsItems.map(({ img, title }) => (
            <li className={styles.content_item} key={title}>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <Image
                    src={img}
                    alt="img"
                    width={isMobile >= 768 ? 38 : 20}
                    height={isMobile >= 768 ? 38 : 20}
                  />
                </div>
                <p className={styles.item_title}>{title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
