import React from 'react'
import styles from './News.module.css'
import { convertDateText } from '../../Helpers/help'

export const News = ({ data }) => {
  return (
    <div className={styles.news}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${data.cover})` }}
      >
        <div>
          <p className={styles.img_text}>{data.title}</p>
          <p className={styles.imgTextDate}>{convertDateText(data.date)}</p>
        </div>
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
