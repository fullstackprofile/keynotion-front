import React from 'react'

import { EventsHeading } from '../../components/EventsHead/EventsHeading/EventsHeading'
import { Tickets } from '../../components/Tickets/Tickets'
import { TicketsOnline } from '../../components/TicketsOnline/TicketsOnline'
import { RelatedEvents } from '../../components/RelatedEvents/RelatedEvents'

import axios from 'axios'

import MainLayoutt from '../../layouts/MainLayoutt'
import { useRouter } from 'next/router'

export default function Ticket({ data }) {
  console.log(data.firstRequestData)

  const { query } = useRouter()
  const id_ = query.id

  return (
    <MainLayoutt>
      <div>
        <EventsHeading
          id={id_}
          title={data.secondRequestData.title}
          subTitle={data.secondRequestData.small_description}
          img="/TicketHeading.png"
          ticket
        />
        <Tickets
          data={data.firstRequestData}
          event={data.secondRequestData.title}
        />
        <TicketsOnline />
        <RelatedEvents />
      </div>
    </MainLayoutt>
  )
}

export async function getServerSideProps(context) {
  const { params } = context

  const { data } = await axios.get(
    `http://laratest.key-notion.com/api/tickets?Events=${params.id}`
  )

  const { data: secondRequestData } = await axios.get(
    `http://laratest.key-notion.com/api/events/${params.id}`
  )

  return {
    props: {
      data: {
        firstRequestData: data.data,
        secondRequestData: secondRequestData.data,
      },
    },
  }
}
