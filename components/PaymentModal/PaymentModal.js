import { Dialog } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { Input } from '../Input/Input'
import { getCookies } from 'cookies-next'
import { ButtonComp } from '../Button/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import styles from './PaymentModal.module.css'
import { setCookie } from 'nookies'
import useIsMobile from '../../Helpers/helpers'
export const cookie = getCookies('token')
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { loadStripe } from '@stripe/stripe-js'

import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import * as yup from 'yup'
import { useSelector } from 'react-redux'

export const PaymnetModal = ({ open, handleClose }) => {
  const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')

  const isMobile = useIsMobile()
  const [loading, setLoading] = useState(false)
  const [holderName, setHolderName] = useState('')
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const orders = useSelector((state) => state.orders.orders)
  console.log(orders, 'orders')

  const ForgotPassSchema = yup.object().shape({
    holderName: yup.string().required('please Enter your holderName'),
    payment_method: yup.string().required(),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(ForgotPassSchema),
  })

  useEffect(() => {
    elements?.update({ locale: 'en' })
  }, [elements])

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      if (elements == null) {
        return
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: holderName,
        },
      })

      // if (error) {
      //   setLoading(false)
      // } else {
      //   Inertia.post(
      //     route('dashboard.payment-methods.store'),
      //     {
      //       payment_method: paymentMethod.id,
      //     },
      //     {
      //       onSuccess: () => {
      //         console.log('ok')
      //       },
      //       onError: (errors) => {
      //         console.log(errors)
      //       },
      //       onFinish: () => {
      //         setLoading(false)
      //       },
      //     }
      //   )
      // }
    } catch (e) {
      console.log(e?.message, 'error')
    }
  }

  return (
    <>
      <Dialog
        PaperProps
        open={open}
        onClose={handleClose}
        sx={{
          padding: '10px',
          width: '100%',
        }}
      >
        <div className={styles.accountDetails_body}>
          <div className={styles.left_img}>
            <Image src="/paymentUser.png" width={388} height={401} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.priceWrapper}>
              <div className={styles.priceBlock}>
                <p>Price: €{orders[0]?.data.Total}</p>
              </div>
              <div className={styles.cardWrapper}>
                <Controller
                  name="order_type"
                  control={control}
                  render={({ ref, field, fieldState: { error } }) => (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '30px',
                      }}
                    >
                      <input
                        inputRef={ref}
                        {...field}
                        type="radio"
                        value="Visa"
                      />
                      <Image
                        sx={{
                          '& .MuiSvgIcon-root': {
                            fontSize: 28,
                          },
                        }}
                        src="/VisaCardLogo.png"
                        width={60}
                        height={46}
                      />
                    </div>
                  )}
                />
                <Controller
                  name="order_type"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '30px',
                      }}
                    >
                      <input {...field} type="radio" value="Visa" />
                      <Image
                        sx={{
                          '& .MuiSvgIcon-root': {
                            fontSize: 28,
                          },
                        }}
                        src="/AmericanExpressLogo.png"
                        width={60}
                        height={46}
                      />
                    </div>
                  )}
                />
                <Controller
                  name="order_type"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '30px',
                      }}
                    >
                      <input {...field} type="radio" value="Visa" />
                      <Image
                        sx={{
                          '& .MuiSvgIcon-root': {
                            fontSize: 36,
                          },
                        }}
                        src="/MasterCardLogo.png"
                        width={60}
                        height={46}
                      />
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className={styles.text}>Card Holder Number</p>
              <Controller
                name="holderName"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div className={styles.dialog_content}>
                    <Input type="text" {...field} />
                    <p className={styles.error}>{error?.message}</p>
                  </div>
                )}
              />
            </div>
            <p className={styles.text}>Card Number</p>
            <div className={styles.cardNumber}>
              <CardNumberElement
                options={{
                  placeholder: 'xxxx xxxx xxxx xxxx',
                  style: {
                    base: {
                      fontSize: '1.125rem',
                      lineHeight: '1.75rem',
                    },
                  },
                  classes: {
                    base: 'px-6 py-4 shadow-simpleCard rounded-xl text-textLighter',
                  },
                }}
              />
            </div>

            <div className={styles.extryDateBlock}>
              <div>
                <p className={styles.text}>Expiry Date</p>
                <div className={styles.date}>
                  <CardExpiryElement
                    options={{
                      style: {
                        base: {
                          fontSize: '1.125rem',
                          lineHeight: '1.75rem',
                        },
                      },
                      classes: {
                        base: 'px-6 py-4 shadow-simpleCard rounded-xl text-textLighter',
                      },
                    }}
                  />
                </div>
              </div>
              <div>
                <p className={styles.text}>Security Code</p>
                <div className={styles.date}>
                  <CardCvcElement
                    options={{
                      placeholder: 'CVC',
                      style: {
                        base: {
                          fontSize: '1.125rem',
                          lineHeight: '1.75rem',
                        },
                      },
                      classes: {
                        base: 'px-6 py-4 shadow-simpleCard rounded-xl text-textLighter',
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            <div className={styles.btnWrapper}>
              <div className={styles.btn}>
                <ButtonComp
                  title="Pay"
                  big
                  disabled={!stripe || !elements || loading}
                  type="submit"
                />
              </div>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  )
}
