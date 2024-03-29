import React from 'react'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import { Title } from '../TItle/Title'
import { Input } from '../Input/Input'
import { ButtonComp } from '../Button/Button'
import { TextArea } from '../TextArea/TextArea'
import { yupResolver } from '@hookform/resolvers/yup'
import styles from './AnyQuestions.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { AnyQuestionsSchema } from '../../Helpers/allSchema'

export const AnyQuestions = () => {
  const user = useSelector((state) => state.user.user)
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(AnyQuestionsSchema),
  })

  const onSubmit = async (dataQuestions) => {
    const dataToSend = {
      email: dataQuestions.email,
      name: dataQuestions.name,
      number: dataQuestions.number,
      message: dataQuestions.message,
    }

    const { data } = await axios.post(
      'http://laratest.key-notion.com/api/questions',
      dataToSend
    )
  }

  return (
    <div className={styles.anyQuestions}>
      <Title title="Any?" title_2="Questions" nogradiental />
      <div className={styles.anyQuestions_content}>
        <div className={styles.anyQuestions_form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              defaultValue={user.first_name}
              render={({
                field: { onChange, onBlur, name },
                fieldState: { error },
              }) => (
                <div className={styles.dialog_content}>
                  <Input
                    type="text"
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="Name"
                  />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue={user.email}
              render={({
                field: { onChange, onBlur, name },
                fieldState: { error },
              }) => (
                <div className={styles.dialog_content}>
                  <Input
                    type="text"
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="Email"
                  />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="number"
              control={control}
              defaultValue={user.phone}
              render={({
                field: { onChange, onBlur, name },
                fieldState: { error },
              }) => (
                <div className={styles.dialog_content}>
                  <Input
                    type="text"
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="Number"
                  />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="message"
              control={control}
              render={({
                field: { onChange, onBlur, name },
                fieldState: { error },
              }) => (
                <div className={styles.dialog_content}>
                  <TextArea
                    placeholder="Message"
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <div className={styles.dialog_content_btn}>
              <div className={styles.btn}>
                <ButtonComp title="Send" type="submit" big />
              </div>
              <div className={styles.dialog_content_info}>
                <Image
                  src="/PhoneIcon.svg"
                  alt="PhoneIcon.svg"
                  width={34}
                  height={34}
                />
                <p className={styles.dialog_content_info_title}>
                  +44 203 773 8656
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.imgWrapper}>
          <Image
            src="/AnyQuestion.png"
            alt="AnyQuestion.png"
            width={632}
            height={504}
          />
        </div>
      </div>
    </div>
  )
}
