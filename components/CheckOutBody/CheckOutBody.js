import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Title } from '../TItle/Title'
import { Input } from '../Input/Input'
import { ButtonComp } from '../Button/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import styles from './CheckOutBody.module.css'
import { Controller, useForm } from 'react-hook-form'
import { Country } from '../Country/Country'
import Image from 'next/image'
import { useRouter } from 'next/router'

const CheckOutBodysSchema = yup.object().shape({
  first_name: yup.string().required('please Enter your Name'),
  last_name: yup.string().required('please Enter your Name'),
  company_name: yup.string().required('please Enter your Name'),
  region: yup.string().required('please Enter Your Region Name'),
  city: yup.string().required('please Enter Your City Name'),
  street_address: yup.string().required('please Enter Street Address'),
  postcode: yup.string().required('please Enter PostCode/ZIP'),
  email: yup.string().email().required('please Enter your Email'),
  number: yup.number().required('please Enter your Phone Number'),
  order_type: yup.string().required(),
})

export const CheckOutBody = ({ title, count, type, other_type }) => {
  const router = useRouter()
  const user = useSelector((state) => state.user.user)
  const goPrivacy = () => router.push('/DataPrivacy')

  let delegate = []

  for (let i = 1; i <= count; i++) {
    delegate.push(i)
  }

  useEffect(() => {
    reset(user)
  }, [user])

  const { control, handleSubmit, reset, watch } = useForm({
    // defaultValues :{
    //   order_type : "Invoice - Direct Bank Transfer"
    // }
    // resolver: yupResolver(CheckOutBodysSchema),
  })

  // const watchShowAge = watch("order_type");

  const onSubmit = async (data) => {
    if (data.order_type == 'Invoice - Direct Bank Transfer') {
      const orderStore = {
        name: data.name,
        surname: data.surname,
        company_name: data.company_name,
        job_title: data.job_title,
        phone: data.phone_number,
        corporate_email: data.corporate_email,
        country: data.country,
        summit_name: data.summit_name,
        comment: data.comments,
        learn: data.Learn_about_us.value,
        other: data.your_way_get_us || 'ok',
      }
      const { data } = await axios.post(
        'http://laratest.key-notion.com/api/order/store',
        orderStore
      )
      // context.setSession((prev) => {
      //   let newArr = [...context.session.itemsss]
      //   newArr[index].order_number = 1523
      //   return {
      //     itemsss: newArr,
      //     count: newArr.length,
      //     index: index,
      //   }
      // })

      // router.push(
      //   `/DirectBankTransfer/${context.session.itemsss[index].order_number}`
      // )
    }
    if (data.order_type == 'Visa or Mastercard') {
      router.push(`/Payment`)
    }
  }

  return (
    <div className={styles.checkOutBody}>
      <Title title={title} />
      <p className={styles.subtitle_}>{`${type}${other_type}`}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.forms}>
          <div className={styles.right}>
            <p className={styles.form_title}>Company Details</p>
            <Controller
              name="first_name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>First Name</p>
                  <Input type="text" {...field} placeholder="First Name" />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="last_name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Last Name</p>
                  <Input type="text" {...field} placeholder="Last Name" />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="company_name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Company Name</p>
                  <Input type="text" {...field} placeholder="Company Name" />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="country"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Country</p>
                  <Country value={value} onChange={onChange} />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="region"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Region</p>
                  <Input
                    type="text"
                    {...field}
                    placeholder="Enter Your Region Name"
                  />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="city"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>City / Town</p>
                  <Input
                    type="text"
                    {...field}
                    placeholder="Enter Your City / Town"
                  />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="street_address"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Street Address</p>
                  <Input
                    type="text"
                    {...field}
                    placeholder="Enter Your Street Address"
                  />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="postcode"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>PostCode/Zip</p>
                  <Input
                    type="text"
                    {...field}
                    placeholder="Enter Your PostCode/Zip"
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
                  <p className={styles.dialog_label}>Email Address</p>
                  <Input type="text" {...field} placeholder="Email Address" />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className={styles.dialog_content}>
                  <p className={styles.dialog_label}>Phone</p>
                  <Input type="text" {...field} placeholder="Phone Number" />
                  <p className={styles.error}>{error?.message}</p>
                </div>
              )}
            />
            {delegate.map((elem) => (
              <div key={elem} className={styles.delegate}>
                <p className={styles.delegate_title}>Attendee {elem}</p>
                <Controller
                  name={`attendee_${elem}_first_name`}
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <div className={styles.dialog_content}>
                      <p className={styles.dialog_label}>First Name</p>
                      <Input type="text" {...field} placeholder="First Name" />
                      <p className={styles.error}>{error?.message}</p>
                    </div>
                  )}
                />
                <Controller
                  name={`attendee_${elem}_job_title`}
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <div className={styles.dialog_content}>
                      <p className={styles.dialog_label}>Job Title</p>
                      <Input type="text" {...field} placeholder="Job Title" />
                      <p className={styles.error}>{error?.message}</p>
                    </div>
                  )}
                />
                <Controller
                  name={`attendee_${elem}_email_address`}
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <div className={styles.dialog_content}>
                      <p className={styles.dialog_label}>Email Address</p>
                      <Input
                        type="text"
                        {...field}
                        placeholder="Email Address"
                      />
                      <p className={styles.error}>{error?.message}</p>
                    </div>
                  )}
                />
              </div>
            ))}
            <div className={styles.order_type_block}>
              <Controller
                name="order_type"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div className={styles.dialog_content}>
                    <div className={styles.inp}>
                      <input
                        {...field}
                        type="radio"
                        value="Visa or Mastercard"
                      />
                      <div className={styles.labell}>
                        <p className={styles.labell_name}>Visa or Mastercard</p>
                        <div className={styles.cards_logo}>
                          <div>
                            <Image
                              src="/MasterCardLogo.png"
                              width={48}
                              height={28}
                            />
                          </div>
                          <div>
                            <Image
                              src="/VisaCardLogo.png"
                              width={38}
                              height={30}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              />
              <Controller
                name="order_type"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div className={styles.dialog_content}>
                    <div className={styles.inp}>
                      <input
                        {...field}
                        type="radio"
                        value="Invoice - Direct Bank Transfer"
                        className={styles.radio}
                      />
                      <div className={styles.labell}>
                        <p className={styles.labell_name}>
                          Invoice - Direct Bank Transfer
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              />
              <Controller
                name="order_type"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div className={styles.dialog_content}>
                    <div className={styles.inp}>
                      <input
                        {...field}
                        type="radio"
                        value="American Express"
                        defaultChecked
                        className={styles.radio}
                      />
                      <div className={styles.labell}>
                        <p className={styles.labell_name}>American Express</p>
                        <div>
                          <Image
                            src="/AmericanExpressLogo.png"
                            width={38}
                            height={38}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              />
              <div className={styles.order_type_block_bottom}>
                <p className={styles.privacy}>
                  I´ve read and accept the terms and conditions as well as the{' '}
                  <span className={styles.liner} onClick={goPrivacy}>
                    privacy policy.
                  </span>
                </p>
              </div>
            </div>

            <div className={styles.btn}>
              <ButtonComp title="Submit" big type />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
