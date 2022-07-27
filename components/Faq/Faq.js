import Image from 'next/image'
import React from 'react'
import { Accardion } from '../Accardion/Accardion'
import { Title } from '../TItle/Title'

import styles from './Faq.module.css'

const content = [
  {
    title: 'Business Development',
    subTitle: [
      {
        text: 'A. The best way how to register is to use the events registration form that you should be able to find on each event page. In case you need our assistance, you can contact us directly. The contact details and contact form can be found here.',
      },
      { text: 'You can also communicate with us using WhatsApp or Viber!' },
    ],
  },
  {
    title:
      'Q. Can we register for the conference if we do not know the name of the attending delegate(s)?',
    subTitle: [
      {
        text: 'A. Yes! The registration form can be sent to us (office@key-notion.com) without the name(s) of the attending delegate(s).  In the names section of the registration form please use “TBA” (to be announced). The name(s) can be provided up to 7 days prior to the event.',
      },
    ],
  },
  {
    title: 'Q. What is the method of payment?',
    subTitle: [
      {
        text: 'A. We accept all major credit cards – VISA, Mastercard, Diners, AMEX etc. We also accept payment via bank transfer. If you would like to pay using bank transfer please indicate that you need a “proforma invoice” on the registration form. However, our preferred method of payment is payment with credit/debit card.',
      },
    ],
  },
]

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
          {content.map(({ title, subTitle }, index) => {
            return <Accardion key={index} title={title} subTitle={subTitle} />
          })}
        </div>
      </div>
    </div>
  )
}
