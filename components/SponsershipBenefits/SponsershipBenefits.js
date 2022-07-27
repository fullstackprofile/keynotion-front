import Image from 'next/image'
import React from 'react'
import { Title } from '../TItle/Title'

import styles from './SponsershipBenefits.module.css'
import { SponsershipBenefitsItem } from './SponsershipBenefitsItem/SponsershipBenefitsItem'

const SponsershipBenefitsItems = [
  {
    title: 'Brand Awarness',
    subTitle:
      'Timing will be everything if you are to stay on the right side of industry’s top players’ to have an impact on the future of business. Build trust and develop your brand’s voice to educate the community about business transformation',
    src: '/Brand.svg',
  },
  {
    title: 'Thougth Leadship',
    subTitle:
      'In the era of change and uncertainty, who will be the new disruptors and who will hold their fair share? The future innovation systems and models will mark a radical overhaul of the current set up and business ecosystem; where will you place yourself?',
    src: '/Thougth.svg',
  },
  {
    title: 'Networking',
    subTitle:
      'How do you deliver efficient and cost-effective business digitization to the market? Move beyond rhetoric, turn nominal targets into tangible solutions and secure your share of the future industry ecosystem',
    src: '/Networking.svg',
  },
  {
    title: 'Lead Generation',
    subTitle:
      'We are at a pivotal business transition tipping point. Build partnerships, collaborate and generate leads from the brands of today to ensure that you will be part of the future of business, enabled by innovation',
    src: '/Lead.svg',
  },
]

export const SponsershipBenefits = () => {
  return (
    <div className={styles.sponsershipBenefits}>
      <Title title_2="Sponsorship Benefits" />
      <div className={styles.sponsershipBenefits_content}>
        {SponsershipBenefitsItems.map(({ title, subTitle, src }, index) => (
          <SponsershipBenefitsItem
            key={index}
            title={title}
            subTitle={subTitle}
            src={src}
          />
        ))}
      </div>
    </div>
  )
}
