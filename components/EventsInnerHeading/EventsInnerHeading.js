import Image from 'next/image'
import React, { useState } from 'react'
import { ButtonComp } from '../Button/Button'
import { SponsorshipModal } from '../SponsorshipModal/SponsorshipModal'
import styles from './EventsInnerHeading.module.css'
import { useRouter } from 'next/router'
import { BrochureSchema } from '../../Helpers/allSchema'
import { ApplySchema } from '../../Helpers/allSchema'
import { eventsOptions } from '../../Helpers/help'

export const EventsInnerHeading = ({
  title,
  small_description,
  cover,
  country,
  city,
  id,
  the_venue_logo,
  Past,
  date,
}) => {
  const [openLogin, setOpenLogin] = useState(false)
  const [openBrouchure, setOpenBrouchure] = useState(false)
  const handleClickOpen = () => {
    setOpenLogin(true)
  }

  const handleClickOpenBrochure = () => {
    setOpenBrouchure(true)
  }

  const handleClose = () => {
    setOpenLogin(false)
  }

  const handleCloseBrochure = () => {
    setOpenBrouchure(false)
  }

  const router = useRouter()

  const goTickets = () => router.push(`/Ticket/${id}`)
  const goSponsorShip = () => router.push(`/Sponsorship`)

  return (
    <div className={styles.eventsInnerHeading}>
      <div className={styles.eventsInnerHeading_body}>
        <div className={styles.left}>
          <div className={styles.titles}>
            <p className={styles.title}>{title}</p>
            <p className={styles.subTitle}>{small_description}</p>
          </div>
          <div className={styles.date_block}>
            <p className={styles.date}>{date}</p>
            <p className={styles.country}>
              {country},{city}
            </p>
          </div>
          <div className={styles.logo}>
            <Image src={the_venue_logo} width={82} height={64} />
          </div>
        </div>
        <div className={styles.right}>
          <Image src={cover} width={784} height={645} />
        </div>
      </div>
      {!Past && (
        <div className={styles.btns}>
          <ButtonComp
            title="Brochure"
            transparent
            onClick={handleClickOpenBrochure}
          />
          <ButtonComp title="Get Tickets" transparent onClick={goTickets} />
          <ButtonComp title="Sponsorship" transparent onClick={goSponsorShip} />
          <ButtonComp
            title="Apply to Speak"
            transparent
            onClick={handleClickOpen}
          />
        </div>
      )}

      <SponsorshipModal
        open={openLogin}
        handleClose={handleClose}
        title="Apply"
        subtitle="To Speak"
        SponsorshipSchema={ApplySchema}
        options={eventsOptions}
        Learn_about_us="Learn_about_us"
        Learn_about_us_placeholder="How Did You Learn About Us?"
        your_way_get_us
        Presentation
      />
      <SponsorshipModal
        open={openBrouchure}
        handleClose={handleCloseBrochure}
        title="Brochure"
        subtitle="Request"
        SponsorshipSchema={BrochureSchema}
        options={eventsOptions}
        Learn_about_us="Learn_about_us"
        Learn_about_us_placeholder="How Did You Learn About Us?"
        your_way_get_us
        comments
      />
    </div>
  )
}
