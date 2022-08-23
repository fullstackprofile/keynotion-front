import React from 'react'
import { EmptyCard } from '../components/EmptyCard/EmptyCard'
import { CardContent } from '../components/CardContent/CardContent'
import MainLayoutt from '../layouts/MainLayoutt'
import { useSelector } from 'react-redux'

export default function Card() {
  const dataInStore = useSelector((state) => state.cards.card)
  let count = dataInStore?.map((item) => {
    return item.data.items?.[0]?.ticket_id
  })

  return (
    <MainLayoutt>
      <div>{count.toString() ? <CardContent /> : <EmptyCard />}</div>
    </MainLayoutt>
  )
}
