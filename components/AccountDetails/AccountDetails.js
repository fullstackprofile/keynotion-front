import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ButtonComp } from '../Button/Button'
import { Input } from '../Input/Input'
import styles from './AccountDetails.module.css'

export const AccountDetails = ({ user }) => {
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
      <form onSubmit={handleSubmit(onSave)}>
        <div className={styles.dialog_filds}>
          <div className={styles.half}>
            <div className={styles.half_item}>
              <Controller
                name="first_name"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div className={styles.dialog_content}>
                    <p className={styles.dialog_label}>First Name</p>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter Your First Name"
                    />
                    <p className={styles.error}>{error?.message}</p>
                  </div>
                )}
              />
            </div>
            <div className={styles.half_item}>
              <Controller
                name="last_name"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div className={styles.dialog_content}>
                    <p className={styles.dialog_label}>Last Name</p>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter Your Last Name"
                    />
                    <p className={styles.error}>{error?.message}</p>
                  </div>
                )}
              />
            </div>
          </div>
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_label}>Phone Number</p>
                <Input
                  type="text"
                  {...field}
                  placeholder="Enter Your Phone Number"
                />
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
                <Input type="text" {...field} placeholder="Enter Your Email" />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <div className={styles.passwordss}>
            <p className={styles.passwordss_label}>Password Change</p>
            <div className={styles.row}></div>
            <div className={styles.passwordss_block}>
              <Controller
                name="current_password"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div className={styles.dialog_content}>
                    <p className={styles.dialog_label}>Current Password</p>
                    <Input type="text" showPass {...field} />
                    <p className={styles.error}>{error?.message}</p>
                  </div>
                )}
              />
              <Controller
                name="new_password"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div className={styles.dialog_content}>
                    <p className={styles.dialog_label}>New Password</p>
                    <Input type="text" showPass {...field} />
                    <p className={styles.error}>{error?.message}</p>
                  </div>
                )}
              />
              <Controller
                name="new_password_confirmation"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div className={styles.dialog_content}>
                    <p className={styles.dialog_label}>Repet New Password</p>
                    <Input type="text" showPass {...field} />
                    <p className={styles.error}>{error?.message}</p>
                  </div>
                )}
              />
            </div>
          </div>
        </div>

        <div className={styles.dialog_content_btn}>
          <div className={styles.btn}>
            <ButtonComp title="Save Changes" />
          </div>
        </div>
      </form>
    </div>
  )
}
