import React from 'react'



import styles from "./Title.module.css"

export const Title = ({title,title_2,nogradiental,conected}) => {
  return (
    <div className={styles.main_title}>
        <div className={conected ? styles.titlescon : styles.titles}>
        <p className={ nogradiental ? styles.title_ : styles.title}>
            {title}
        </p>
        <p className={ styles.title_ }>
            {title_2}
        </p>
        </div>
        
        <div className={styles.row}>

        </div>
    </div>
  )
}
