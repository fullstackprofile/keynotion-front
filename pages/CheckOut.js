import React from 'react'
import { CheckOutBody } from '../components/CheckOutBody/CheckOutBody'
import MainLayoutt from '../layouts/MainLayoutt'
import { useSelector } from 'react-redux'

export default function CheckOut() {
  const data = useSelector((state) => state.cards.card)

  return (
    <MainLayoutt>
      <div>
        {data?.map((item, index) => (
          <CheckOutBody
            title={item.data.items?.[0]?.title}
            key={index + item.data.items?.[0]?.ticket_id}
            count={item.data.items?.[0]?.count}
            type={item.data.items?.[0]?.type}
            other_type={item.data.items?.[0]?.other_type}
            price={item.data.items?.[0]?.price}
            ticket_id={item.data.items?.[0]?.ticket_id}
            data={item}
          />
        ))}
      </div>
    </MainLayoutt>
  )
}
