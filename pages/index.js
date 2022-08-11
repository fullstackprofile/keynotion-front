import { AboutEvants } from '../components/AboutEvants/AboutEvants'
import { AboutKeyNation } from '../components/AboutKeyNation/AboutKeyNation'
import { SeamlessService } from '../components/SeamlessService/SeamlessService'
import { TestiMonials } from '../components/TestiMonials/TestiMonials'
import { Sections } from '../components/Sections/Sections'
import { WhyAtted } from '../components/WhyAtted/WhyAtted'
import { Getinformed } from '../components/GetInformed/Getinformed'
import { Subscribe } from '../components/Subscribe/Subscribe'
import MainLayout from '../layouts/MainLayout'
import axios from 'axios'

export default function Home({ data }) {
  return (
    <MainLayout>
      <div>
        <AboutEvants />
        <Sections />
        <AboutKeyNation />
        <WhyAtted />
        <SeamlessService />
        <TestiMonials data={data.testiMonialsData} />
        <Getinformed data={data.getinformedData} />
        <Subscribe />
      </div>
    </MainLayout>
  )
}

export const getServerSideProps = async () => {
  const { data: testiMonialsData } = await axios.get(
    'http://laratest.key-notion.com/api/testimonials'
  )
  const { data: getinformedData } = await axios.get(
    `http://laratest.key-notion.com/api/news_home`
  )
  return {
    props: {
      data: {
        testiMonialsData: testiMonialsData.data,
        getinformedData: getinformedData.data,
      },
    },
  }
}
