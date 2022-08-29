import React from 'react'
import { Title } from '../TItle/Title'
import { TestiMonialsCart } from './TestiMonialsCart/TestiMonialsCart'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/bundle'
import styles from './TestiMonials.module.css'
import useIsMobile from '../../Helpers/helpers'

export const TestiMonials = ({ data }) => {
  const isMobile = useIsMobile()
  return (
    <div className={styles.testiMonials}>
      <Title title="TEST" title_2="IMONIALS" conected />
      <div className={styles.testiMonials_carusel}>
        <Swiper
          slidesPerView={isMobile > 1300 ? 3 : isMobile >= 900 ? 2 : 1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={isMobile <= 900 ? false : true}
          modules={[Navigation]}
          className={styles.my_swiper}
        >
          {data?.map(
            (
              {
                full_name,
                testimonial,
                star,
                company,
                id,
                logo,
                position,
                profession,
              },
              index
            ) => (
              <SwiperSlide key={index}>
                <TestiMonialsCart
                  key={id}
                  title={full_name}
                  subTitle={testimonial}
                  rating={star}
                  companyName={company}
                  logo={logo}
                  profession={profession}
                  position={position}
                ></TestiMonialsCart>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  )
}
