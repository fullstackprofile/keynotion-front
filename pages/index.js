
import { AboutEvants } from '../components/AboutEvants/AboutEvants'
import { AboutKeyNation } from '../components/AboutKeyNation/AboutKeyNation'
import { Head } from '../components/Head/Head'
import { SeamlessService } from '../components/SeamlessService/SeamlessService'
import { TestiMonials } from '../components/TestiMonials/TestiMonials'
import { Sections } from '../components/Sections/Sections'
import { WhyAtted } from '../components/WhyAtted/WhyAtted'
import { Getinformed } from '../components/Getinformed/Getinformed'
import { Subscribe } from '../components/Subscribe/Subscribe'
import { Footer } from '../components/Footer/Footer'



export default function Home() {
  return (
    <div>
        <Head />
        <AboutEvants/>
        <Sections/>
        <AboutKeyNation />
        <WhyAtted />
        <SeamlessService />
        <TestiMonials />
        <Getinformed />
        <Subscribe />
        <Footer/>
    </div>
  )
}
