import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { Controller, useForm } from 'react-hook-form'
import { Dialog } from '@mui/material'
import { ButtonComp } from '../Button/Button'
import { Input } from '../Input/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterSchema } from '../../Helpers/allSchema'
import styles from './SignUp.module.css'
import { Country } from '../Country/Country'
import Verification from '../Verification/Verification'
import { useDispatch } from 'react-redux'
import { addUser, addUserToken } from '../../store/userSlice'

export const SignUp = ({ open, handleClose, setOpen }) => {
  const [openVerify, setOpenVerify] = useState(false)
  const [dataRegistr, setDataRegistr] = useState(null)
  const dispatch = useDispatch()
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(RegisterSchema),
  })

  const onSubmit = async (dataInInput) => {
    const dataToSend = {
      country: dataInInput.country,
      email: dataInInput.email,
      first_name: dataInInput.first_name,
      last_name: dataInInput.last_name,
      password: dataInInput.password,
      password_confirmation: dataInInput.password_confirmation,
      phone: dataInInput.phone,
    }
    const { data } = await axios.post(
      'http://laratest.key-notion.com/api/register',
      dataToSend
    )

    if (data) {
      dispatch(addUserToken(data?.data.token))
      dispatch(addUser(data?.data?.user))
      handleClose()
      setOpenVerify(true)
    }
    setDataRegistr(data)
  }

  const closeVerify = () => {
    setOpenVerify(false)
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
              render={({
                field: { onChange, onBlur, name },
                fieldState: { error },
              }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>First Name</p>
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
              name="last_name"
              control={control}
              render={({
                field: { onChange, onBlur, name },
                fieldState: { error },
              }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Last Name</p>
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
              name="phone"
              control={control}
              render={({
                field: { onChange, onBlur, name },
                fieldState: { error },
              }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Phone Number</p>
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
              name="email"
              control={control}
              render={({
                field: { onChange, onBlur, name },
                fieldState: { error },
              }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Email</p>
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
              name="country"
              control={control}
              render={({
                field: { onChange, onBlur, name },
                fieldState: { error },
              }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Country</p>
                  <Country value={name} onChange={onChange} />
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
                <div className={styles.dialog_content}>
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
              name="password_confirmation"
              control={control}
              render={({
                field: { onChange, onBlur, name },
                fieldState: { error },
              }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Repet Password</p>
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
          </div>

          <div className={styles.dialog_content_btn}>
            <div className={styles.btn}>
              <ButtonComp title="Sign Up" big type />
            </div>
          </div>
        </form>
      </Dialog>
      <Verification
        setOpen={setOpen}
        openVerify={openVerify}
        dataRegistr={dataRegistr}
        closeVerify={closeVerify}
        setOpenVerify={setOpenVerify}
      />
    </>
  )
}
