import React from 'react'
import { Title } from '../TItle/Title'
import { WhyAttedCart } from './WhyAttedCart/WhyAttedCart'
import useIsMobile from '../../Helpers/helpers'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/bundle'

import styles from './WhyAtted.module.css'

const WhyAttedItems = [
  { title: 'Discover', subTitle: 'STRATEGIES' },
  { title: 'Improve', subTitle: 'NETWORKING' },
  { title: 'Exchange', subTitle: 'IDEAS' },
  { title: 'Save', subTitle: 'TIME' },
  { title: 'Educative', subTitle: 'KEYNOTES' },
]

export const WhyAtted = () => {
  const isMobile = useIsMobile()
  return (
    <div className={styles.whyAtted}>
      <Title title="WHY" title_2="ATTEND" />
      <div className={styles.heading}>
        <p className={styles.title}>GET TIPS FOR A BETTER WORK EXPERIENCE</p>
        <p className={styles.subTitle}>
          From live events to virtual or our On-Demand service, we prioritize
          quality in all aspects. This ensures you get value for your time and
          money from our events and conferences.
        </p>
      </div>
      <div className={styles.why_carusel}>
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
          {WhyAttedItems.map(({ title, subTitle }, index) => (
            <SwiperSlide key={index}>
              <WhyAttedCart
                key={title}
                title={title}
                subTitle={subTitle}
              ></WhyAttedCart>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
