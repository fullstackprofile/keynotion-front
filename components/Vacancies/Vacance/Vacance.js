import Image from 'next/image'
import React from 'react'
import styles from './Vacance.module.css'

export const Vacance = ({ data }) => {
  return (
    <div className={styles.vacance}>
      <div className={styles.vacance_body}>
        {data[0]?.map(
          (
            { title, job_description, about_role, looking_for, benefits },
            index
          ) => (
            <div className={styles.vacance_body_content} key={index}>
              <p className={styles.vacance_title}>{`${index + 1}. ${title}`}</p>
              <div className={styles.subtitles}>
                <div className={styles.subtitle_block}>
                  <p className={styles.subtitle}>Job Description</p>
                  <div className={styles.subtitle_body}>
                    <p className={styles.subtitle_body_text}>
                      {job_description}
                    </p>
                  </div>
                </div>
                <div className={styles.subtitle_block}>
                  <p className={styles.subtitle}>About the role</p>
                  <div className={styles.subtitle_body}>
                    {about_role?.map(({ item }, index) => (
                      <div
                        key={index}
                        className={styles.block_subtitle_body_text_}
                      >
                        <div className={styles.block_subtitle_body_text}>
                          <Image src="/round.svg" width={8} height={8} />
                          <p className={styles.subtitle_body_text_}>{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.subtitle_block}>
                  <p className={styles.subtitle}>What we are looking for</p>
                  <div className={styles.subtitle_body}>
                    {looking_for?.map(({ item }, index) => (
                      <div
                        className={styles.block_subtitle_body_text_}
                        key={index}
                      >
                        <div className={styles.block_subtitle_body_text}>
                          <Image src="/round.svg" width={8} height={8} />
                          <p className={styles.subtitle_body_text_}>{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.subtitle_block}>
                  <p className={styles.subtitle}>Benefits</p>
                  <div className={styles.subtitle_body}>
                    {benefits?.map(({ item }, index) => (
                      <div
                        key={index}
                        className={styles.block_subtitle_body_text_}
                      >
                        <div className={styles.block_subtitle_body_text}>
                          <Image src="/round.svg" width={8} height={8} />
                          <p className={styles.subtitle_body_text_}>{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
