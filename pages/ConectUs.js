import React from 'react'
import { ConectusHeading } from '../components/ConectusHeading/ConectusHeading'
import { OurNumbers } from '../components/OurNumbers/OurNumbers'
import { OurEmails } from '../components/OurEmails/OurEmails'
import { ConectUsAnyQuestions } from '../components/ConectUsAnyQuestions/ConectUsAnyQuestions'
import GoogleMaps from '../components/GoogleMaps/GoogleMaps'
import MainLayoutt from '../layouts/MainLayoutt'

export default function ConectUs() {
  return (
    <MainLayoutt>
      <div>
        <ConectusHeading />
        <OurNumbers />
        <OurEmails />
        <ConectUsAnyQuestions />
        <GoogleMaps lat={50.084801} lng={14.484} />
      </div>
    </MainLayoutt>
  )
}
