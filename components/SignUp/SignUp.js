import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import { Controller, useForm } from 'react-hook-form'
import { Autocomplete, Box, Dialog, TextField } from '@mui/material'
import { ButtonComp } from '../Button/Button'
import { Input } from '../Input/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styles from './SignUp.module.css'
import { setCookie } from 'nookies'
import classNames from 'classnames'
import { Country } from '../Country/Country'
import { parseCookies } from 'nookies'

const RegisterSchema = yup.object().shape({
  first_name: yup.string().required('please Enter your First Name'),
  last_name: yup.string().required('please Enter your Last Name'),
  phone: yup.number().required('please Enter your Phone Number'),
  email: yup.string().email().required('please Enter your Email'),
  country: yup.string().required('please Enter your Country'),
  password: yup.string().required('please Enter your Password'),
  password_confirmation: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('password')], 'Your passwords do not match.'),
})

export const SignUp = ({ open, handleClose }) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(RegisterSchema),
  })

  const onSubmit = async (dd) => {
    const dataToSend = {
      country: dd.country,
      email: dd.email,
      first_name: dd.first_name,
      last_name: dd.last_name,
      password: dd.password,
      password_confirmation: dd.password_confirmation,
      phone: dd.phone,
    }
    const { data } = await axios.post(
      'http://laratest.key-notion.com/api/register',
      dataToSend
    )
    setCookie(null, 'token', data.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    const dataToSendVerify = {
      email: dd.email,
    }

    const cookie = parseCookies('token')
    const config = {
      headers: { Authorization: `Bearer ${cookie.token}` },
    }
    const { dataa } = await axios.post(
      'http://laratest.key-notion.com/api/email/verification-notification',
      dataToSendVerify,
      config
    )
    if (data) {
      handleClose()
    }
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { width: '100%', padding: '10px' } }}
      >
        <div className={styles.dialog_head}>
          <p className={styles.dialog_title}>Sign Up</p>
          <div className={styles.dialog_close} onClick={handleClose}>
            <Image src="/closeIcon.png" width={36} height={36} />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.dialog_filds}>
            <Controller
              name="first_name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>First Name</p>
                  <Input type="text" {...field} />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="last_name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Last Name</p>
                  <Input type="text" {...field} />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Phone Number</p>
                  <Input type="text" {...field} />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Email</p>
                  <Input type="text" {...field} />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="country"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Country</p>
                  <Country value={value} onChange={onChange} />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Password</p>
                  <Input type="text" showPass {...field} />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="password_confirmation"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Repet Password</p>
                  <Input type="text" showPass {...field} />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
          </div>

          <div className={styles.dialog_content_btn}>
            <div className={styles.btn}>
              <ButtonComp title="Sign Up" big type />
            </div>
          </div>
        </form>
      </Dialog>
    </>
  )
}
