import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import axios from 'axios'
import { SmallButton } from '../../Button/SmallButton'
import styles from './CardItem.module.css'
import { useSelector } from 'react-redux'

export const CardItem = ({
  id,
  type,
  other_type,
  price,
  count,
  title,
  cart_id,
}) => {
  const router = useRouter()
  console.log(count, 'count')
  console.log(cart_id, 'cardId')
  const [countTicket, setCountTicket] = useState(count)
  const data = useSelector((state) => state.cards.card)
  const user = useSelector((state) => state.user.user)

  console.log(data, 'sss')
  console.log(user, 'user')

  const removeItem = async () => {
    const { data } = await axios.delete(
      `http://laratest.key-notion.com/api/cart/${id}?cart_id=${
        user ? user?.id : cart_id
      }`
    )
  }

  const dataTosendTicket = {
    price: price,
    ticket_id: id,
    count: countTicket,
    cart_id: user ? user?.id : cart_id,
  }

  const plusItem = async () => {
    setCountTicket((prev) => prev + 1)
    const cart = await axios.post(
      'http://laratest.key-notion.com/api/cart',
      dataTosendTicket
    )
  }

  const minusItem = async () => {
    setCountTicket((prev) => prev - 1)
    const cart = await axios.post(
      'http://laratest.key-notion.com/api/cart',
      dataTosendTicket
    )
  }

  // const CheckOut = () => {
  //   context.setSession((prev) => {
  //     let newArr = [...context.session.itemsss]
  //     let index_ = newArr.findIndex((el) => el.id === id)

  //     return {
  //       itemsss: newArr,
  //       count: newArr.length,
  //       index: index_,
  //     }
  //   })
  //   router.push('/CheckOut')
  // }

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
          {/* <SmallButton transparent title="Check Out" onClick={CheckOut} /> */}
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
            <p className={styles.countt}>{countTicket}</p>
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
