import { Checkbox, Dialog } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { Input } from '../Input/Input'
import { getCookies, setCookies } from 'cookies-next'
import { ButtonComp } from '../Button/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import styles from './Login.module.css'
import { setCookie } from 'nookies'
import useIsMobile from '../../Helpers/helpers'

const LoginSchema = yup.object().shape({
  email: yup.string().email().required('please Enter your Email'),
  password: yup.string().required('please Enter your Password'),
})

export const cookie = getCookies('token')

export const Login = ({ open, handleClose, handleClickOpenForgot }) => {
  const isMobile = useIsMobile()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      checked: false,
    },
    resolver: yupResolver(LoginSchema),
  })

  const onSubmit = async (dd) => {
    const dataToSend = {
      email: dd.email,
      password: dd.password,
    }

    const { data } = await axios.post(
      'http://laratest.key-notion.com/api/login',
      dataToSend
    )
    setCookie(null, 'token', data.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    if (data) {
      handleClose()
    }

    // const config = {
    // headers: { Authorization: `Bearer ${data.token}` }
    // };

    // const user = await axios.get('http://laratest.key-notion.com/api/profile', config);
    // console.log(user.data,"useruseruser");
  }

  return (
    <>
      <Dialog
        PaperProps={{ sx: { width: '100%', padding: '10px' } }}
        open={open}
        onClose={handleClose}
        sx={{
          padding: '10px',
          width: '100%',
        }}
      >
        <div style={{ width: '80%' }} className={styles.dialog_head}>
          <p className={styles.dialog_title}>Sign In</p>
          <div className={styles.dialog_close} onClick={handleClose}>
            <Image src="/closeIcon.png" width={36} height={36} />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_label}>Username or Email Address</p>
                <Input type="text" {...field} />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className={styles.dialog_content_pass}>
                <p className={styles.dialog_label}>Password</p>
                <Input type="text" showPass {...field} />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <Controller
            name="checked"
            control={control}
            render={({ field }) => (
              <div className={styles.remember}>
                <Checkbox {...field} />
                <p className={styles.remember_label}>Remember me</p>
              </div>
            )}
          />

          <div className={styles.dialog_content_btn}>
            <div className={styles.btn}>
              <ButtonComp title="Log In" big />
            </div>

            <div className={styles.forget}>
              <p
                className={styles.forget_title}
                onClick={handleClickOpenForgot}
              >
                Forgot Password?
              </p>
            </div>
          </div>
        </form>
      </Dialog>
    </>
  )
}
