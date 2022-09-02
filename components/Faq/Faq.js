import Image from 'next/image'
import React from 'react'
import { Accardion } from '../Accardion/Accardion'
import { Title } from '../TItle/Title'
import { contentFaq } from '../../Helpers/help'
import styles from './Faq.module.css'

export const Faq = () => {
  return (
    <div className={styles.faq}>
      <div>
        <Title title_2="FAQ" />
        <p className={styles.faq_title}>Frequently Asked Questions</p>
      </div>
      <div className={styles.faq_body}>
        <div className={styles.body_img}>
          <Image src="/FaqImg.png" alt="FaqImg.png" width={544} height={480} />
        </div>
        <div className={styles.body_content}>
          {contentFaq.map(({ title, subTitle }, index) => {
            return <Accardion key={index} title={title} subTitle={subTitle} />
          })}
        </div>
      </div>
    </div>
  )
}
