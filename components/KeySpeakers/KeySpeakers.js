import React, { useState } from 'react'

import { Title } from '../TItle/Title'
import { ButtonComp } from '../Button/Button'

import { Masonry } from '@mui/lab'

import styles from './KeySpeakers.module.css'
import Image from 'next/image'
import { Cpd } from '../Cpd/Cpd'
import { Speaker } from './Speaker/Speaker'

export const KeySpeakers = ({ speakers }) => {
  const [show, setShow] = useState(false)

  const length = speakers.length

  return (
    <div className={styles.keySpeakers}>
      <Title title_2="Key Speakers" />
      <div className={styles.speakers}>
        <Masonry columns={4} spacing={2}>
          {speakers
            .slice(0, show == false ? 8 : speakers.length)
            .map(
              (
                {
                  full_name,
                  id,
                  avatar,
                  profession,
                  company,
                  company_logo,
                  linkedin,
                },
                index
              ) => (
                <Speaker
                  key={index}
                  full_name={full_name}
                  index={index}
                  avatar={avatar}
                  profession={profession}
                  company={company}
                  company_logo={company_logo}
                  linkedin={linkedin}
                  length={length}
                />
              )
            )}
        </Masonry>
      </div>
      {speakers.length > 8 && (
        <div className={styles.btn}>
          <ButtonComp
            title="View All Speakers "
            transparent
            onClick={() => setShow(!show)}
          />
        </div>
      )}

      <Cpd />
    </div>
  )
}
