import { AboutEvants } from '../components/AboutEvants/AboutEvants'
import { AboutKeyNation } from '../components/AboutKeyNation/AboutKeyNation'
import { SeamlessService } from '../components/SeamlessService/SeamlessService'
import { TestiMonials } from '../components/TestiMonials/TestiMonials'
import { Sections } from '../components/Sections/Sections'
import { WhyAtted } from '../components/WhyAtted/WhyAtted'
import { Getinformed } from '../components/GetInformed/Getinformed'
import { Subscribe } from '../components/Subscribe/Subscribe'
import MainLayout from '../layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <div>
        <AboutEvants />
        <Sections />
        <AboutKeyNation />
        <WhyAtted />
        <SeamlessService />
        <TestiMonials />
        <Getinformed />
        <Subscribe />
      </div>
    </MainLayout>
  )
}
