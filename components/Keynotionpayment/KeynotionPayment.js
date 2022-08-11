import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ButtonComp } from '../Button/Button'
import { Input } from '../Input/Input'
import styles from './KeynotionPayment.module.css'
import Image from 'next/image'

export const KeynotionPayment = ({ user }) => {
  const ChangeSchema = yup.object().shape({
    first_name: yup.string().required('please Enter Your First Name'),
    last_name: yup.string().required('please Enter Your Last Name'),
    phone: yup.number().required('please Enter Your Phone Number'),
    email: yup.string().email().required('please Enter Your Email'),
    current_password: yup
      .string()
      .required('please Enter Your Current Password'),
    new_password: yup.string(),
    new_password_confirmation: yup
      .string()
      .oneOf([yup.ref('new_password')], 'Your passwords do not match.'),
  })

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(ChangeSchema),
  })

  const onSave = (dataSend) => {
    console.log(dataSend)
  }

  useEffect(() => {
    reset(user)
  }, [user])

  return (
    <div className={styles.accountDetails_body}>
      <div className={styles.left_img}>
        <Image src="/paymentUser.png" width={388} height={401} />
      </div>
      <form onSubmit={handleSubmit(onSave)}>
        <div className={styles.dialog_filds}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Controller
              name="price"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_contentPaymentPrice}>
                  <Input type="text" {...field} placeholder="Price" />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="order_type"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div style={{ display: 'flex' }}>
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
                      src="/VisaCardLogo.png"
                      width={60}
                      height={46}
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input {...field} type="radio" value="MasterCard" />
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
                </div>
              )}
            />
          </div>
          <Controller
            name="card_holder_name "
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_label}>Card Holder Number</p>
                <Input type="text" {...field} />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <div className={styles.passwordss}>
            <div className={styles.passwordss_block}>
              <Controller
                name="card_number"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div className={styles.dialog_content}>
                    <p className={styles.dialog_label}>Card Number</p>
                    <Input
                      type="text"
                      placeholder="xxxx xxxx xxxx xxxx"
                      {...field}
                    />
                    <p className={styles.error}>{error?.message}</p>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
        <div className={styles.half}>
          <div className={styles.half_item}>
            <Controller
              name="expiry_date"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Expiry Date</p>
                  <Input type="text" {...field} placeholder="MM / YY" />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
          </div>
          <div className={styles.half_item}>
            <Controller
              name="security_code"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Security Code</p>
                  <Input type="text" {...field} placeholder="CVC" />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
          </div>
        </div>

        <div className={styles.dialog_content_btn}>
          <div className={styles.btn}>
            <ButtonComp title="Pay" />
          </div>
        </div>
      </form>
    </div>
  )
}
