import React, { useEffect, useState } from 'react'
import styles from './OrderContent.module.css'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const OrderContent = () => {
  const ordersDetails = useSelector(
    (state) => state.ordersDetails.ordersDetails
  )
  const router = useRouter()
  const [ordersData, setOrdersData] = useState()

  useEffect(() => {
    setOrdersData(ordersDetails)
  }, [])

  const viewOrderDetails = (orderId) => {
    router.push(`/PaymentView?orderId=${orderId}`)
  }
  return (
    <div>
      <div className={styles.blockHeader}>
        <p className={styles.title_product}>Order</p>
        <p className={styles.title_product}>Date</p>
        <p className={styles.title_product}>Status</p>
        <p className={styles.title_product}>Total</p>
        <p className={styles.title_product}>Actions</p>
      </div>
      <div>
        {ordersData?.[0]?.data.map((item, index) => {
          return (
            <div key={index} className={styles.blockTable}>
              <p className={styles.title}># {item.order_number}</p>
              <p className={styles.title}>{item.created_at.slice(0, 10)}</p>
              <p className={styles.title}>{item.status}</p>
              <p className={styles.title}>
                € {item.total} for {item.count} items
              </p>
              <div
                onClick={() => viewOrderDetails(item.order_items[0]?.order_id)}
                className={styles.viewBtn}
              >
                <p className={styles.title_product}>View</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OrderContent
