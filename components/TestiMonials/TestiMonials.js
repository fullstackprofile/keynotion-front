import React from 'react'
import { Title } from '../TItle/Title'
import { TestiMonialsCart } from './TestiMonialsCart/TestiMonialsCart'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/bundle'
import styles from './TestiMonials.module.css'
import useIsMobile from '../../Helpers/helpers'

const TestiMonialsItems = [
  {
    rating: 5,
    title:
      'Smart manufacturing London conference was the first in person meet I attended after the COVID situation.I was impressed with the details and arrangements done by very professional team, kudos!!The 3 day conference was vey insightful and addressed most of the relevant topics for th timeI I look forward to the session again next year!',
    subTitle: 'Nanda Kishore, Chief Supply Chain Officer',
    companyName: 'Shift Clean Energy',
  },
  {
    rating: 4,
    title:
      'During the ATMP manufacturing &  bioanalytics event (https://lnkd.ingyd6ZGJJ), the cutting edge technologies and their associated challenges were discussed. The talks from Mark Duerkop, @Zoltan kis and  Christoph Herwig were especially fascinating. ',
    subTitle:
      'Miloud G. NICHANE (Ph.D., PM), Analytical Method Validation and Operational Excellence',
    companyName: 'Shift Clean Energy',
  },
  {
    rating: 5,
    title:
      'As their sponsor, I consider Keynotion’s Intelligent Bioprocessing Summit a success. The program has surpassed our expectations.',
    subTitle: 'Ebersberg, Bayern',
    companyName: 'Eurofins Genomics',
  },
  {
    rating: 5,
    title: 'It was great to be there joining a very interesting summit ….',
    subTitle: 'Digital industrial operations director EU',
    companyName: 'Electrolux',
  },
  {
    rating: 4,
    title:
      'Thanks for the nice words. I really enjoyed the conference and special thanks for the sharp organization. It’s amazing how you kept all of us on track and timing was respected throughout the event. ',
    subTitle: 'Senior Technical Director',
    companyName: 'Duracell',
  },
  {
    rating: 5,
    title:
      'Thanks again, our cooperation worked very well. Discussions were great and I left with great insights and connects. ',
    subTitle: 'Vice President of Global Manufacturing Strategy',
    companyName: 'Johnson & Johnson',
  },
  {
    rating: 4,
    title: 'It was a very good conference, thank you for inviting me.',
    subTitle: 'Manufacturing Director, Europe',
    companyName: 'Coats Group PLC',
  },
  {
    rating: 5,
    title:
      'Thank you for allowing to join the conference in Bologna.I think you did a great job in organizing the event…..  it went very smooth and looked professional.',
    subTitle: 'Global Director IWS Manufacturing Excellence',
    companyName: 'Procter & Gamble',
  },
]

export const TestiMonials = () => {
  const isMobile = useIsMobile()
  return (
    <div className={styles.testiMonials}>
      <Title title="TEST" title_2="IMONIALS" conected />
      <div className={styles.testiMonials_carusel}>
        <Swiper
          slidesPerView={isMobile >= 1300 ? 3 : isMobile >= 900 ? 2 : 1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={isMobile <= 900 ? false : true}
          modules={[Navigation]}
          className={styles.my_swiper}
        >
          {TestiMonialsItems.map(
            ({ title, subTitle, rating, companyName }, index) => (
              <SwiperSlide key={index}>
                <TestiMonialsCart
                  key={title}
                  title={title}
                  subTitle={subTitle}
                  rating={rating}
                  companyName={companyName}
                ></TestiMonialsCart>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  )
}
