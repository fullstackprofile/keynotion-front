import React from 'react'
import { Title } from '../TItle/Title';

import {
    YMaps,
    Map,
    Placemark,  } from "react-yandex-maps";


import styles from "./YandexMap.module.css"



export const YandexMap = () => {

  return (
    <>
    <Title title="Our" title_2="Offices" />
    <p className={styles.title}>Where to visit us.</p>
    <YMaps >
      <div className={styles.yandexMap}>
      <Map  width={1200} height={400}   defaultState={{
    center: [50.084801, 14.484000],
    zoom: 10
  }}>
      <Placemark geometry={[50.084801, 14.484000]} />
    </Map>
      </div>
    
  </YMaps>
    </>
  )
}



// AIzaSyBia2np0v7hx4c2QyL36D2lzUAtCjpa-0k

