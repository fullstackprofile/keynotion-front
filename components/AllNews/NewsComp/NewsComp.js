import Link from 'next/link'
import React from 'react'

import styles from "./NewsComp.module.css"

export const NewsComp = ({title,date,id,cover,title_,index,length}) => {

    let arr1=[]

    let count =1
    let number=4
    for(let i =0 ; i<=length;i++){
      if(i % 2 == 0 ){
        if(i==number*count){
          count=count+2
          arr1.push(i+3)
          continue
        }
        arr1.push(i);
      }
      
    }


  return (
            <div className={styles.news}>
                    <Link href={`/Blog/${title_}/${id}`}>
                        <div className={ styles.news_img_block}>
                            <div className={length >= 8 || length ===4 ? arr1.includes(index)  ? styles.news_img_litle : styles.news_img :styles.news_img} 
                                style={{backgroundImage : `url(${cover})`}}>
                    
                             </div>
                        </div>
                    </Link>
               
                <div className={styles.name_date}>
                <p className={styles.name}>{title}</p>
                <div className={styles.date_block}>
                    <p className={styles.date}>
                        {date}
                    </p>
                </div>
                </div>
    </div>
  )
}
