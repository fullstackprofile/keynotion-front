import React from 'react'
import { EmptyCard } from '../EmptyCard/EmptyCard'
import OrderContent from '../OrderContent/OrderContent'
import styles from './UserOrders.module.css'

const UserOrders = ({ user, newOrders }) => {
  return (
    <div className={styles.userOrders}>
      {newOrders?.data ? (
        <OrderContent user={user} />
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
