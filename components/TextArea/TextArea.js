import React from 'react'

import TextareaAutosize from '@mui/material/TextareaAutosize'

import styles from './TextArea.module.css'

export const TextArea = ({ placeholder, litle, ...rest }) => {
  return (
    <div className={styles.textArea_block}>
      <TextareaAutosize
        placeholder={placeholder}
        className={litle ? styles.textAreaSmall : styles.textArea}
        {...rest}
      />
    </div>
  )
}
