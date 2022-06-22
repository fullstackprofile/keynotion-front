import React, { useState } from 'react'

import Image from 'next/image'


import { Title } from '../TItle/Title'

const content =[
  {title : "Business Development", subTitle:[{text : "A Speaker"},{text : "10 minutes speaking slot"},{text : "Logo on all promotional event materials"},{text : "Handouts and brochures distribution to all attendees"},{text : " Access to delegate list 2 weeks before the event"},
  {text : "Business description and contact details in the final agenda."}, {text : "Space for roll up banner"}]},

  {title : "Exhibition Space 2x2", subTitle:[{text : "A Speaker"},{text : "A Speaker"}]},
  {title : "Cocktail Reception", subTitle:[{text : "A Speaker"},{text : "A Speaker"}]},
  {title : "Networking Dinner", subTitle:[{text : "A Speaker"},{text : "A Speaker"}]},
  {title : "Coffee Break", },
  {title : "Aluminium", subTitle:[{text : "A Speaker"},{text : "A Speaker"}]},
  {title : "Diamond", subTitle:[{text : "A Speaker"},{text : "A Speaker"}]},
  {title : "Emerald", subTitle:[{text : "A Speaker"},{text : "A Speaker"}]},
  {title : "Bronze", subTitle:[{text : "A Speaker"},{text : "A Speaker"}]},
  {title : "Silver", subTitle:[{text : "A Speaker"},{text : "A Speaker"}]},
  {title : "Gold", subTitle:[{text : "A Speaker"},{text : "A Speaker"}]},
  {title : "VIP", subTitle:[{text : "A Speaker"},{text : "A Speaker"}]},
]

import styles from "./SponsorshipPackages.module.css"
import { Accardion } from '../Accardion/Accardion'

export const SponsorshipPackages = () => {
 
 
  return (
    <div className={styles.sponsorshipPackages}>
        <Title title_2="Sponsorship Packages" />
        <div className={styles.sponsorshipPackages_body}>
            <div className={styles.sponsorshipPackages_img}>
                <Image src="/sponsorshipPackages.png" alt='Image' width={562} height={558} />
            </div>
            <div className={styles.sponsorshipPackages_content}>
              {content.map(({title,subTitle}) => {
                
                return (
                  <Accardion title={title} subTitle={subTitle} />
                )
              })}
                 
            </div>
        </div>
    </div>
  )
}
