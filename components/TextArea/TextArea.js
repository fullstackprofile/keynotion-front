import React from 'react'

import TextareaAutosize from '@mui/material/TextareaAutosize'

import styles from './TextArea.module.css'

export const TextArea = ({ placeholder, ...rest }) => {
  return (
    <div className={styles.textArea_block}>
      <TextareaAutosize
        placeholder={placeholder}
        className={styles.textArea}
        {...rest}
      />
    </div>
  )
}
