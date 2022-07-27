
import { EventsInnerHeading } from "../../components/EventsInnerHeading/EventsInnerHeading";
import { KeySpeakers } from "../../components/KeySpeakers/KeySpeakers";
import { AboutTheEvent } from "../../components/AboutTheEvent/AboutTheEvent";
import { KeyTopics } from "../../components/KeyTopics/KeyTopics";
import { VipTour } from "../../components/VipTour/VipTour";
import { KeyTakeaway } from "../../components/KeyTakeaway/KeyTakeaway";
import { OurPastAttendees } from "../../components/OurPastAttendees/OurPastAttendees";
import { TheVenue } from "../../components/TheVenue/TheVenue";
import { DontMiss } from "../../components/DontMiss/DontMiss";
import { Subscribe } from "../../components/Subscribe/Subscribe"

import axios from "axios";
import MainLayoutt from "../../layouts/MainLayoutt";



export default function EventsInner({data}) {

    const attendees =[
      {logo : "/Opel.png", width : 130, height : 106 },
      {logo : "/Volvo.png", width : 102, height : 104 },
      {logo : "/Hewlett.png", width : 212, height : 88 },
      {logo : "/Rolls.png", width : 76, height : 124 },
      {logo : "/British.png", width : 173, height : 93 },
      {logo : "/groundfos.png", width : 199, height : 73 },
    
      {logo : "/Fraunhofer.png", width : 192, height : 57 },
      {logo : "/Doosan.png", width : 162, height : 75 },
      {logo : "/Danfoss.png", width : 173, height : 71 },
      {logo : "/CGI.png", width : 134, height : 63 },
      {logo : "/Cargill.png", width : 140, height : 61 },
      {logo : "/Ipsen.png", width : 203, height : 59 },
    
      {logo : "/AirLiquide.png", width : 180, height : 34 },
      {logo : "/AtlasCopco.png", width : 141, height : 69 },
      {logo : "/Bmt.png", width : 106, height : 67 },
      {logo : "/Biller.png", width : 252, height : 64 },
      {logo : "/GE.png", width : 99, height : 100 },
      {logo : "/Cecimo.png", width : 219, height : 55 },
    
      {logo : "/Aitbus.png", width : 147, height : 117 },
      {logo : "/Ford.png", width : 172, height : 67 },
      {logo : "/Magneti.png", width : 140, height : 71 },
      {logo : "/Nokia.png", width : 181, height : 31 },
      {logo : "/Merck.png", width : 196, height : 60 },
      {logo : "/John.png", width : 126, height : 86 },
    
      {logo : "/P&G.png", width : 131, height : 131 },
      {logo : "/Samsung.png", width : 221, height : 61 },
      {logo : "/Sanofi.png", width : 130, height : 103 },
      {logo : "/Unilever.png", width : 94, height : 105 },
      {logo : "/GKN.png", width : 175, height : 58 },
      {logo : "/Fischer.png", width : 199, height : 77 },
    ]
    
    return (
      <MainLayoutt>
      <div>
        <EventsInnerHeading id={data.id} Past title={data.title} the_venue_logo={data.the_venue_logo[0].logo} small_description={data.small_description} cover={data.cover} country={data.country} city={data.city}/>
        <KeySpeakers speakers={data.speakers} />
        <AboutTheEvent about={data.about} cover={data.cover_about}/>
        <KeyTopics key_topics={data.key_topics} cover={data.key_topics_img}/>
        <VipTour vip_tour={data.vip_tour} cover={data.vip_tour_img}/>
        <KeyTakeaway attenders={data.attenders} key_takeaway={data.key_takeaway}/> 
        <OurPastAttendees attendees={data.sponsors} title="Sponsors " title_2="& Exhibitors" />
        <OurPastAttendees attendees={data.partners} title="Media " title_2="Partners" />
        <OurPastAttendees attendees={attendees} />
        <TheVenue the_venue={data.the_venue} the_venue_logo={data.the_venue_logo[0].logo}/>
        <DontMiss />
        <Subscribe/>
      </div>
      </MainLayoutt>
    )
  }
  

export async function getServerSideProps(context) {
    const {params} = context

    const {data} = await axios.get(`http://laratest.key-notion.com/api/events/${params.id}`);

  return {
    props: {data: data.data}
  }
}