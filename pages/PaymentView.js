import React from 'react'
import { Title } from '../components/TItle/Title'
import styles from '../components/OrderDetails/OrderDetails.module.css'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import MainLayoutt from '../layouts/MainLayoutt'

export default function PaymentView() {
  const ordersDetails = useSelector(
    (state) => state.ordersDetails.ordersDetails
  )
  const router = useRouter()

  const curentOrderDetailsView = ordersDetails[0]?.data.find(
    (item) => item.id === Number(router.query.orderId)
  )

  return (
    <MainLayoutt>
      <div className={styles.orderDetails}>
        <div className={styles.body}>
          <Title title_2="Order Details" />
          <div className={styles.content}>
            <div className={styles.card_info_block}>
              <div className={styles.card_info_block_titles}>
                <p className={styles.title_product}>Product</p>
                <div className={styles.right}>
                  <p className={styles.title_quantity}>Quantity</p>
                  <p className={styles.title_price}>Price</p>
                  <p className={styles.title_price}>Total</p>
                </div>
              </div>
              {curentOrderDetailsView?.order_items?.map((item) => {
                return (
                  <div key={item.ticket_id} className={styles.card_items}>
                    <div className={styles.card_item}>
                      <div className={styles.item_name_block}>
                        <p className={styles.item_name}>
                          Ticket: {item.title} - {item.type}
                          {item.other_type}
                        </p>
                      </div>
                      <div className={styles.item_right}>
                        <div className={styles.item_quantity_block}>
                          <div className={styles.count}>
                            <p className={styles.countt}>{item.quantity}</p>
                          </div>
                        </div>
                        <div className={styles.item_price_block}>
                          <p className={styles.item_price}>€ {item?.price}</p>
                        </div>
                        <div className={styles.item_total_block}>
                          <p className={styles.item_total_price}>
                            € {item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </MainLayoutt>
  )
}
