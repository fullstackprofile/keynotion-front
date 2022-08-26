import React from 'react'
import Head from 'next/head'
import { EventsHead } from '../components/EventsHead/EventsHead'
import AddCart from '../components/Keynotionpayment/AddCard'

export default function Payment() {
  return (
    <div>
      <Head>
        <title>Key-Notion</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <EventsHead />

      <AddCart />
    </div>
  )
}
