import React from 'react'
import { Title } from '../TItle/Title'

import styles from './BankInfo.module.css'

export const BankInfo = ({ bank, account_number, sort_code, iban, bic }) => {
  return (
    <div className={styles.bankInfo}>
      <Title title_2="Keynotion, S.R.O.:" />
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.top_item}>
            <p className={styles.item_name}>Bank:</p>
            <p className={styles.item_name_}>{bank}</p>
          </div>
          <div className={styles.top_item}>
            <p className={styles.item_name}>Account Number:</p>
            <p className={styles.item_name_}>{account_number}</p>
          </div>
          <div className={styles.top_item}>
            <p className={styles.item_name}>Sort Code:</p>
            <p className={styles.item_name_}>{sort_code}</p>
          </div>
          <div className={styles.top_item}>
            <p className={styles.item_name}>IBAN:</p>
            <p className={styles.item_name_}>{iban}</p>
          </div>
          <div className={styles.top_item_}>
            <p className={styles.item_name}>BIC:</p>
            <p className={styles.item_name_}>{bic}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
