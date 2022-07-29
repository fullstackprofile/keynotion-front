import Image from 'next/image'
import React, { useState } from 'react'

import styles from './Speaker.module.css'
import useIsMobile from '../../../Helpers/helpers'

export const Speaker = ({
  full_name,
  id,
  avatar,
  profession,
  company,
  company_logo,
  linkedin,
  index,
  length,
}) => {
  let arr1 = []

  let count = 1
  let number = 4
  for (let i = 0; i <= length; i++) {
    if (i % 2 == 0) {
      if (i == number * count) {
        count = count + 2
        arr1.push(i + 3)
        continue
      }
      arr1.push(i)
    }
  }
  const isMobile = useIsMobile()

  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div className={styles.speaker}>
      <div className={styles.speaker_img_block}>
        <div
          className={
            isMobile >= 1200
              ? length >= 8 || length === 4
                ? arr1.includes(index)
                  ? styles.speaker_img_litle
                  : styles.speaker_img
                : styles.speaker_img
              : styles.speaker_img_litle
          }
          style={{ backgroundImage: `url(${avatar})` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.name}>
            <p className={styles.name_}>{full_name}</p>
            {isHovering && (
              <div className={styles.description_block}>
                <div className={styles.description}>
                  <p className={styles.profession}>{profession}</p>
                  <p className={styles.company}>{company}</p>
                  <div className={styles.company_logo}>
                    <Image src={company_logo} layout="fill" />
                  </div>
                </div>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <div className={styles.linkedin}>
                    <div className={styles.linkedin_icon}>
                      <Image
                        src="/LinkedinSmallIcon.png"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className={styles.linkedin_text}>Linkedin.com</p>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
