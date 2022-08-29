import { useState, useEffect } from 'react'
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
import { addOrders } from '../../store/ordersSlice'
import { formatToReqData } from '../../Helpers/help'

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

export const CheckOutBody = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [curentData, setCurentData] = useState()
  const user = useSelector((state) => state.user.user)
  const data = useSelector((state) => state.cards.card)
  const goPrivacy = () => router.push('/DataPrivacy')

  console.log(data, 'dddddddddd')
  let a

  // data[0]?.data?.items?.map((item) => {
  //   let a =
  //   console.log(a)
  // })

  const delegate = []

  useEffect(() => {
    setCurentData(data[0]?.data)
  }, [data])

  for (let i = 1; i <= data[0]?.data; i++) {
    delegate.push(i)
  }
  const { control, handleSubmit, register } = useForm({
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
      Subtotal: curentData.subtotal,
      VAT: curentData.vat.toString(),
      Total: curentData.total,
      order_items: [
        {
          ticket_id: newOrder.ticket_id,
          quantity: newOrder.count,
        },
      ],
      delegaters: formatToReqData(dataForm),
    }

    const { data } = await axios.post(
      'http://laratest.key-notion.com/api/order/store',
      orderStore
    )
    if (data) {
      dispatch(addOrders(data))
    }
    if (dataForm.payment_method === 'Invoice - Direct Bank Transfer') {
      router.push(`/DirectBankTransfer}`)
    }
    if (dataForm.payment_method === 'Visa or Mastercard') {
      router.push(`/Payment`)
    }
  }

  return (
    <div className={styles.checkOutBody}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p className={styles.form_title}>Company Details</p>
          <Controller
            rules="string"
            {...register('first_name', { required: true })}
            name="first_name"
            control={control}
            defaultValue={user.first_name}
            render={({ field, fieldState: { error } }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_label}>First Name</p>
                <Input type="text" {...field} placeholder="First Name" />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <Controller
            rules="string"
            {...register('last_name', { required: true })}
            name="last_name"
            control={control}
            defaultValue={user.last_name}
            render={({ field, fieldState: { error } }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_label}>Last Name</p>
                <Input type="text" {...field} error placeholder="Last Name" />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <Controller
            rules="string"
            {...register('company_name', { required: true })}
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
            rules="string"
            {...register('country_region', { required: true })}
            name="country_region"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_label}>Country</p>
                <Country value={value} onChange={onChange} />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <Controller
            name="town_city"
            rules="string"
            {...register('town_city', { required: true })}
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
            rules="string"
            {...register('street_address', { required: true })}
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
            rules="string"
            {...register('postcode_zip', { required: true })}
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
            rules="string"
            defaultValue={user.email}
            {...register('email', { required: true, minLength: 1 })}
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
            rules="string"
            defaultValue={user.phone}
            {...register('phone', { required: true })}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_label}>Phone</p>
                <Input type="text" {...field} placeholder="Phone Number" />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
        </div>
        {data[0]?.data?.items?.map((item) => {
          return (
            <div key={item.ticket_id}>
              <div>
                <Title title={item?.title} />
                <p className={styles.subtitle_}>
                  {`${item?.type}${item?.other_type}`}
                </p>
                {Array.from(Array(item.count).keys()).map((elem, index) => (
                  <div key={elem} className={styles.delegate}>
                    <p className={styles.delegate_title}>Attendee {elem + 1}</p>
                    <Controller
                      rules="string"
                      {...register(`full_name-${index}`, {
                        required: true,
                      })}
                      name={`full_name-${index}`}
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <div className={styles.dialog_content}>
                          <p className={styles.dialog_label}>Full Name</p>
                          <Input
                            type="text"
                            {...field}
                            placeholder="Full Name"
                          />
                          <p className={styles.error}>{error?.message}</p>
                        </div>
                      )}
                    />
                    <Controller
                      rules="string"
                      {...register(`job_title-${index}`, { required: true })}
                      name={`job_title-${index}`}
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <div className={styles.dialog_content}>
                          <p className={styles.dialog_label}>Job Title</p>
                          <Input
                            type="text"
                            {...field}
                            placeholder="Job Title"
                          />
                          <p className={styles.error}>{error?.message}</p>
                        </div>
                      )}
                    />
                    <Controller
                      rules="string"
                      {...register(`email-${index}`, { required: true })}
                      name={`email-${index}`}
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
              </div>
            </div>
          )
        })}

        <div className={styles.forms}>
          <div className={styles.right}>
            <div className={styles.order_type_block}>
              <Controller
                rules="string"
                {...register('payment_method', { required: true })}
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
                rules="string"
                {...register('payment_method', { required: true })}
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
              <ButtonComp title="submit" big type />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
