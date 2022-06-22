import React from 'react'

import Head from 'next/head'

import { AnyQuestions } from '../components/AnyQuestions/AnyQuestions'
import { Event } from '../components/Event/Event'
import { EventsHead } from '../components/EventsHead/EventsHead'
import { EventsHeading } from '../components/EventsHead/EventsHeading/EventsHeading'
import { Footer } from "../components/Footer/Footer"



const AllEvents=[{title: 1},{title: 2},{title: 3},{title: 4},{title: 5},{title: 6},{title: 7},{title: 8},{title: 9},{title: 10}]
const LiveEvents=[{title: 1},{title: 3},{title: 5},{title: 6},{title: 8}]
const VirtualEvents=[{title: 2},{title: 4},{title: 7}]

export default function Events() {
  return (
    <div>
      <Head>
        <title>Key-Nation</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

     <EventsHead />
     <EventsHeading title="Our Upcoming Events" />
     <Event All={AllEvents} Live={LiveEvents} Virtual={VirtualEvents} />
     <AnyQuestions />
     <Footer/>
    </div>
  )
}
