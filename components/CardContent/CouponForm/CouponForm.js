import React from 'react'
import { parseCookies } from 'nookies'
import styles from './CouponForm.module.css'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '../../Input/Input'
import { ButtonComp } from '../../Button/Button'
import { useSelector } from 'react-redux'

const CardContentsSchema = yup.object().shape({
  code: yup.string().required('please Enter Coupont Code'),
})

export const CouponForm = () => {
  const user = useSelector((state) => state.user.user)
  const cart_id = parseCookies('card_id')

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(CardContentsSchema),
  })

  const onSubmit = async (dataQuestions) => {
    const dataToSend = {
      code: dataQuestions.code,
    }

    const { data } = await axios.post(
      `http://laratest.key-notion.com/api/cart/coupon?cart_id=${
        user ? user?.id : cart_id.cart_id
      }`,
      dataToSend
    )
  }

  return (
    <div className={styles.coupon_form_block}>
      <div className={styles.coupon_body}>
        <p className={styles.coupon_body_title}>
          If you have a coupon code, please apply it below.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.coupon_form}>
            <div className={styles.coupon_form_input}>
              <Controller
                name="code"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div className={styles.dialog_content}>
                    <Input type="text" {...field} placeholder="Coupon Code" />
                    {error?.message && (
                      <p className={styles.error}>{error?.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
            <div className={styles.btn}>
              <ButtonComp title="Apply Coupon" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
