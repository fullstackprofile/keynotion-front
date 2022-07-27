import Image from 'next/image'
import React from 'react'

import styles from './News.module.css'

const arr = [
  {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    item: [
      {
        action:
          'What is your view on the trends defining the direction of the consumer goods industry?',
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        action:
          'The focus of the event are namely strategy, e-Commerce and Customer Experience. Do share your outlook in all the above.',
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        action:
          'We have noticed a stark change of retail behaviour in providing more services since COVID in their physical store. E.g., Cookbooks if they are in the F&B, tailoring services if they are fashion and apparel. Do you think these added services will last in the long term?',
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
]

export const News = ({ data }) => {
  return (
    <div className={styles.news}>
      <div className={styles.img}>
        <Image src="/BlogNewsBack.png" alt="photo" width={1200} height={520} />
        <p className={styles.img_text}>{data.title}</p>
      </div>
      <div className={styles.news_body}>
        <div>
          <div className={styles.description}>
            <p className={styles.description_text}>{data.description}</p>
          </div>
          {data.item.map(({ action, answer }, index) => (
            <div key={index} className={styles.answers_block}>
              <p className={styles.action}>{action}</p>
              <div className={styles.answer_block}>
                <p className={styles.answer}>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
