import { useRouter } from 'next/router'
import React from 'react'

import styles from './Dashboard.module.css'

export const Dashboard = ({ first_name, last_name }) => {
  const router = useRouter()

  return (
    <div className={styles.dashboard_body}>
      <p className={styles.dashboard_body_text}>
        Hello {first_name && <span className={styles.liner}>{first_name}</span>}
        {last_name && <span className={styles.liner}> - {last_name}</span>}
      </p>

      <p className={styles.dashboard_body_text_}>
        From your account dashboard you can view your{' '}
        <span
          className={styles.liner}
          onClick={() => router.push('/UserPage/Orders')}
        >
          recent orders
        </span>
        , manage your{' '}
        <span
          className={styles.liner}
          onClick={() => router.push('/UserPage/Address')}
        >
          billing address
        </span>
        ,and{' '}
        <span
          className={styles.liner}
          onClick={() => router.push('/UserPage/AccountDetails')}
        >
          edit your password and account details.
        </span>
      </p>
    </div>
  )
}
