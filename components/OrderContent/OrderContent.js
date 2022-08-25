import React from 'react'
import styles from './OrderContent.module.css'
import { useSelector } from 'react-redux'

const OrderContent = () => {
  const orders = useSelector((state) => state.orders.orders)
  const card = useSelector((state) => state.cards.card)
  let count = card?.map((item) => {
    return item.data.items?.[0]?.count
  })
  return (
    <div>
      <div className={styles.blockHeader}>
        <p className={styles.title_product}>Order</p>
        <p className={styles.title_product}>Date</p>
        <p className={styles.title_product}>Status</p>
        <p className={styles.title_product}>Total</p>
      </div>
      <div>
        {orders.map((item, index) => {
          console.log(item, 'itemorder')
          return (
            <div key={index} className={styles.blockTable}>
              <p className={styles.title}>{item?.data.order_number}</p>
              <p className={styles.title}>
                {item?.data.created_at.slice(0, 10)}
              </p>
              <p className={styles.title}>Status</p>
              <p className={styles.title}>
                € {item?.data.Total} for {count} items
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OrderContent
