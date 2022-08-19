import React, { useContext } from 'react'
import { EmptyCard } from '../components/EmptyCard/EmptyCard'
import { CardContent } from '../components/CardContent/CardContent'
import MainLayoutt from '../layouts/MainLayoutt'
import AppContext from '../components/AppContext/AppContext'

export default function Card() {
  const context = useContext(AppContext)
  const data = context.session.items
  console.log(data, 'dddddddddddd')
  return (
    <MainLayoutt>
      <div>
        {data ? <CardContent data={data} /> : <EmptyCard data={data} />}
      </div>
    </MainLayoutt>
  )
}
