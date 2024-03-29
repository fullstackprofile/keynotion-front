import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Input } from '../Input/Input'
import { ButtonComp } from '../Button/Button'
import { Title } from '../TItle/Title'
import { loadStripe } from '@stripe/stripe-js'

// import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import styles from './CheckOutBody.module.css'
import { Controller, useForm } from 'react-hook-form'
import { Country } from '../Country/Country'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { addOrders } from '../../store/ordersSlice'
import { formatToReqData, formatToReqDataOrderItems } from '../../Helpers/help'
import { PaymnetModal } from '../PaymentModal/PaymentModal'
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'

export const CheckOutBody = () => {
  const user = useSelector((state) => state.user.user)
  const data = useSelector((state) => state.cards.card)
  const [openLogin, setOpenLogin] = useState(false)
  const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')
  // const orders = useSelector((state) => state.orders.orders)
  // const address = useSelector((state) => state.address.address)
  const router = useRouter()
  const dispatch = useDispatch()
  const [curentData, setCurentData] = useState()
  const [curentDataItems, setCurentDataItems] = useState(data)
  const goPrivacy = () => router.push('/DataPrivacy')

  useEffect(() => {
    setCurentData(data[0]?.data.items)
  }, [])

  useEffect(() => {
    setCurentDataItems(data[0]?.data)
  }, [])

  const { control, handleSubmit, register, reset } = useForm({
    defaultValues: {
      payment_method: 'Invoice - Direct Bank Transfer',
    },
  })

  const handleClose = () => {
    setOpenLogin(false)
  }

  const onSubmit = async (dataForm) => {
    if (dataForm.payment_method === 'Visa or Mastercard') {
      setOpenLogin(true)
    }
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
      Subtotal: curentDataItems?.subtotal,
      VAT: curentDataItems?.vat.toString(),
      Total: curentDataItems?.total,
      order_items: formatToReqDataOrderItems(curentData),
      delegaters: formatToReqData(dataForm, curentData),
    }
    if (user) {
      orderStore.user_id = user.id
    }

    const { data } = await axios.post(
      'http://laratest.key-notion.com/api/order/store',
      orderStore
    )
    if (data) {
      dispatch(addOrders(data))
    }

    if (dataForm.payment_method === 'Invoice - Direct Bank Transfer') {
      router.push(`/DirectBankTransfer/${data[0]?.data}`)
    }
  }

  return (
    <div className={styles.checkOutBody}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p className={styles.form_title}>Company Details</p>
          <Controller
            rules="string"
            {...register('first_name', {
              required: 'please Enter your First Name',
            })}
            name="first_name"
            control={control}
            // defaultValue={user.first_name}
            render={({
              field: { onChange, onBlur, name },
              fieldState: { error },
            }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_label}>First Name</p>
                <Input
                  type="text"
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="First Name"
                />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <Controller
            rules="string"
            {...register('last_name', {
              required: 'please Enter your Last Name',
            })}
            name="last_name"
            control={control}
            // defaultValue={curentUser.last_name}
            render={({
              field: { onChange, onBlur, name },
              fieldState: { error },
            }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_label}>Last Name</p>
                <Input
                  type="text"
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Last Name"
                />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <Controller
            rules="string"
            {...register('company_name', {
              required: 'please Enter your Company Name',
            })}
            name="company_name"
            control={control}
            render={({
              field: { onChange, onBlur, name },
              fieldState: { error },
            }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_label}>Company Name</p>
                <Input
                  type="text"
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Company Name"
                />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <Controller
            rules="string"
            {...register('country_region', {
              required: 'please Enter your Country',
            })}
            name="country_region"
            control={control}
            render={({
              field: { onChange, onBlur, name, value },
              fieldState: { error },
            }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_label}>Country</p>
                <Country
                  value={value}
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <Controller
            name="town_city"
            rules="string"
            // defaultValue={address.data?.[0]?.town_city}
            {...register('town_city', {
              required: 'please Enter Your City Name',
            })}
            control={control}
            render={({
              field: { onChange, onBlur, name },
              fieldState: { error },
            }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_label}>City / Town</p>
                <Input
                  type="text"
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Enter Your City / Town"
                />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <Controller
            name="street_address"
            rules="string"
            // defaultValue={address.data?.[0]?.street_address}
            {...register('street_address', {
              required: 'please Enter Street Address',
            })}
            control={control}
            render={({
              field: { onChange, onBlur, name },
              fieldState: { error },
            }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_label}>Street Address</p>
                <Input
                  type="text"
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Enter Your Street Address"
                />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <Controller
            name="postcode_zip"
            rules="string"
            // defaultValue={address.data?.[0]?.postcode_zip}
            {...register('postcode_zip', {
              required: 'please Enter PostCode/ZIP',
            })}
            control={control}
            render={({
              field: { onChange, onBlur, name },
              fieldState: { error },
            }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_label}>PostCode/Zip</p>
                <Input
                  type="text"
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Enter Your PostCode/Zip"
                />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <Controller
            name="email"
            rules="string"
            // defaultValue={curentUser.email}
            {...register('email', {
              required: 'please Enter your Email',
              minLength: 1,
            })}
            control={control}
            render={({
              field: { onChange, onBlur, name },
              fieldState: { error },
            }) => (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_label}>Email Address</p>
                <Input
                  type="text"
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Email Address"
                />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
          <Controller
            name="phone"
            rules="string"
            // defaultValue={curentUser.phone}
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
        {data[0]?.data?.items?.map((item, ind) => {
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
                      {...register(`full_name-${index + ind}`, {
                        required: 'please Enter your Full Name',
                      })}
                      name={`full_name-${index + ind}`}
                      control={control}
                      render={({
                        field: { onChange, onBlur, name },
                        fieldState: { error },
                      }) => (
                        <div className={styles.dialog_content}>
                          <p className={styles.dialog_label}>Full Name</p>
                          <Input
                            type="text"
                            name={name}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder="Full Name"
                          />
                          <p className={styles.error}>{error?.message}</p>
                        </div>
                      )}
                    />
                    <Controller
                      rules="string"
                      {...register(`job_title-${index + ind}`, {
                        required: 'please Enter your Job Title',
                      })}
                      name={`job_title-${index + ind}`}
                      control={control}
                      render={({
                        field: { onChange, onBlur, name },
                        fieldState: { error },
                      }) => (
                        <div className={styles.dialog_content}>
                          <p className={styles.dialog_label}>Job Title</p>
                          <Input
                            type="text"
                            name={name}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder="Job Title"
                          />
                          <p className={styles.error}>{error?.message}</p>
                        </div>
                      )}
                    />
                    <Controller
                      rules="string"
                      {...register(`email-${index + ind}`, {
                        required: 'please Enter your delegate Email',
                      })}
                      name={`email-${index + ind}`}
                      control={control}
                      render={({
                        field: { onChange, onBlur, name },
                        fieldState: { error },
                      }) => (
                        <div className={styles.dialog_content}>
                          <p className={styles.dialog_label}>Email Address</p>
                          <Input
                            type="text"
                            name={name}
                            onChange={onChange}
                            onBlur={onBlur}
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
                render={({
                  field: { onChange, onBlur, name },
                  fieldState: { error },
                }) => (
                  <div className={styles.dialog_content}>
                    <div className={styles.inp}>
                      <input
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
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
                render={({
                  field: { onChange, onBlur, name },
                  fieldState: { error },
                }) => (
                  <div className={styles.dialog_content}>
                    <div className={styles.inp}>
                      <input
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
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
      <Elements stripe={stripePromise}>
        <PaymnetModal open={openLogin} handleClose={handleClose} />
      </Elements>
    </div>
  )
}
