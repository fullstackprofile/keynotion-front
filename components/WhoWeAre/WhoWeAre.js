import Image from 'next/image'
import React from 'react'
import { SponsershipBenefitsItem } from '../SponsershipBenefits/SponsershipBenefitsItem/SponsershipBenefitsItem'
import { Title } from '../TItle/Title'
import styles from './WhoWeAre.module.css'
const content = [
  {
    src: '/OurMisson.svg',
    title: 'Our Mission',
    subTitle:
      "Keynotion's purpose is to provide high quality conference andnetworking services that allowall business leaders to experience success in their fields of expertiseand become life-long learners and contributing members of our community",
    width: 80,
    height: 92,
    fullWidht: '47%',
  },
  {
    src: '/OurVision.svg',
    title: 'Our Vision',
    subTitle: `Keynotion embodies diverse cultures thanks to the union of international participants of different backgrounds and fields of expertise.Together we will immerse guests in a unique event experience while creating a bespoke guest journey allowing everyone to have a human connection with your brands through our platform. Innovation, creativity, and passion is our drive to deliver exceptional conferences worldwide.`,
    width: 100,
    height: 60,
    fullWidht: '47%',
  },
]

export const WhoWeAre = () => {
  return (
    <div className={styles.whoWeAre}>
      <Title title="Who" title_2="We Are" />
      <div className={styles.whoWeAre_content}>
        {content.map(
          ({ title, subTitle, src, width, height, fullWidht }, index) => (
            <SponsershipBenefitsItem
              key={index}
              title={title}
              subTitle={subTitle}
              src={src}
              width={width}
              height={height}
              fullWidht={fullWidht}
            />
          )
        )}
      </div>
      <div className={styles.whoWeAre_content_icons}>
        <div className={styles.content_icon}>
          <Image
            src="/Innovation.png"
            width={150}
            height={209}
            alt="innovation"
          />
        </div>
        <div className={styles.content_icon}>
          <Image
            src="/Commitment.png"
            width={150}
            height={209}
            alt="Commitment"
          />
        </div>
        <div className={styles.content_icon}>
          <Image src="/Culture.png" width={150} height={209} alt="Culture" />
        </div>
      </div>
    </div>
  )
}
