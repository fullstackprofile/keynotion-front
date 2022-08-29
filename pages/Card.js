import React from 'react'
import { EmptyCard } from '../components/EmptyCard/EmptyCard'
import { CardContent } from '../components/CardContent/CardContent'
import MainLayoutt from '../layouts/MainLayoutt'
import { useSelector } from 'react-redux'

export default function Card() {
  const dataInStore = useSelector((state) => state.cards.card)

  const badgeCount = dataInStore[0]?.data?.items?.reduce(
    (accumulator, value) => {
      return accumulator + value.count
    },
    0
  )

  return (
    <MainLayoutt>
      <div>{badgeCount ? <CardContent /> : <EmptyCard />}</div>
    </MainLayoutt>
  )
}
