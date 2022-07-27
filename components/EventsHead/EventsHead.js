import React from 'react'
import { Header } from '../Head/Header/Header'


import styles from "./EventsHead.module.css"

export const EventsHead = ({blog}) => {
  return (
    <div className={styles.eventsHead}>
        <Header blog={blog && true}/>
    </div>
  )
}
