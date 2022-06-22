import React,{useState} from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';

import styles from "./Accardion.module.css"
import Image from 'next/image';

export const Accardion = ({title,subTitle}) => {



  const [show,setShow]= useState(false)

  return (
    <>
        <div onClick={()=> setShow(!show)} className={styles.accordion}>
              <Accordion>
                  <AccordionSummary>
                    <div className={styles.accordion_head}>
                    <div className={styles.accordion_head_icon}>
                      <Image src={subTitle && show ?"/arrowAccardionRight.svg" : "/arrowAccardionDown.svg"} alt='arrowAccardion' width={20} height={14} />
                    </div>
                    <p className={styles.accordion_title}>{title}</p>
                    </div>
                    
                    
                  </AccordionSummary>
                  
                     
                    <div className={styles.accordion_content}>
                  <ul>
                      {
                         subTitle && subTitle.map(({text})=> <li> <Image src="/round.svg" width={8} height={8} /> <p className={styles.accordion_content_text}>{text}</p></li>)
                      }
                 

                  </ul>
                  </div>
                  
                  
                </Accordion>
              </div>
    </>
  )
}
