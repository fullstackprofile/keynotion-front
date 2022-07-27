import React, { useContext } from 'react'

import { EmptyCard } from '../components/EmptyCard/EmptyCard'
import { CardContent } from '../components/CardContent/CardContent'
import MainLayoutt from '../layouts/MainLayoutt'

import AppContext from '../components/AppContext/AppContext'

export default function Card() {
  const context = useContext(AppContext)
  const length = context.session.itemsss.length
  return (
    <MainLayoutt>
      <div>{length ? <CardContent /> : <EmptyCard />}</div>
    </MainLayoutt>
  )
}
