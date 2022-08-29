import React from 'react'
import { EmptyCard } from '../EmptyCard/EmptyCard'
import OrderContent from '../OrderContent/OrderContent'
import styles from './UserOrders.module.css'
import { useSelector } from 'react-redux'

const UserOrders = () => {
  const dataInStore = useSelector((state) => state.orders.orders)
  return (
    <div className={styles.userOrders}>
      {dataInStore.length > 0 ? (
        <OrderContent />
      ) : (
        <EmptyCard
          title="No order has been made yet"
          btnTitle="Return To Shop"
          width="100%"
        />
      )}
    </div>
  )
}

export default UserOrders
