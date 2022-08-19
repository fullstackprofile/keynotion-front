import React, { useEffect } from 'react'
import { ButtonComp } from '../../Button/Button'
import { useContext, useState } from 'react'
import AppContext from '../../AppContext/AppContext'
import styles from './Ticket.module.css'
import axios from 'axios'
import { parseCookies, setCookie } from 'nookies'
import { uniqueId } from '../../../Helpers/help'

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
  const [user, setUser] = useState()
  const cookie = parseCookies('token')
  const newUniqueId = uniqueId()
  const getUserDataForReset = async () => {
    const users = await axios.get(
      'http://laratest.key-notion.com/api/profile',
      { headers: { Authorization: `Bearer ${cookie.token}` } }
    )
    setUser(users.data)
  }
  useEffect(() => {
    getUserDataForReset()
  }, [])

  const onBook = async () => {
    if (!user) {
      setCookie(null, 'card_id', newUniqueId, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    }
    const card_id = parseCookies('card_id')

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    const obj = {
      price: price,
      type: type,
      other_type: other_type,
      ticket_id: id,
      count: 1,
      currency: currency,
      title: event,
      order_number: 0,
      cart_id: user ? user?.id : card_id,
    }
    const obj1 = {
      price: price,
      ticket_id: id,
      count: 1,
      title: event,
      cart_id: user ? user?.id : card_id.card_id,
    }
    if (sale) {
      obj.price = sale
    }

    // if (!context.session.itemsss?.length) {
    //   context.setSession((prev) => ({
    //     itemsss: [...prev.itemsss, obj],
    //     count: 1,
    //   }))
    // } else {
    //   context.setSession((prev) => {
    //     let newArr = [...context.session.itemsss]

    //     const findItem = context.session.itemsss.find((el) => el.id === obj.id)

    //     if (findItem) {
    //       return { itemsss: newArr, count: newArr.length }
    //     } else {
    //       newArr.push({
    //         ...obj,
    //         count: 1,
    //       })
    //     }
    //     return {
    //       itemsss: newArr,
    //       count: newArr.length,
    //     }
    //   })
    // }

    const cart = await axios.post(
      'http://laratest.key-notion.com/api/cart',
      obj1
    )
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
