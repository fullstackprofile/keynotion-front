import React, { useEffect, useState } from 'react'
import { Title } from '../TItle/Title'
import { Input } from '../Input/Input'
import { ButtonComp } from '../Button/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import styles from './ConectUsAnyQuestions.module.css'
import { Checkbox } from '@mui/material'
import { TextArea } from '../TextArea/TextArea'
import axios from 'axios'
import { parseCookies } from 'nookies'

const ConectUsAnyQuestionsSchema = yup.object().shape({
  name: yup.string().required('please Enter your First Name'),
  phone: yup.string().required('please Enter your Phone Number'),
  company: yup.string().required('please Enter your Company Name'),
  email: yup.string().email().required('please Enter your Email'),
  attending: yup.boolean(),
  speaking: yup.boolean(),
  sponsoring: yup.boolean(),
  event: yup.string(),
  question: yup.string().required('please Enter your Question'),
})

export const ConectUsAnyQuestions = () => {
  const cookie = parseCookies('token')
  const config = {
    headers: { Authorization: `Bearer ${cookie.token}` },
  }

  const onSubmita = async () => {
    const users = await axios.get(
      'http://laratest.key-notion.com/api/profile',
      config
    )
    setUser(users.data)
  }

  const [user, setUser] = useState()

  useEffect(() => {
    onSubmita()
  }, [])

  useEffect(() => {
    reset(user)
  }, [user])

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(ConectUsAnyQuestionsSchema),
    defaultValues: {
      attending: false,
      speaking: false,
      sponsoring: false,
    },
  })

  const onSubmit = async (dataQuestions) => {
    const interestedData = []

    if (dataQuestions.attending) {
      interestedData.push('attending')
    }

    if (dataQuestions.speaking) {
      interestedData.push('speaking')
    }
    if (dataQuestions.sponsoring) {
      interestedData.push('sponsoring')
    }

    let result = interestedData.toString()

    const dataToSend = {
      email: dataQuestions.email,
      name: dataQuestions.name,
      phone: dataQuestions.phone,
      question: dataQuestions.question,
      company: dataQuestions.company,
      interested: result,
      event: dataQuestions.event,
    }

    const { data } = await axios.post(
      'http://laratest.key-notion.com/api/questions_contact',
      dataToSend
    )
  }

  return (
    <div className={styles.conectUsAnyQuestions}>
      <Title title="Any" title_2="Questions" />
      <div className={styles.subTitle_block}>
        <p className={styles.subTitle}>
          Let us know how we can best help you find what you’re looking for.
          <br />
          We will be in touch shortly.
        </p>
      </div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form_content_1}>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <Input type="text" {...field} placeholder="First Name" />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <Input type="text" {...field} placeholder="Email address" />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <Input type="text" {...field} placeholder="Phone Number" />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="company"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <Input type="text" {...field} placeholder="Company" />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
          </div>
          <div className={styles.checkboxes}>
            <div className={styles.checkboxes_title_block}>
              <p className={styles.checkboxes_title}>I Am Interested In</p>
            </div>
            <div className={styles.checkboxes_content}>
              <Controller
                name="attending"
                control={control}
                render={({ field }) => (
                  <div className={styles.remember}>
                    <Checkbox {...field} />
                    <p className={styles.remember_label}>Attending</p>
                  </div>
                )}
              />
              <Controller
                name="speaking"
                control={control}
                render={({ field }) => (
                  <div className={styles.remember}>
                    <Checkbox {...field} />
                    <p className={styles.remember_label}>Speaking</p>
                  </div>
                )}
              />
              <Controller
                name="sponsoring"
                control={control}
                render={({ field }) => (
                  <div className={styles.remember}>
                    <Checkbox {...field} />
                    <p className={styles.remember_label}>Sponsoring</p>
                  </div>
                )}
              />
            </div>
          </div>
          <Controller
            name="event"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className={styles.dialog_content_}>
                <Input type="text" {...field} placeholder="Event Name" />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <p className={styles.how_help}>How Can We Help?</p>
          <Controller
            name="question"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className={styles.dialog_content_}>
                <TextArea placeholder="Tell us your thoughts" {...field} />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <div className={styles.btn}>
            <ButtonComp title="Send" type="submit" big />
          </div>
        </form>
      </div>
    </div>
  )
}
