import Image from 'next/image'
import React from 'react'


import styles from "./Cpd.module.css"

export const Cpd = () => {
  return (
    <div className={styles.cpd}>
        <div className={styles.cpd_body}>
            <div className={styles.body_img}>
                <Image src="/cpdLogo.png" width={194} height={197} />
            </div>
            <div className={styles.body_content}>
                <div className={styles.title_block}>
                    <p className={styles.title}>CPD</p>
                    
                    <p className={styles.title_}>ACCREDITATION</p>
                </div>
                <div className={styles.subTitle_block}>
                    <p className={styles.subTitle}>Keynotion certifies that this conference has been approved for CPD credits by The CPD Standards Office. Our credits are internationally recognized. We have an internal dedicated team that works closely with our CPD provider to support your accreditation request to be accepted worldwide.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
