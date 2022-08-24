import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import axios from 'axios'
import { SmallButton } from '../../Button/SmallButton'
import styles from './CardItem.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { parseCookies } from 'nookies'
import { addCard } from '../../../store/cardsSlice'

export const CardItem = ({ id, type, other_type, price, count, title }) => {
  const router = useRouter()
  // const [countTicket, setCountTicket] = useState(count)
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
  const cart_id = parseCookies('cart_id')

  const removeItem = async () => {
    const { data } = await axios.delete(
      `http://laratest.key-notion.com/api/cart/${id}?cart_id=${
        user ? user?.id : cart_id.cart_id
      }`
    )
    if (data) {
      dispatch(addCard(data))
    }
  }

  const plusItem = async () => {
    const dataTosendTicketPlus = {
      price: price,
      ticket_id: id,
      count: (count += 1),
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

  const minusItem = async () => {
    const dataTosendTicketMinus = {
      price: price,
      ticket_id: id,
      count: (count -= 1),
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

  const CheckOut = () => {
    router.push('/CheckOut')
  }

  return (
    <div className={styles.card_item}>
      <div className={styles.item_name_block}>
        <div className={styles.remove} onClick={removeItem}>
          <Image src="/remove.png" width={32} height={32} />
        </div>
        <p className={styles.item_name}>
          Ticket: {} {title} - {type}
          {other_type}
        </p>
        <div>
          <SmallButton transparent title="Check Out" onClick={CheckOut} />
        </div>
      </div>
      <div className={styles.item_right}>
        <div className={styles.item_quantity_block}>
          <button
            className={styles.minus}
            disabled={count <= 1}
            onClick={minusItem}
          >
            <p className={styles.icon}>-</p>
          </button>
          <div className={styles.count}>
            <p className={styles.countt}>{count}</p>
          </div>
          <button className={styles.plus} onClick={plusItem}>
            <p className={styles.icon}>+</p>
          </button>
        </div>

        <div className={styles.item_price_block}>
          <p className={styles.item_price}>€{price}</p>
        </div>
      </div>
    </div>
  )
}
