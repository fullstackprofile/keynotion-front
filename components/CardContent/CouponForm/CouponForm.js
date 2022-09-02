import React from 'react'
import { parseCookies } from 'nookies'
import styles from './CouponForm.module.css'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '../../Input/Input'
import { ButtonComp } from '../../Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { addCard } from '../../../store/cardsSlice'
import { CardContentsSchema } from '../../../Helpers/allSchema'

export const CouponForm = () => {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
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
    if (data) {
      dispatch(addCard(data))
    }
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
                render={({
                  field: { onChange, onBlur, name },
                  fieldState: { error },
                }) => (
                  <div className={styles.dialog_content}>
                    <Input
                      type="text"
                      name={name}
                      onChange={onChange}
                      onBlur={onBlur}
                      placeholder="Coupon Code"
                    />
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
