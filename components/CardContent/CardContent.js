import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './CardContent.module.css'
import { CardItem } from './CardItem/CardItem'
import { parseCookies } from 'nookies'
import { CouponForm } from './CouponForm/CouponForm'
import { useRouter } from 'next/router'
import { Login } from '../../components/Login/Login'
import { useSelector } from 'react-redux'

export const CardContent = () => {
  const [openForgot, setOpenForgot] = useState(false)
  const [open, SetOpen] = useState(false)
  const cookie = parseCookies('token')
  const router = useRouter()
  const [openLogin, setOpenLogin] = useState(false)
  const [login, setLogin] = useState()
  const cart_id = parseCookies('cart_id')
  const data = useSelector((state) => state.cards.card)
  const user = useSelector((state) => state.user.user)

  console.log(user.id, 'user')
  console.log(data, 'card')

  const onShowCoupon = () => {
    SetOpen(!open)
  }

  let prices = data?.map((item) => {
    return item.data.items?.[0]?.price * item.data.items?.[0]?.count
  })
  let totalPrice = prices?.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
  })

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
            {data?.map((item, index) => (
              <CardItem
                title={item.data.items?.[0]?.title}
                key={index + item.data.items?.[0]?.ticket_id}
                count={item.data.items?.[0]?.count}
                id={item.data.items?.[0]?.ticket_id}
                type={item.data.items?.[0]?.type}
                other_type={item.data.items?.[0]?.other_type}
                price={item.data.items?.[0]?.price}
                cart_id={user ? user?.id : cart_id}
              />
            ))}
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
                <p className={styles.total_block_price}>€{totalPrice}</p>
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
                <p className={styles.total_block_price}>€{totalPrice}</p>
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
