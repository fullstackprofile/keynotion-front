import React from 'react'

import styles from './Title.module.css'

export const Title = ({
  title,
  title_2,
  nogradiental,
  conected,
  full,
  norow,
}) => {
  return (
    <div className={styles.main_title}>
      <div className={conected ? styles.titlescon : styles.titles}>
        <p className={nogradiental ? styles.title_ : styles.title}>{title}</p>
        <p className={styles.title_}>{title_2}</p>
      </div>
      {!norow && <div className={full ? styles.row_full : styles.row}></div>}
    </div>
  )
}
