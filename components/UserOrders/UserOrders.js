import React, { useContext } from 'react'
import { EmptyCard } from '../EmptyCard/EmptyCard'
import { CardContent } from '../CardContent/CardContent'
import AppContext from '../AppContext/AppContext'
import OrderContent from '../OrderContent/OrderContent'

const UserOrders = () => {
  const context = useContext(AppContext)
  const length = context.session.itemsss.length
  return (
    <div>
      {length ? (
        <OrderContent data={context.session.itemsss} />
      ) : (
        <EmptyCard
          title="YOUR ORDERS IS CURRENTLY EMPTY."
          btnTitle="Return To Shop"
        />
      )}
    </div>
  )
}

export default UserOrders
