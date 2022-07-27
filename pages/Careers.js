import React from 'react'

import { CareersHeading } from '../components/CareersHeading/CareersHeading'
import { CareersIcons } from '../components/CareersIcons/CareersIcons'
import { Vacancies } from '../components/Vacancies/Vacancies'
import axios from 'axios'
import MainLayoutt from '../layouts/MainLayoutt'



  


export default function Careers({data}) {
  
  return (
    <MainLayoutt>
      <div>
      <CareersHeading />
      <CareersIcons />
      <Vacancies data={data}/>
      </div>
    </MainLayoutt>
  )
}

export async function getServerSideProps() {
 

  const {data} = await axios.get(`http://laratest.key-notion.com/api/vacancies`);

return {
  props: {data: data.data}
}
}