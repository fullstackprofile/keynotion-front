import React, { useState } from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'

import styles from './Accardion.module.css'
import Image from 'next/image'

export const Accardion = ({ title, subTitle, round, formBack }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className={styles.accordion}>
        <Accordion>
          <AccordionSummary onClick={() => setShow(!show)}>
            <div className={styles.accordion_head}>
              <div
                className={
                  subTitle
                    ? show
                      ? styles.accordion_head_icon_rotate
                      : styles.accordion_head_icon
                    : formBack && show
                    ? styles.accordion_head_icon_rotate
                    : styles.accordion_head_icon
                }
              >
                <Image
                  src={'/arrowAccardionRight.svg'}
                  alt="arrowAccardion"
                  width={20}
                  height={14}
                />
              </div>
              <p className={styles.accordion_title}>{title}</p>
            </div>
          </AccordionSummary>
          <div className={styles.accordion_content}>
            {!formBack ? (
              <ul>
                {subTitle &&
                  subTitle.map(({ text }, index) => (
                    <li key={index}>
                      {' '}
                      {round && <Image src="/round.svg" width={8} height={8} />}
                      <p
                        className={
                          round
                            ? styles.accordion_content_text
                            : styles.accordion_content_text__
                        }
                      >
                        {text}
                      </p>
                    </li>
                  ))}
              </ul>
            ) : (
              <>{formBack}</>
            )}
          </div>
        </Accordion>
      </div>
    </>
  )
}
