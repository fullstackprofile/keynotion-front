import React from 'react'

import {AboutHeading} from "../components/AboutHeading/AboutHeading"
import { AboutUs } from '../components/AboutUs/AboutUs'
import { WhoWeAre } from '../components/WhoWeAre/WhoWeAre'
import { Faq } from '../components/Faq/Faq'

import MainLayoutt from '../layouts/MainLayoutt'

export default function About() {
  return (
    <MainLayoutt>
      <div>
      <AboutHeading />
      <AboutUs />
      <WhoWeAre />
      <Faq />
      </div>
    </MainLayoutt>
  )
}