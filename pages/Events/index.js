import React from 'react'
import axios from 'axios'
import { AnyQuestions } from '../../components/AnyQuestions/AnyQuestions'
import { Event } from '../../components/Event/Event'
import { EventsHeading } from '../../components/EventsHead/EventsHeading/EventsHeading'
import MainLayoutt from '../../layouts/MainLayoutt'

export default function Events({ data }) {
  return (
    <MainLayoutt>
      <div>
        <EventsHeading
          title="Our Upcoming Events"
          img="/eventsBackground.png"
          subTitle="Check Them Out!"
        />
        <Event All={data.data} />
        <AnyQuestions />
      </div>
    </MainLayoutt>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get('http://laratest.key-notion.com/api/events')
  return {
    props: { data },
  }
}
