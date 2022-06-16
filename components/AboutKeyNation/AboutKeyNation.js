
import Image from 'next/image'
import React from 'react'


import styles from "./AboutKeyNation.module.css"
import { ButtonComp } from '../Button/Button'
import { Title } from '../TItle/Title'



export const AboutKeyNation = () => {
  return (
    <div className={styles.aboutKeyNation}>
        <Title title="About" title_2="Keynotion" nogradiental/>
        <div className={styles.aboutKeyNationImg}>
        <Image src="/AboutImg.png" alt='photo' width={1240} height={610} />
        </div>
        <div className={styles.about_content}>
            <p className={styles.about_title}>A Professional Conference Organizing Company</p>
            <p className={styles.about_subTitle}><span className={styles.about_subTitle_gradient}>Keynotion</span> is an established professional corporate conference organizer based in the metropolitan Prague and London.
            </p>
            <p className={styles.about_subTitle}>We work closely with our stakeholders in organizing international senior business executive conferences, bringing together experts, academia, and practitioners from a wide range of disciplines to discuss options and strategies in their individual fields.
            </p>
            <p className={styles.about_subTitle}>Kindly check our upcoming conferences page.
            </p>
            <p className={styles.about_subTitle}>Our conferences aim to provide our participants a highly value adding experience and help them perform in their daily responsibilities while overcoming any possible challenges.
            </p>
        </div>
        <div>
            <ButtonComp title="Reed more" />
        </div>
    </div>
  )
}
