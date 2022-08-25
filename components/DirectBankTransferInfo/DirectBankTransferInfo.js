import React from 'react'
import styles from './DirectBankTransferInfo.module.css'
import { useSelector } from 'react-redux'

export const DirectBankTransferInfo = () => {
  const orders = useSelector((state) => state.orders.orders)
  const orderNumber = orders?.map((item) => {
    return item.data.order_number
  })
  const totalPrice = orders?.map((item) => {
    return item.data.Total
  })

  return (
    <div className={styles.directBankTransferInfo}>
      <div className={styles.body}>
        <div className={styles.top}>
          <div className={styles.top_item}>
            <p className={styles.item_name}>Order Number:</p>
            <p className={styles.item_name_}>{orderNumber.toString()}</p>
          </div>
          <div className={styles.top_item}>
            <p className={styles.item_name}>Date:</p>
            <p className={styles.item_name_}>May 19, 2022</p>
          </div>
          <div className={styles.top_item}>
            <p className={styles.item_name}>Total:</p>
            <p className={styles.item_name_}>{totalPrice.toString()}</p>
          </div>
          <div className={styles.top_item_}>
            <p className={styles.item_name}>Payment Method:</p>
            <p className={styles.item_name_}>Invoice - Direct Bank Transfer</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottom_item}>
            <p className={styles.bottom_item_name}>
              If you have chosen to make the payment via bank transfer/invoice,
              please use your Order ID as the payment reference. Please see our
              bank details below. We will send you the final invoice after we
              confirm the payment in our bank account. Please make the invoice
              payment within 3-4 working days, otherwise your registration will
              be cancelled.{' '}
              <span className={styles.liner}>
                If you are not able to make the payment within 4 working days
                kindly send an email request to finance@key-notion.com.
              </span>
              Also, if you have chosen credit card payment/PayPal, we will
              contact you shortly to provide you the final invoice after the
              confirmation of payment in our bank account.
            </p>
            <p className={styles.bottom_item_name_}>Our bank details</p>
          </div>
        </div>
      </div>
    </div>
  )
}
