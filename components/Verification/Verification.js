import { Dialog } from '@mui/material'
import VerificationInputProps from 'react-verification-input'
import { ButtonComp } from '../Button/Button'
import axios from 'axios'
import styles from './Verification.module.css'
import { useState } from 'react'

export const Verification = ({
  openVerify,
  handleClickCloseVerify,
  dataRegistr,
}) => {
  const ONLY_DIGITS = /\d/
  const [verifyValue, setVerifyValue] = useState('')

  const sendVerifyCode = async () => {
    console.log(verifyValue)

    const dataForSendVerify = {
      email: dataRegistr.email,
      code: verifyValue,
    }
    const { data } = await axios.post(
      'http://laratest.key-notion.com/api/verify',
      dataForSendVerify
    )
  }

  const weSendVerifyCode = async () => {
    const dataWeForSendVerify = {
      email: dataRegistr.email,
    }
    const { data } = await axios.post(
      'http://laratest.key-notion.com/api/resend-verify',
      dataWeForSendVerify
    )
  }
  return (
    <Dialog open={openVerify} onClose={handleClickCloseVerify}>
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
            <ButtonComp title="Send Code" onClick={sendVerifyCode} />
          </div>
          <div className={styles.btn}>
            <ButtonComp title="We Send" type onClick={weSendVerifyCode} />
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default Verification
