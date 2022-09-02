import React, { useState } from 'react'
import Image from 'next/image'
import { Title } from '../TItle/Title'
import { ButtonComp } from '../Button/Button'
import { SponsorshipModal } from '../SponsorshipModal/SponsorshipModal'
import { SponsorshipSchema } from '../../Helpers/allSchema'
import { contentSponsorshipPackages } from '../../Helpers/help'
import { optionsAccordion } from '../../Helpers/help'
import styles from './SponsorshipPackages.module.css'
import { Accardion } from '../Accardion/Accardion'

export const SponsorshipPackages = () => {
  const [openLogin, setOpenLogin] = useState(false)

  const handleClickOpen = () => {
    setOpenLogin(true)
  }

  const handleClose = () => {
    setOpenLogin(false)
  }

  return (
    <div className={styles.sponsorshipPackages}>
      <Title title_2="Sponsorship Packages" />
      <div className={styles.sponsorshipPackages_body}>
        <div className={styles.sponsorshipPackages_img}>
          <Image
            src="/sponsorshipPackages.png"
            alt="Image"
            width={562}
            height={558}
          />
          <div className={styles.btn}>
            <ButtonComp
              title="Request Sponsorship package"
              onClick={handleClickOpen}
            />
          </div>
        </div>
        <div className={styles.sponsorshipPackages_content}>
          {contentSponsorshipPackages.map(({ title, subTitle }, index) => {
            return (
              <Accardion key={index} title={title} subTitle={subTitle} round />
            )
          })}
        </div>
      </div>
      <SponsorshipModal
        open={openLogin}
        handleClose={handleClose}
        title="Sponsorship"
        subtitle="Request"
        options={optionsAccordion}
        SponsorshipSchema={SponsorshipSchema}
        comment={true}
        check={true}
      />
    </div>
  )
}
