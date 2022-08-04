import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../AppContext/AppContext'
import styles from './CardContent.module.css'
import { CardItem } from './CardItem/CardItem'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { CouponForm } from './CouponForm/CouponForm'
import { useRouter } from 'next/router'
import { Login } from '../../components/Login/Login'

export const CardContent = () => {
  const [openForgot, setOpenForgot] = React.useState(false)
  const cookie = parseCookies('token')
  const router = useRouter()

  const config = {
    headers: { Authorization: `Bearer ${cookie.token}` },
  }

  const onSubmita = async () => {
    const users = await axios.get(
      'http://laratest.key-notion.com/api/profile',
      config
    )
    setUser(users.data)
  }

  const [user, setUser] = useState()

  useEffect(() => {
    onSubmita()
  }, [])

  const [open, SetOpen] = useState(false)

  const onShowCoupon = () => {
    SetOpen(!open)
  }

  const context = useContext(AppContext)
  const items = context.session.itemsss

  let prices = items.map(({ price, count }) => {
    return price * count
  })

  let totalPrice = prices.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
  })

  const [openLogin, setOpenLogin] = React.useState(false)

  const handleClickOpen = () => {
    setOpenLogin(true)
  }

  const handleClose = () => {
    setOpenLogin(false)
  }
  const handleClickOpenForgot = () => {
    setOpenLogin(false)
    setOpenForgot(true)
  }

  const [login, setLogin] = useState()

  useEffect(() => {
    cookie.token ? setLogin(true) : setLogin(false)
  }, [cookie])

  return (
    <div className={styles.body}>
      <div className={styles.content_card_info}>
        <div className={styles.card_info_block}>
          <div className={styles.card_info_block_titles}>
            <p className={styles.title_product}>Product</p>
            <div className={styles.right}>
              <p className={styles.title_quantity}>Quantity</p>
              <p className={styles.title_price}>Price</p>
            </div>
          </div>
          <div className={styles.card_items}>
            {items.map(
              (
                { id, type, other_type, price, count, currency, title_ },
                index
              ) => (
                <CardItem
                  title_={title_}
                  key={index + id}
                  count={count}
                  id={id}
                  type={type}
                  other_type={other_type}
                  price={price}
                  currency={currency}
                />
              )
            )}
          </div>
        </div>
        <div className={styles.totals_block}>
          <Link href="/">
            <div className={styles.goHome}>
              <div className={styles.img}>
                <Image src="/arrowtoHome.png" width={14} height={18} />
              </div>
              <p className={styles.goHome_title}>Hompage</p>
            </div>
          </Link>
          <div className={styles.total_block}>
            <div className={styles.subtotal_block}>
              <div className={styles.subtotal_block__}>
                <p className={styles.subtotal_block_title}>Subtotal</p>
                <p className={styles.total_block_price}>
                  {items[0].currency}
                  {totalPrice}
                </p>
              </div>
            </div>
            <div className={styles.vat_block}>
              <div className={styles.subtotal_block__}>
                <p className={styles.subtotal_block_title}>Vat</p>
                <p className={styles.total_block_price}>0</p>
              </div>
            </div>
            <div className={styles.subtotal_block}>
              <div className={styles.subtotal_block__}>
                <p className={styles.subtotal_block_title}>Total</p>
                <p className={styles.total_block_price}>
                  {items[0].currency}
                  {totalPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.return_coupon}>
        {!user && (
          <div className={styles.return}>
            <div className={styles.person_img}>
              <Image src="/Person.png" width={32} height={30} />
            </div>
            <p className={styles.return_text}>
              Returning Customer?{' '}
              <span onClick={handleClickOpen} className={styles.liner}>
                Click Here To Login
              </span>
            </p>
          </div>
        )}
        <div className={styles.coupon}>
          <div className={styles.person_img}>
            <Image src="/procent.png" width={32} height={30} />
          </div>
          <div>
            <p className={styles.return_text}>
              Have A Coupon?{' '}
              <span className={styles.liner} onClick={onShowCoupon}>
                Click Here To Enter Your Code
              </span>
            </p>
          </div>
        </div>
        {open && <CouponForm />}
      </div>
      <Login
        open={openLogin}
        handleClose={handleClose}
        handleClickOpenForgot={handleClickOpenForgot}
      />
    </div>
  )
}
