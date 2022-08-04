import React, { useContext } from 'react'
import { EmptyCard } from '../EmptyCard/EmptyCard'
import { CardContent } from '../CardContent/CardContent'
import AppContext from '../AppContext/AppContext'
import OrderContent from '../OrderContent/OrderContent'
import styles from './UserOrders.module.css'

const UserOrders = () => {
  const context = useContext(AppContext)
  const length = context.session.itemsss.length
  return (
    <div className={styles.userOrders}>
      {length ? (
        <OrderContent data={context.session.itemsss} />
      ) : (
        <EmptyCard
          title="No order has been made yet"
          btnTitle="Return To Shop"
        />
      )}
    </div>
  )
}

export default UserOrders
