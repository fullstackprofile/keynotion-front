import React, { useState } from 'react'

import Image from 'next/image'

import { Title } from '../TItle/Title'
import { ButtonComp } from '../Button/Button'

import { SponsorshipModal } from '../SponsorshipModal/SponsorshipModal'
import * as yup from 'yup'

const content = [
  {
    title: 'Business Development',
    subTitle: [
      { text: 'A Speaker' },
      { text: '10 minutes speaking slot' },
      { text: 'Logo on all promotional event materials' },
      { text: 'Handouts and brochures distribution to all attendees' },
      { text: ' Access to delegate list 2 weeks before the event' },
      { text: 'Business description and contact details in the final agenda.' },
      { text: 'Space for roll up banner' },
    ],
  },

  {
    title: 'Exhibition Space 2x2',
    subTitle: [{ text: 'A Speaker' }, { text: 'A Speaker' }],
  },

  {
    title: 'Cocktail Reception',
    subTitle: [
      { text: '5-minute opening speech at the reception' },
      { text: '2 delegate passes' },
      { text: 'Logo on all promotional event materials' },
      {
        text: 'Sponsor’s branded material would be distributed at the reception',
      },
      { text: 'Handouts and brochures distribution to all attendees' },
      { text: 'Access to delegate list 2 weeks before the event' },
      { text: 'Business description and contact details in the final agenda' },
      { text: 'Access to Networking App (incl. lead scanner)' },
    ],
  },

  {
    title: 'Networking Dinner',
    subTitle: [
      { text: '5-minute opening speech at the reception' },
      { text: '2 delegate passes' },
      { text: 'Logo on all promotional event materials' },
      {
        text: 'Sponsor’s branded material would be distributed at the reception',
      },
      { text: 'Handouts and brochures distribution to all attendees' },
      { text: 'Access to delegate list 2 weeks before the event' },
      { text: 'Business description and contact details in the final agenda' },
      { text: 'Access to Networking App (incl. lead scanner)' },
    ],
  },

  {
    title: 'Coffee Break',
    subTitle: [
      { text: '1 delegate pass' },
      { text: 'Logo on all promotional event materials' },
      { text: 'Handouts and brochures distribution to all attendees' },
      { text: 'Access to delegate list 2 weeks before the event' },
      { text: 'Business description and contact details in the final agenda' },
      { text: 'Access to Networking App (incl. lead scanner)' },
    ],
  },

  {
    title: 'Aluminium',
    subTitle: [
      { text: 'Logo on all promotional event materials' },
      { text: 'Handouts and brochures distribution to all attendees' },
      { text: 'Access to delegate list 2 weeks before the event' },
      { text: 'Business description and contact details in the final agenda' },
    ],
  },

  {
    title: 'Diamond',
    subTitle: [
      { text: 'A speaker + 5 delegate passes' },
      { text: '30 minutes speaking slot' },
      { text: 'Logo on all promotional event materials' },
      { text: 'Handouts and brochures distribution to all attendees' },
      { text: 'Access to delegate list 2 weeks before the event' },
      { text: 'Business description and contact details in the final agenda' },
      { text: 'Space for roll up banner & exhibition stand 2×2 m' },
      { text: 'Free round table or panel discussion' },
      { text: 'A designed space for 1/1 meeting' },
      {
        text: 'Closing address during the networking dinner or Cocktail reception',
      },
      { text: 'Nomination of Chairperson of the event' },
      { text: 'Wish-list of companies of interest' },
      { text: 'Access to Networking App (incl. lead scanner)' },
    ],
  },

  {
    title: 'Emerald',
    subTitle: [
      { text: '1 delegate pass' },
      { text: '15 minutes speaking slot' },
      { text: 'Logo on all promotional event materials' },
      { text: 'Handouts and brochures distribution to all attendees' },
      { text: 'Access to delegate list 2 weeks before the event' },
      { text: 'Business description and contact details in the final agenda' },
      { text: 'Access to Networking App (incl. lead scanner)' },
    ],
  },

  {
    title: 'Bronze',
    subTitle: [
      { text: 'A speaker + 2 delegate passes' },
      { text: '20 minutes speaking slot' },
      { text: 'Logo on all promotional event materials' },
      { text: 'Handouts and brochures distribution to all attendees' },
      { text: 'Access to delegate list 2 weeks before the event' },
      { text: 'Business description and contact details in the final agenda' },
      { text: 'Access to Networking App (incl. lead scanner)' },
    ],
  },

  {
    title: 'Silver',
    subTitle: [
      { text: 'A speaker + 3 delegate passes' },
      { text: '20 minutes speaking slot' },
      { text: 'Logo on all promotional event materials' },
      { text: 'Handouts and brochures distribution to all attendees' },
      { text: 'Access to delegate list 2 weeks before the event' },
      { text: 'Business description and contact details in the final agenda' },
      { text: 'Space for Exhibition stand' },
    ],
  },

  {
    title: 'Gold',
    subTitle: [
      { text: 'A speaker + 4 delegate passes' },
      { text: '25 minutes speaking slot' },
      { text: 'Logo on all promotional event materials' },
      { text: 'Handouts and brochures distribution to all attendees' },
      { text: 'Access to delegate list 2 weeks before the event' },
      { text: 'Business description and contact details in the final agenda' },
      { text: 'Space for roll up banner & exhibition stand 2×2 m' },
      { text: 'Free round table or panel discussion' },
      { text: 'Wish-list of companies of interest' },
      { text: 'Access to Networking App (incl. lead scanner)' },
    ],
  },

  {
    title: 'VIP',
    subTitle: [
      { text: 'A speaker + 6 delegate passes' },
      { text: '35 minutes speaking slot' },
      { text: 'Logo on all promotional event materials' },
      { text: 'Handouts and brochures distribution to all attendees' },
      { text: 'Access to delegate list 2 weeks before the event' },
      { text: 'Business description and contact details in the final agenda' },
      { text: 'Space for roll up banner & exhibition stand 2×2 m' },
      { text: 'Free round table or panel discussion' },
      { text: 'A designed space for 1/1 meeting' },
      {
        text: 'Opening address during the networking dinner or Cocktail reception',
      },
      { text: 'Nomination of Chairperson of the event' },
      { text: 'Wish-list of companies of interest' },
      { text: 'Access to Networking App (incl. lead scanner)' },
    ],
  },
]

