import React, { useContext } from 'react'
import AppContext from '../AppContext/AppContext'

import styles from "./DirectBankTransferInfo.module.css"

export const DirectBankTransferInfo = () => {
    const context = useContext(AppContext)
    const index = context.session.index
    const items = context.session.itemsss
    let totalPrice=items[index]?.count*items[index]?.price

    
    
  return (
    <div className={styles.directBankTransferInfo}>
        <div className={styles.body}>
            <div className={styles.top}>
                <div className={styles.top_item}>
                    <p className={styles.item_name}>Order Number:</p>
                    <p className={styles.item_name_}>{items[index]?.order_number}</p>
                </div>
                <div className={styles.top_item}>
                    <p className={styles.item_name}>Date:</p>
                    <p className={styles.item_name_}>May 19, 2022</p>
                </div>
                <div className={styles.top_item}>
                    <p className={styles.item_name}>Total:</p>
                    <p className={styles.item_name_}>{items[index]?.currency}{totalPrice}</p>
                </div>
                <div className={styles.top_item_}>
                    <p className={styles.item_name}>Payment Method:</p>
                    <p className={styles.item_name_}>Invoice - Direct Bank Transfer</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottom_item}>
                    <p className={styles.bottom_item_name}>If you have chosen to make the payment via bank transfer/invoice, please use your Order ID as the payment reference. Please see our bank details below. We will send you the final invoice after we confirm the payment in our bank account. Please make the invoice payment within 3-4 working days, otherwise your registration will be cancelled. <span className={styles.liner}>If you are not able to make the payment within 4 working days kindly send an email request to finance@key-notion.com.</span>
                    Also, if you have chosen credit card payment/PayPal, we will contact you shortly to provide you the final invoice after the confirmation of payment in our bank account.</p>
                    <p className={styles.bottom_item_name_}>Our bank details</p>
                </div>
            </div>
        </div>
    </div>
  )
}
