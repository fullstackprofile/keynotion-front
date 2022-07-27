import React from 'react'

import { Event } from '../../components/Event/Event'
import { EventsHeading } from '../../components/EventsHead/EventsHeading/EventsHeading'
import { Previous } from '../../components/Previous/Previous'

import axios from 'axios'
import MainLayoutt from '../../layouts/MainLayoutt'


export default function PastEvents({data}) {
  return (
    <MainLayoutt>
    <div>
     <EventsHeading title="Our Past Events" subTitle="Check Out Our Most Popular Past Events" img="/PastEventsBack.png"/>
     <Event All={data.data} Past/>
     <Previous img="/PreviousBack.png" title="- Previous 2018 Events -" />
    </div>
    </MainLayoutt>
  )
}


export const getServerSideProps = async () => {

  const {data} = await axios.get("http://laratest.key-notion.com/api/events") //past

  return {
    props: {data}
  }
}