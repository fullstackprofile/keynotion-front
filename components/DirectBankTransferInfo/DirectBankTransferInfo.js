import React, { useEffect } from 'react'
import styles from './DirectBankTransferInfo.module.css'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { parseCookies } from 'nookies'
import { deleteCard } from '../../store/cardsSlice'

export const DirectBankTransferInfo = () => {
  const dispatch = useDispatch()
  const cart_id = parseCookies('cart_id')
  const user = useSelector((state) => state.user.user)
  const orders = useSelector((state) => state.orders.orders)

  const deleteBackCards = async () => {
    const { data } = await axios.delete(
      `http://laratest.key-notion.com/api/clear?cart_id=${
        user ? user.id : cart_id.cart_id
      }`
    )
    if (data) {
      dispatch(deleteCard())
    }
  }

  useEffect(() => {
    deleteBackCards()
  }, [])

  return (
    <div className={styles.directBankTransferInfo}>
      <div className={styles.body}>
        <div className={styles.top}>
          <div className={styles.top_item}>
            <p className={styles.item_name}>Order Number:</p>
            <p className={styles.item_name_}>
              # {orders[0]?.data.order_number}
            </p>
          </div>
          <div className={styles.top_item}>
            <p className={styles.item_name}>Date:</p>
            <p className={styles.item_name_}>{orders[0]?.data.created_at}</p>
          </div>
          <div className={styles.top_item}>
            <p className={styles.item_name}>Total:</p>
            <p className={styles.item_name_}>{orders[0].data.Total}</p>
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
