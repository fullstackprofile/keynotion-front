import React from 'react'
import { ButtonComp } from '../../Button/Button'
import { useContext, useState } from 'react'
import AppContext from '../../AppContext/AppContext'
import styles from './Ticket.module.css'

export const Ticket = ({
  price,
  sale,
  currency,
  items,
  type,
  other_type,
  attractive,
  id,
  event,
}) => {
  const context = useContext(AppContext)

  console.log(context.session, 'session ticket')

  const onBook = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    const obj = {
      price: price,
      type: type,
      other_type: other_type,
      id: id,
      count: 1,
      currency: currency,
      title_: event,
      order_number: 0,
    }
    if (sale) {
      obj.price = sale
    }

    if (!context.session.itemsss?.length) {
      context.setSession((prev) => ({
        itemsss: [...prev.itemsss, obj],
        count: 1,
      }))
    } else {
      context.setSession((prev) => {
        let newArr = [...context.session.itemsss]

        const findItem = context.session.itemsss.find((el) => el.id === obj.id)

        if (findItem) {
          return { itemsss: newArr, count: newArr.length }
        } else {
          newArr.push({
            ...obj,
            count: 1,
          })
        }
        return {
          itemsss: newArr,
          count: newArr.length,
        }
      })
    }
  }

  return (
    <div className={styles.ticket}>
      <div className={styles.body}>
        <div
          className={attractive ? styles.title_block_liner : styles.title_block}
        >
          <div className={styles.title_block_}>
            <p className={attractive ? styles.title_ : styles.title}>{type}</p>
            {other_type && (
              <p className={attractive ? styles.subTitle_ : styles.subTitle}>
                {other_type}
              </p>
            )}
          </div>
        </div>
        <div className={styles.content}>
          <div className={sale ? styles.content_price : styles.content_price_}>
            {sale ? (
              <>
                <p className={styles.price_sale}>
                  {price}
                  {currency}
                </p>
                <p className={styles.price}>
                  {sale}
                  {currency}
                </p>
              </>
            ) : (
              <p className={styles.price}>
                {price}
                {currency}
              </p>
            )}
          </div>
          <div className={styles.content_body_block}>
            <div className={styles.content_body}>
              {items.map(({ title }) => (
                <p key={title} className={styles.content_item}>
                  {title}
                </p>
              ))}
            </div>
            <div className={styles.btn}>
              <ButtonComp title="Book" onClick={onBook} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
