import React from 'react'
import { Title } from '../TItle/Title'
import { Vacance } from './Vacance/Vacance'
import styles from './Vacancies.module.css'

export const Vacancies = ({ data }) => {
  console.log(data, 'data Vacancies')
  return (
    <div className={styles.vacancies}>
      <Title title="VACAN" title_2="CIES" conected />
      <div className={styles.vacance}>
        <Vacance data={data} />
      </div>
    </div>
  )
}
