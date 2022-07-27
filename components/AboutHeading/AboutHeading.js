import Image from 'next/image'
import React from 'react'



import styles from "./AboutHeading.module.css"









export const AboutHeading = () => {
  return (
    <div className={styles.aboutHeading}>
      <div className={styles.aboutHeading_content}>
         <div className={styles.content_title_block}>
             <p className={styles.content_title}>About Us</p>
         </div>
         <div className={styles.content_SubTitles_block}>
            <p className={styles.content_SubTitle}><span className={styles.liner}>Keynotion</span> is an established professional conference and event organizer based in Europe.</p>
            <p className={styles.content_SubTitle}>We work closely with our delegates in organizing international conferences, bringing together experts, academia, and practitioners from a wide range of disciplines to discuss options and strategies in their individual fields. Just check our <span className={styles.liner}>upcoming events</span> page.</p>
            <p className={styles.content_SubTitle}>Our international conferences aim to provide our participants with a positive experience and help them perform in their daily responsibilities while overcoming any possible challenges.</p>
         </div>
      </div>
      <div className={styles.aboutHeading_img}>
         <Image src="/AboutPageImg.png" alt='AboutPageImg' width={760} height={556} />
      </div>
    </div>
  )
}