const options = [
  { value: 'Business Development', label: 'Business Development' },
  { value: 'Exhibition Space 2x2', label: 'Exhibition Space 2x2' },
  { value: 'Cocktail Reception', label: 'Cocktail Reception' },
  { value: 'Networking Dinner', label: 'Networking Dinner' },
  { value: 'Coffee Break', label: 'Coffee Break' },
  { value: 'Aluminium', label: 'Aluminium' },
  { value: 'Diamond', label: 'Diamond' },
  { value: 'Emerald', label: 'Emerald' },
  { value: 'Bronze', label: 'Bronze' },
  { value: 'Silver', label: 'Silver' },
  { value: 'Gold', label: 'Gold' },
  { value: 'VIP', label: 'VIP' },
]

const SponsorshipSchema = yup.object().shape({
  name: yup.string().required('please Enter your Name'),
  surname: yup.string().required('please Enter your Surname'),
  company_name: yup.string().required('please Enter your Company_name'),
  job_title: yup.string().required('please Enter your Job Title'),
  phone_number: yup.number().required('please Enter your Phone Number'),
  corporate_email: yup
    .string()
    .email()
    .required('please Enter your Corporative Email'),
  country: yup.string().required('please Enter your Country'),
  summit_name: yup.string().required('please Enter your Summit Name'),
  package_name: yup.object().shape({
    label: yup.string().required('Required'),
    value: yup.string().required('Required'),
  }),
  comments: yup.string().required('please Enter your Comment'),
  confirm: yup.boolean(),
})

import styles from './SponsorshipPackages.module.css'
import { Accardion } from '../Accardion/Accardion'

export const SponsorshipPackages = () => {
  const [openLogin, setOpenLogin] = React.useState(false)
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
          {content.map(({ title, subTitle }, index) => {
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
        options={options}
        SponsorshipSchema={SponsorshipSchema}
        comment={true}
        check={true}
      />
    </div>
  )
}
