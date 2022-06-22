import React from 'react'
import { Header } from './Header/Header.js'
import { Heading } from './Heading/Heading'

import styles from "./Head.module.css"
import { EventsHeading } from '../EventsHead/EventsHeading/EventsHeading.js'





export const Heade = () => {
  return (
    <div className={styles.Head}>
        <Header />
        <Heading />
        
    </div>
  )
}
