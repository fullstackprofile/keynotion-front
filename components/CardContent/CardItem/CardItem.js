import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import axios from 'axios'
import styles from './CardItem.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { parseCookies } from 'nookies'
import { addCard } from '../../../store/cardsSlice'

export const CardItem = () => {
  const router = useRouter()
  const user = useSelector((state) => state.user.user)
  const data = useSelector((state) => state.cards.card)
  const dispatch = useDispatch()
  const cart_id = parseCookies('cart_id')

  const removeItem = async (ticketId) => {
    const { data } = await axios.delete(
      `http://laratest.key-notion.com/api/cart/${ticketId}?cart_id=${
        user ? user?.id : cart_id.cart_id
      }`
    )
    if (data) {
      dispatch(addCard(data))
    }
  }

  const addItem = async (price, ticketId, newCount) => {
    const dataTosendTicketPlus = {
      price: price,
      ticket_id: ticketId,
      count: (newCount += 1),
      cart_id: user ? user?.id : cart_id.cart_id,
    }
    const { data } = await axios.post(
      'http://laratest.key-notion.com/api/cart',
      dataTosendTicketPlus
    )
    if (data) {
      dispatch(addCard(data))
    }
  }

  const minusItem = async (price, ticketId, newCount) => {
    const dataTosendTicketMinus = {
      price: price,
      ticket_id: ticketId,
      count: (newCount -= 1),
      cart_id: user ? user?.id : cart_id.cart_id,
    }
    const { data } = await axios.post(
      'http://laratest.key-notion.com/api/cart',
      dataTosendTicketMinus
    )
    if (data) {
      dispatch(addCard(data))
    }
  }

  return data[0].data.items.map((item) => {
    return (
      <div key={item.ticket_id} className={styles.card_item}>
        <div className={styles.item_name_block}>
          <div
            className={styles.remove}
            onClick={() => removeItem(item.ticket_id)}
          >
            <Image src="/remove.png" width={32} height={32} />
          </div>
          <p className={styles.item_name}>
            Ticket: {item.title} - {item.type}
            {item.other_type}
          </p>
        </div>
        <div className={styles.item_right}>
          <div className={styles.item_quantity_block}>
            <button
              className={styles.minus}
              disabled={item.count <= 1}
              onClick={() => minusItem(item.price, item.ticket_id, item.count)}
            >
              <p className={styles.icon}>-</p>
            </button>
            <div className={styles.count}>
              <p className={styles.countt}>{item.count}</p>
            </div>
            <button
              className={styles.plus}
              onClick={() => addItem(item.price, item.ticket_id, item.count)}
            >
              <p className={styles.icon}>+</p>
            </button>
          </div>
          <div className={styles.item_price_block}>
            <p className={styles.item_price}>€{item.price}</p>
          </div>
        </div>
      </div>
    )
  })
}
