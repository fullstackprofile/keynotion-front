import React from 'react'
import { EmptyCard } from '../components/EmptyCard/EmptyCard'
import { CardContent } from '../components/CardContent/CardContent'
import MainLayoutt from '../layouts/MainLayoutt'
import { useSelector } from 'react-redux'

export default function Card() {
  const dataInStore = useSelector((state) => state.cards.card)
  return (
    <MainLayoutt>
      <div>{dataInStore.length > 0 ? <CardContent /> : <EmptyCard />}</div>
    </MainLayoutt>
  )
}
