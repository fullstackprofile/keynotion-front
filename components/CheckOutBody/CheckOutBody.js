import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
import { parseCookies } from 'nookies'
import { addOrders } from '../../store/ordersSlice'

const CheckOutBodysSchema = yup.object().shape({
  full_name: yup.string().required('please Enter your Full Name'),
  last_name: yup.string().required('please Enter your Last Name'),
  first_name: yup.string().required('please Enter your First Name'),
  job_title: yup.string().required('please Enter your Job Title'),
  company_name: yup.string().required('please Enter your Company Name'),
  country_region: yup.string().required('please Enter your Country'),
  town_city: yup.string().required('please Enter Your City Name'),
  street_address: yup.string().required('please Enter Street Address'),
  postcode_zip: yup.string().required('please Enter PostCode/ZIP'),
  email: yup.string().email().required('please Enter your Email'),
  phone: yup.string().required('please Enter your Phone Number'),
  payment_method: yup.string().required(),
})

export const CheckOutBody = ({
  title,
  count,
  type,
  other_type,
  price,
  data,
  ticket_id,
}) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const cart_id = parseCookies('cart_id')
  const goPrivacy = () => router.push('/DataPrivacy')

  let delegate = []
  let newData = data

  for (let i = 1; i <= count; i++) {
    delegate.push(i)
  }

  useEffect(() => {
    reset(user)
  }, [user])

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(CheckOutBodysSchema),
    defaultValues: {
      payment_method: 'Invoice - Direct Bank Transfer',
    },
  })

  const onSubmit = async (dataForm) => {
    const orderStore = {
      first_name: dataForm.first_name,
      last_name: dataForm.last_name,
      company_name: dataForm.company_name,
      country_region: dataForm.country_region,
      town_city: dataForm.town_city,
      street_address: dataForm.street_address,
      postcode_zip: dataForm.postcode_zip,
      email: dataForm.email,
      phone: dataForm.phone,
      payment_method: dataForm.payment_method,
      Subtotal: newData.data.subtotal,
      VAT: newData.data.vat.toString(),
      Total: newData.data.total,
      order_items: [
        {
          ticket_id: ticket_id,
          ticket_title: title,
          quantity: count,
          price: price,
        },
      ],
      delegaters: [
        {
          full_name: dataForm.full_name,
          job_title: dataForm.job_title,
          email: dataForm.email,
        },
      ],
    }
    const { data } = await axios.post(
      'http://laratest.key-notion.com/api/order/store',
      orderStore
    )
    if (data) {
      dispatch(addOrders(data))
    }
    if (dataForm.payment_method == 'Invoice - Direct Bank Transfer') {
      router.push(`/DirectBankTransfer/${data.data}`)
    }
    if (dataForm.payment_method == 'Visa or Mastercard') {
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
              name="country_region"
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
              name="town_city"
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
              name="postcode_zip"
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
                  name={'full_name'}
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <div className={styles.dialog_content}>
                      <p className={styles.dialog_label}>Full Name</p>
                      <Input type="text" {...field} placeholder="Full Name" />
                      <p className={styles.error}>{error?.message}</p>
                    </div>
                  )}
                />
                <Controller
                  name={'job_title'}
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
                  name={'email'}
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
                name="payment_method"
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
                name="payment_method"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div className={styles.dialog_content}>
                    <div className={styles.inp}>
                      <input
                        {...field}
                        type="radio"
                        value="Invoice - Direct Bank Transfer"
                        className={styles.radio}
                        defaultChecked
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
              {/* <Controller
                name="payment_method"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <div className={styles.dialog_content}>
                    <div className={styles.inp}>
                      <input
                        {...field}
                        type="radio"
                        value="American Express"
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
              /> */}
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
