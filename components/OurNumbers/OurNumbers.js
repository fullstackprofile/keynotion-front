import Image from 'next/image'
import React from 'react'


import styles from "./OurNumbers.module.css"
import { PhoneNumber } from './PhoneNumber/PhoneNumber'

const numbers =[{text : "CZ Phone Number:" , number : "+420 228 887 628"},
{text : "UK Phone Number:" , number : "+44 203 773 8656"},
{text : "US Phone Number:" , number : "+1 470 845 1675"}
]

export const OurNumbers = () => {
  return (
    <div className={styles.ourNumbers}>
        <div className={styles.ourNumbers_content}>
            <div className={styles.content_title_block}>
                <p className={styles.content_title}>Our <span className={styles.content_title_liner}>Numbers</span></p>
            </div>
            <div className={styles.content_body}>
                {
                    numbers.map(({text,number},index)=> <PhoneNumber key={index} text={text} number={number}/>)
                }
               
            </div>
        </div>
    </div>
  )
}
