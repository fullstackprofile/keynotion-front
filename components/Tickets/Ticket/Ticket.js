import React from 'react'
import { ButtonComp } from '../../Button/Button'
import styles from './Ticket.module.css'
import axios from 'axios'
import { parseCookies } from 'nookies'
import { useSelector, useDispatch } from 'react-redux'
import { addCard } from '../../../store/cardsSlice'

export const Ticket = ({
  price,
  currency,
  sale,
  items,
  type,
  other_type,
  attractive,
  id,
}) => {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
  const cart_id = parseCookies('cart_id')
  const onBook = async () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    const obj1 = {
      price: sale ? sale : price,
      ticket_id: id,
      count: 1,
      cart_id: user ? user?.id : cart_id.cart_id,
    }
    const { data } = await axios.post(
      'http://laratest.key-notion.com/api/cart',
      obj1
    )
    if (data) {
      dispatch(addCard(data))
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
