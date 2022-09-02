import { Checkbox, Dialog } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { Input } from '../Input/Input'
import { getCookies } from 'cookies-next'
import { ButtonComp } from '../Button/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import styles from './Login.module.css'
import { setCookie } from 'nookies'
import useIsMobile from '../../Helpers/helpers'
import { LoginSchema } from '../../Helpers/allSchema'
export const cookie = getCookies('token')

export const Login = ({ open, handleClose, handleClickOpenForgot }) => {
  const isMobile = useIsMobile()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      checked: false,
    },
    resolver: yupResolver(LoginSchema),
  })

  const onSubmit = async (dataForm) => {
    const dataToSend = {
      email: dataForm.email,
      password: dataForm.password,
    }

    const { data } = await axios.post(
      'http://laratest.key-notion.com/api/login',
      dataToSend
    )
    setCookie(null, 'token', data?.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    if (data) {
      handleClose()
    }
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
        <div className={styles.dialog_head}>
          <p className={styles.dialog_title}>Sign In</p>
          <div className={styles.dialog_close} onClick={handleClose}>
            <Image src="/closeIcon.png" width={36} height={36} />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({
              field: { onChange, onBlur, name },
              fieldState: { error },
            }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_label}>Username or Email Address</p>
                <Input
                  type="text"
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({
              field: { onChange, onBlur, name },
              fieldState: { error },
            }) => (
              <div className={styles.dialog_content_pass}>
                <p className={styles.dialog_label}>Password</p>
                <Input
                  type="text"
                  showPass
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <Controller
            name="checked"
            control={control}
            render={({
              field: { onChange, onBlur, name },
              fieldState: { error },
            }) => (
              <div className={styles.remember}>
                <Checkbox name={name} onChange={onChange} onBlur={onBlur} />
                <p className={styles.remember_label}>Remember me</p>
                <p className={styles.remember_label}> {error?.message}</p>
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
