import React from 'react'
import { Title } from '../TItle/Title'
import styles from './OrderDetails.module.css'
import { useSelector } from 'react-redux'

export const OrderDetails = () => {
  const orders = useSelector((state) => state.orders.orders)

  return (
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
            {orders[0].data.order_items.map((item) => {
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
                        <p className={styles.item_price}>{item?.price}</p>
                      </div>
                      <div className={styles.item_total_block}>
                        <p className={styles.item_total_price}>
                          {item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            <div className={styles.content_total_block}>
              <div className={styles.total_block}>
                <div className={styles.subtotal_block}>
                  <div className={styles.subtotal_block__}>
                    <p className={styles.subtotal_block_title}>Subtotal:</p>
                    <p className={styles.total_block_price}>
                      {orders[0].data.Subtotal}
                    </p>
                  </div>
                </div>
                <div className={styles.vat_block}>
                  <div className={styles.subtotal_block__}>
                    <p className={styles.subtotal_block_title}>Vat:</p>
                    <p className={styles.total_block_price}>
                      {orders[0].data.VAT}
                    </p>
                  </div>
                </div>
                <div className={styles.vat_block_}>
                  <div className={styles.subtotal_block__}>
                    <p className={styles.subtotal_block_title}>
                      Payment Method:
                    </p>
                    <p className={styles.total_block_price}>
                      Invoice - Direct Bank Transfer
                    </p>
                  </div>
                </div>
                <div className={styles.subtotal_block}>
                  <div className={styles.subtotal_block__}>
                    <p className={styles.subtotal_block_title}>Total</p>
                    <p className={styles.total_block_price}>
                      {orders[0].data.Total}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
