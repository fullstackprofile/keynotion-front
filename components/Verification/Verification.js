import { Dialog } from '@mui/material'
import Image from 'next/image'
import VerificationInputProps from 'react-verification-input'
import { ButtonComp } from '../Button/Button'
import axios from 'axios'
import styles from './Verification.module.css'
import { useState } from 'react'
import { setCookie } from 'nookies'
import { useSelector } from 'react-redux'

export const Verification = ({
  openVerify,
  closeVerify,
  dataRegistr,
  setOpenVerify,
}) => {
  const ONLY_DIGITS = /\d/
  const [verifyValue, setVerifyValue] = useState('')
  const token = useSelector((state) => state.user.userToken)

  const sendVerifyCode = async () => {
    const { data } = await axios.post(
      `http://laratest.key-notion.com/api/verify?email=${dataRegistr.data.user.email}&code=${verifyValue}`
    )

    if (data) {
      setCookie(null, 'token', token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      setOpenVerify(false)
      closeVerify()
    }
  }

  const weSendVerifyCode = async () => {
    const { data } = await axios.post(
      `http://laratest.key-notion.com/api/resend-verify?email=${dataRegistr.data.user.email}`
    )
  }
  return (
    <Dialog open={openVerify} onClose={closeVerify}>
      <div className={styles.dialog_close} onClick={closeVerify}>
        <Image src="/closeIcon.png" width={36} height={36} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p className={styles.text}>Verification Code</p>
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
        <div className={styles.btnDiv}>
          <div className={styles.btn}>
            <ButtonComp title="Verify" onClick={sendVerifyCode} />
          </div>
          <div className={styles.btn}>
            <ButtonComp title="Resend" type onClick={weSendVerifyCode} />
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default Verification
