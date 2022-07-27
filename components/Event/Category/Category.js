import React from 'react'
import { ButtonComp } from '../../Button/Button'

import styles from './Category.module.css'
export const Category = ({ title, active, onClick }) => {
  return (
    <>
      <div className={styles.btn} onClick={onClick}>
        <ButtonComp
          title={title}
          transparent={active === title ? false : true}
        />
      </div>
    </>
  )
}
