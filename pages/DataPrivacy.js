import React from 'react'

import { EventsHeading } from '../components/EventsHead/EventsHeading/EventsHeading'
import { DataPrivacyFaq } from '../components/DataPrivacyFaq/DataPrivacyFaq'

import MainLayoutt from '../layouts/MainLayoutt'

export default function DataPrivacy() {
  return (
    <MainLayoutt>
      <div>
        <EventsHeading title="DATA PRIVACY" img="/DataPrivacyBack.png" />
        <DataPrivacyFaq />
      </div>
    </MainLayoutt>
  )
}
