import React from 'react'

import Head from 'next/head'

import { EventsHead } from '../components/EventsHead/EventsHead'
import { SponsorshipHeading } from '../components/SponsorshipHeading/SponsorshipHeading'

import { Footer } from "../components/Footer/Footer"
import { SponsershipBenefits } from '../components/SponsershipBenefits/SponsershipBenefits'
import { SponsorshipPackages } from '../components/SponsorshipPack/SponsorshipPackages'
import MainLayoutt from '../layouts/MainLayoutt'


export default function Sponsorship() {
  return (
    <MainLayoutt>
    <div>
     <SponsorshipHeading/>
     <SponsershipBenefits />
     <SponsorshipPackages />
    </div>
    </MainLayoutt>
  )
}