import React, { useContext } from 'react'
import MainLayoutt from '../layouts/MainLayoutt'
import { KeynotionPayment } from '../components/Keynotionpayment/KeynotionPayment'
import Head from 'next/head'
import { EventsHead } from '../components/EventsHead/EventsHead'

export default function Payment() {
  return (
    <div>
      <Head>
        <title>Key-Notion</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <EventsHead />

      <KeynotionPayment />
    </div>
  )
}
