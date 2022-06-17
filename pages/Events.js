import React from 'react'
import { AnyQuestions } from '../components/AnyQuestions/AnyQuestions'
import { Event } from '../components/Event/Event'
import { EventsHead } from '../components/EventsHead/EventsHead'
import { EventsHeading } from '../components/EventsHead/EventsHeading/EventsHeading'
import { Footer } from "../components/Footer/Footer"



export default function Events() {
  return (
    <div>
     <EventsHead />
     <EventsHeading />
     <Event />
     <AnyQuestions />
     <Footer/>
    </div>
  )
}
