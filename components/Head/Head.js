import React from 'react'
import { Header } from './Header/Header.js'
import { Heading } from './Heading/Heading'

import styles from "./Head.module.css"





export const Head = () => {
  return (
    <div className={styles.Head}>
        <Header />
        <Heading />
    </div>
  )
}
