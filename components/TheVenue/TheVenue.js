import Image from 'next/image'
import React from 'react'
import { ButtonComp } from '../Button/Button'
// import { GooglePlacesScript } from '../GoogleMap/GoogleMap'
import { Title } from '../Title/Title'
import GoogleMaps from "../GoogleMaps/GoogleMaps"


import styles from "./TheVenue.module.css"


export const TheVenue = ({the_venue,the_venue_logo}) => {

   
    
  return (
    <div className={styles.theVenue}>
        <Title  title="The" title_2="Venue"/>
        <div className={styles.theVenue_body}>
            <div className={styles.body_content}>
                <div className={styles.title_block}>
                <p className={styles.title}>{the_venue[0].title}</p>
                </div>
                <div className={styles.subTitle_block}>
                <p className={styles.subTitle}>{the_venue[0].address}</p>
                </div>
                <div className={styles.body_content_img}>
                <Image src={the_venue_logo} width={151} height={118} />
                </div>
                <div className={styles.btn}>
                    <ButtonComp title="Book Room" transparent />
                </div>
            </div>
            <div className={styles.body_img}>
                <Image src={the_venue[0].cover} width={784} height={816} />
            </div>
        </div>
        <GoogleMaps lat={Number(the_venue[0].latitude)} lng={Number(the_venue[0].longitude)}/>
    </div>
  )
}
