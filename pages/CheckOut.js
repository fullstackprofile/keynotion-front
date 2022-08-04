import React, { useContext } from 'react'
import { CheckOutBody } from '../components/CheckOutBody/CheckOutBody'
import MainLayoutt from '../layouts/MainLayoutt'
import AppContext from '../components/AppContext/AppContext'

export default function CheckOut() {
  const context = useContext(AppContext)
  const index = context.session.index
  const items = context.session.itemsss
  return (
    <MainLayoutt>
      <div>
        <CheckOutBody
          index={index}
          ticketName={items[index]?.title_}
          count={items[index]?.count}
          type={items[index]?.type}
          other_type={items[index]?.other_type}
        />
      </div>
    </MainLayoutt>
  )
}
