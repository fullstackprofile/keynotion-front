import React from 'react'
import { Button } from '@mui/material'

import styles from './SmallButton.module.css'

export const SmallButton = ({ title, transparent, onClick }) => {
  return (
    <>
      <Button
        onClick={onClick}
        className={transparent ? styles.btn_see_more_2 : styles.btn_see_more}
        variant="contained"
      >
        <p className={transparent && styles.btn_title}>{title}</p>
      </Button>
    </>
  )
}
