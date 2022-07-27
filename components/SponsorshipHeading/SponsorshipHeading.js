import Image from 'next/image'
import React from 'react'
import { Title } from '../TItle/Title'


import styles from "./SponsorshipHeading.module.css"
import { SponsorshipHeadingItem } from './SponsorshipHeadingItem'




const content=[
    {src: "/speaker.svg",title: "10 - 40 Minute Presentation" ,subTitle: "Showcase your thought leadership, inspire a global audience with your story through shared case study examples",  width: 30, height: 42},
    {src: "/meetings.svg",title: "10 - 40 Minute Presentation" ,subTitle: "Showcase your thought leadership, inspire a global audience with your story through shared case study examples" , width: 44, height: 44},
    {src: "/exhibiton.svg",title: "10 - 40 Minute Presentation" ,subTitle: "Showcase your thought leadership, inspire a global audience with your story through shared case study examples" , width: 48, height: 40},
    {src: "/workshops.svg",title: "10 - 40 Minute Presentation" ,subTitle: "Showcase your thought leadership, inspire a global audience with your story through shared case study examples" , width: 42, height: 42},
]



export const SponsorshipHeading = () => {
  return (
      <div className={styles.SponsorshipHeading_wraper}>
          <div className={styles.sponsorshipHeading}>
        <div className={styles.sponsorshipHeading_content}>
            <Title title="Become a Sponsor" full/>
            <div className={styles.about_sponsoship}>
                <div className={styles.about_sponsoship_title_block}>
                    <p className={styles.about_sponsoship_title}>
                        Gaining Return on Investment
                    </p>
                </div>
                <div className={styles.about_sponsoship_content}>
                  { content.map(({src,title,subTitle,width,height},index)=><SponsorshipHeadingItem key={index} src={src} title={title} subTitle={subTitle} width={width} height={height}/>)}
                </div>
            </div>
        </div>


        <div className={styles.sponsorshipHeading_img}>
            <Image src="/sponsorImg.png" alt="img" width={866} height={557} />
        </div>
    </div>
      </div>
    
  )
}
