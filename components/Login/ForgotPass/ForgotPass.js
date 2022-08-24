import { Dialog } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ButtonComp } from '../../Button/Button'
import { Input } from '../../Input/Input'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import styles from './ForgotPass.module.css'

export const ForgotPass = ({ open, handleClose }) => {
  const ForgotPassSchema = yup.object().shape({
    email: yup.string().email().required('please Enter your Email'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(ForgotPassSchema),
  })

  const onSubmit = async (dataForm) => {
    console.log(dataForm.email, 'sssssss')
    console.log(dataForm, 'sssssss')
    const { data } = await axios.post(
      `http://laratest.key-notion.com/api/forgot-password`,
      dataForm.email
    )
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <div className={styles.dialog_head}>
          <div className={styles.dialog_back} onClick={handleClose}>
            <Image src="/arrowBack.svg" width={22} height={22} />
            <p className={styles.dialog_back_title}>Back</p>
          </div>
          <div className={styles.dialog_close} onClick={handleClose}>
            <Image src="/closeIcon.png" width={36} height={36} />
          </div>
        </div>
        <div className={styles.dialog_head_subTitle_block}>
          <p className={styles.dialog_head_subTitle}>
            Lost your password? Please enter your username or email address.
            <br />
            You will receive a link to create a new password via email.
          </p>
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

          <div className={styles.dialog_content_btn}>
            <div className={styles.btn}>
              <ButtonComp title="Reset Password" big />
            </div>
          </div>
        </form>
      </Dialog>
    </>
  )
}
