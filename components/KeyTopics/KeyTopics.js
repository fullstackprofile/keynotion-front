import Image from 'next/image'
import React from 'react'
import { Accardion } from '../Accardion/Accardion'
import { Title } from '../Title/Title'


import styles from "./KeyTopics.module.css"

export const KeyTopics = ({key_topics,cover}) => {
  return (
    <div className={styles.keyTopics}>
        <Title title_2="Key Topics" />
        <div className={styles.body}>
            <div className={styles.img}>
                <Image src={cover} width={656} height={614} />
            </div>
            <div className={styles.content}>
                {
                    key_topics.map(({title,description},index)=>
                    
                        <Accardion key={index} title={title} formBack={description}/>

                    )
                }
            </div>
        </div>
    </div>
  )
}
