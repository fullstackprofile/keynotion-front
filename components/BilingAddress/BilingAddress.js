import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ButtonComp } from '../Button/Button'
import { Input } from '../Input/Input'
import styles from './BilingAddress.module.css'
import { Country } from '../Country/Country'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
// import { addOrders } from '../../store/ordersSlice'
import { parseCookies } from 'nookies'
import { addAddress } from '../../store/addressSlice'

export const BilingAddress = ({ user }) => {
  const ChangeSchema = yup.object().shape({
    country_region: yup.string().required('please Enter Your Country Name'),
    town_city: yup.string().required('please Enter Your City Name'),
    street_address: yup.string().required('please Enter Street Address'),
    postcode_zip: yup.string().required('please Enter PostCode/ZIP'),
  })
  const dispatch = useDispatch()
  const cookie = parseCookies('token')
  const address = useSelector((state) => state.address.address)
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(ChangeSchema),
  })
  const config = {
    headers: { Authorization: `Bearer ${cookie.token}` },
  }

  const onSave = async (dataForm) => {
    const dataToSend = {
      country_region: dataForm.country_region,
      town_city: dataForm.town_city,
      street_address: dataForm.street_address,
      postcode_zip: dataForm.postcode_zip,
    }
    const { data } = await axios.post(
      `http://laratest.key-notion.com/api/update/billing?user_id=${user.id}`,
      dataToSend,
      config
    )
    if (data) {
      dispatch(addAddress(data))
    }
  }

  return (
    <div className={styles.address_body}>
      <div className={styles.address_body_heading}>
        <p className={styles.address_title}>Billing Address</p>
        <p className={styles.address_subTitle}>
          The following addresses will be used on the checkout page by default.
        </p>
        <div className={styles.row}></div>
      </div>
      <div className={styles.address_body_form}>
        <form onSubmit={handleSubmit(onSave)}>
          <Controller
            name="country_region"
            control={control}
            defaultValue={address.data?.[0]?.country_region}
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
            control={control}
            defaultValue={address.data?.[0]?.town_city}
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
            defaultValue={address.data?.[0]?.street_address}
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
            defaultValue={address.data?.[0]?.postcode_zip}
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
          <div className={styles.dialog_content_btn}>
            <div className={styles.btn}>
              <ButtonComp title="Save Changes" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
