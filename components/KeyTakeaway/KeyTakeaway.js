import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { ButtonComp } from '../Button/Button'

import styles from "./KeyTakeaway.module.css"

export const KeyTakeaway = ({attenders,key_takeaway}) => {

    const router =useRouter()

    const goSponsorShip = () => router.push('/Sponsorship')
  return (
    <div className={styles.keyTakeaway}>
        <div className={styles.keyTakeaway_body}>
            <div className={styles.top}>
                <div className={styles.who_should}>
                    <p className={styles.who_should_title}><span className={styles.liner}>Who</span> Should Attend</p>
                    <div className={styles.who_should_item_block}>
                    {
                        attenders.map(({title},index)=>
                        <div key={index} className={styles.who_should_item}>
                            <Image src="/Vector.png" width={25} height={10} />
                            <p className={styles.who_should_item_title}>{title}</p>
                        </div>
                        )
                    }
                    </div>
                   
                </div>
                <div className={styles.inner_keyTakeaway}>
                <p className={styles.inner_keyTakeaway_title}>Key <span className={styles.liner}>Takeaway</span></p>
                {
                    key_takeaway.map(({item},index)=>
                    <div key={index} className={styles.inner_keyTakeaway_item}>
                        <div className={styles.aaa}>
                        <Image src="/round.svg" width={12} height={12} /> 
                        </div>
                        <span className={styles.inner_keyTakeaway_item_text}>{item}</span>
                    </div>
                    )
                }
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.sponsorshipOpportunities}>
                     <p className={styles.sponsorshipOpportunities_title}><span className={styles.liner}>Sponsorship</span> Opportunities</p>
                     <div className={styles.sponsorshipOpportunities_subTitle_block}>
                         <p className={styles.sponsorshipOpportunities_subTitle}>As our business partner, you can leverage on our event to showcase your brand and expertise through our speaking panels, booths and exhibition opportunities.</p>
                         <p className={styles.sponsorshipOpportunities_subTitle}>Our attendees attend to seek solutions for their challenges. This is your chance to show them how your solution can add value.</p>
                     </div>
                     <div className={styles.btn}>
                        <ButtonComp title="Find Out More" onClick={goSponsorShip}/>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

