import React from 'react'
import { ButtonComp } from '../Button/Button'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { Input } from '../Input/Input'
import styles from './Subscribe.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { SubscribeSchema } from '../../Helpers/allSchema'

export const Subscribe = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(SubscribeSchema),
  })
  const user = useSelector((state) => state.user.user)

  const onSubmit = async (subscriber) => {
    const dataToSend = {
      email: subscriber.email,
    }

    const { data } = await axios.post(
      'http://laratest.key-notion.com/api/subscriber-store',
      dataToSend
    )
  }

  return (
    <div className={styles.subscribe}>
      <div className={styles.subscribe_right}>
        <div className={styles.icon}>
          <Image src="/notification.svg" alt="icon" width={48} height={48} />
        </div>

        <div className={styles.right_content}>
          <div className={styles.right_title}>
            <p className={styles.title}>
              <span className={styles.gradient}>Subscribe</span> to our
              newsletter and stay in touch with all updates of events
            </p>
          </div>
          <div className={styles.right_subTitle}>
            <p className={styles.subTitle}>
              Get upcoming event updates right in your inbox.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              defaultValue={user.email}
              control={control}
              render={({
                field: { onChange, onBlur, name },
                fieldState: { error },
              }) => (
                <>
                  <Input
                    onBlur={onBlur}
                    type="email"
                    placeholder="Email"
                    single
                    name={name}
                    onChange={onChange}
                  />
                  <p className={styles.error}>{error?.message}</p>
                </>
              )}
            />
            <div className={styles.btn}>
              <ButtonComp title="Subscribe" />
            </div>
          </form>
        </div>
      </div>
      <div className={styles.subscribe_left}>
        <Image
          src="/SubscribeImg.png"
          alt="SubscribeImg"
          width={500}
          height={499}
        />
      </div>
    </div>
  )
}
