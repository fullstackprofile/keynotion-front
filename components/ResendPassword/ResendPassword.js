import { Dialog } from '@mui/material'
import Image from 'next/image'
import VerificationInputProps from 'react-verification-input'
import { ButtonComp } from '../Button/Button'
import axios from 'axios'
import { Input } from '../Input/Input'
import styles from './ResendPassword.module.css'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import * as yup from 'yup'

const ResendPasswordSchema = yup.object().shape({
  email: yup.string().email().required('please Enter your Email'),
  password: yup.string().required('please Enter your Password'),
  password_confirmation: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('password')], 'Your passwords do not match.'),
})
const ONLY_DIGITS = /\d/

export const ResendPassword = ({
  resendPasswordState,
  openVerify,
  closeResedPassword,
  dataRegistr,
}) => {
  const [verifyValue, setVerifyValue] = useState('')

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(ResendPasswordSchema),
  })
  const resendPassword = async (dataForm) => {
    const { data } = await axios.post(
      `http://laratest.key-notion.com/api/reset-password?code=${verifyValue}&email=${dataForm.email}&password=${dataForm.password}&password_confirmation=${dataForm.password_confirmation}`
    )
    if (data) {
      closeResedPassword()
    }
  }

  return (
    <Dialog open={resendPasswordState} onClose={closeResedPassword}>
      <div className={styles.dialog_close} onClick={closeResedPassword}>
        <Image src="/closeIcon.png" width={36} height={36} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p className={styles.text}>Verification Code</p>
        <form onSubmit={handleSubmit(resendPassword)}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <VerificationInputProps
              onChange={(e) => setVerifyValue(e)}
              value={verifyValue}
              type="number"
              validChars={ONLY_DIGITS}
              length={5}
            />
          </div>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_titlePassword}>Email</p>
                <Input type="text" {...field} />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_titlePassword}>Password</p>
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
                <p className={styles.dialog_titlePassword}>Repet Password</p>
                <Input type="text" showPass {...field} />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <div className={styles.btnDiv}>
            <div className={styles.btn}>
              <ButtonComp title="Resend Password" />
            </div>
          </div>
        </form>
      </div>
    </Dialog>
  )
}

export default ResendPassword
