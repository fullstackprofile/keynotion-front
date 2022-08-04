import { EventsInnerHeading } from '../../components/EventsInnerHeading/EventsInnerHeading'
import { KeySpeakers } from '../../components/KeySpeakers/KeySpeakers'
import { AboutTheEvent } from '../../components/AboutTheEvent/AboutTheEvent'
import { KeyTopics } from '../../components/KeyTopics/KeyTopics'
import { VipTour } from '../../components/VipTour/VipTour'
import { KeyTakeaway } from '../../components/KeyTakeaway/KeyTakeaway'
import { OurPastAttendees } from '../../components/OurPastAttendees/OurPastAttendees'
import { TheVenue } from '../../components/TheVenue/TheVenue'
import { DontMiss } from '../../components/DontMiss/DontMiss'
import { Subscribe } from '../../components/Subscribe/Subscribe'
import { attendees } from '../../Helpers/help'
import axios from 'axios'
import MainLayoutt from '../../layouts/MainLayoutt'

export default function EventsInner({ data }) {
  return (
    <MainLayoutt>
      <div>
        <EventsInnerHeading
          id={data.id}
          Past
          title={data.title}
          the_venue_logo={data.the_venue_logo[0].logo}
          small_description={data.small_description}
          cover={data.cover}
          country={data.country}
          city={data.city}
        />
        <KeySpeakers speakers={data.speakers} />
        <AboutTheEvent about={data.about} cover={data.cover_about} />
        <KeyTopics key_topics={data.key_topics} cover={data.key_topics_img} />
        <VipTour vip_tour={data.vip_tour} cover={data.vip_tour_img} />
        <KeyTakeaway
          attenders={data.attenders}
          key_takeaway={data.key_takeaway}
        />
        <OurPastAttendees
          attendees={data.sponsors}
          title="Sponsors "
          title_2="& Exhibitors"
        />
        <OurPastAttendees
          attendees={data.partners}
          title="Media "
          title_2="Partners"
        />
        <OurPastAttendees attendees={attendees} />
        <TheVenue
          the_venue={data.the_venue}
          the_venue_logo={data.the_venue_logo[0].logo}
        />
        <DontMiss />
        <Subscribe />
      </div>
    </MainLayoutt>
  )
}

export async function getServerSideProps(context) {
  const { params } = context

  const { data } = await axios.get(
    `http://laratest.key-notion.com/api/events/${params.id}`
  )

  return {
    props: { data: data.data },
  }
}
