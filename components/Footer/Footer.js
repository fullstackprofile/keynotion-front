import React from 'react'




import styles from "./Footer.module.css"
import { ButtonComp } from '../Button/Button'

export const Footer = () => {
  return (
      <div className={styles.footer_wrapper}>
    <div className={styles.footer}>
        <div className={styles.footer_content}>
            <div className={styles.keyNation}>
                <div className={styles.keyNation_title_block}>
                    <p className={styles.keyNation_title}><span className={styles.gradient}>KEY-NOTION</span>.COM</p>
                </div>
                <div className={styles.keyNation_subTitle_block}>
                    <p className={styles.keyNation_subTitle}>A Professional Conference Organizing Company.</p>
                </div>
                <div>
                    <ButtonComp  title="Contact Us"/>
                </div>
            </div>

            <div className={styles.left_block}>
            <div className={styles.officess}>
                <div className={styles.prague_office}>
                    <p className={styles.prague_title}>Prague Office</p>
                    <div className={styles.prague_titles}>
                    <p className={styles.subTitle}>Zverinova 3428/5, 130 00 Praha 3 Strasnice</p>
                    <p className={styles.subTitle}>Czech Republic</p>
                    <p className={styles.subTitle}>Finance@key-notion.com</p>
                    <p className={styles.prague_phone}>Phone : <span className={styles.strong}>+420 228 887 628</span></p>
                    </div>
                    
                </div>
                <div className={styles.us_office}> 
                     <p className={styles.prague_title}>US Office</p>
                         <div className={styles.prague_titles}>
                             <p className={styles.subTitle}>Finance@key-notion.com</p>
                             <p className={styles.prague_phone}>Phone : <span className={styles.strong}>+1 470 845 1675</span></p>
                        </div>
                </div>
            </div>
            <div className={styles.London_office}>
            <p className={styles.prague_title}>London Office</p>
                    <div className={styles.prague_titles}>
                    <p className={styles.subTitle}>3rd Floor, 120 Baker Street, Westminster, London, W1U 6TU​</p>
                    <p className={styles.subTitle}>UK</p>
                    <p className={styles.subTitle}>Finance@key-notion.com</p>
                    <p className={styles.prague_phone}>Phone : <span className={styles.strong}>+44 203 773 8656</span></p>
                    </div>
            </div>
            </div>
        </div>
    </div>
    <div className={styles.row}>
        <p className={styles.row_title}>
        © 2022 - Copyright | All rights Reserved
        </p>
    </div>
    </div>
  )
}
