import React from 'react'
import ReactSelect from 'react-select'
import axios from 'axios'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import { Checkbox, Dialog } from '@mui/material'
import { ButtonComp } from '../Button/Button'
import { Input } from '../Input/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import styles from './SponsorshipModal.module.css'
import { TextArea } from '../TextArea/TextArea'
import { useSelector } from 'react-redux'

export const SponsorshipModal = ({
  open,
  handleClose,
  title,
  subtitle,
  SponsorshipSchema,
  options,
  Learn_about_us,
  Learn_about_us_placeholder,
  your_way_get_us,
  comment,
  Presentation,
  check,
  comments,
}) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(SponsorshipSchema),
  })
  const user = useSelector((state) => state.user.user)

  const onSubmit = async (dataSponsor) => {
    if (title === 'Brochure') {
      const dataToSendBrochure = {
        name: dataSponsor.name,
        surname: dataSponsor.surname,
        company_name: dataSponsor.company_name,
        job_title: dataSponsor.job_title,
        phone: dataSponsor.phone_number,
        corporate_email: dataSponsor.corporate_email,
        country: dataSponsor.country,
        summit_name: dataSponsor.summit_name,
        comment: dataSponsor.comments,
        learn: dataSponsor.Learn_about_us.value,
        other: dataSponsor.your_way_get_us || 'ok',
      }
      const { data } = await axios.post(
        'http://laratest.key-notion.com/api/brochure',
        dataToSendBrochure
      )
      if (data) {
        handleClose()
      }
    }
    if (title === 'Apply') {
      const dataToSendSpeaker = {
        name: dataSponsor.name,
        surname: dataSponsor.surname,
        company_name: dataSponsor.company_name,
        job_title: dataSponsor.job_title,
        phone: dataSponsor.phone_number,
        corporate_email: dataSponsor.corporate_email,
        country: dataSponsor.country,
        summit_name: dataSponsor.summit_name,
        presentation_proposal: dataSponsor.presentation,
        learn: dataSponsor.Learn_about_us.value,
        other: dataSponsor.your_way_get_us || 'ok',
      }
      const { data } = await axios.post(
        'http://laratest.key-notion.com/api/apply_speaker',
        dataToSendSpeaker
      )
      if (data) {
        handleClose()
      }
    }
    if (title === 'Sponsorship') {
      const dataToSendSponsor = {
        name: dataSponsor.name,
        surname: dataSponsor.surname,
        company_name: dataSponsor.company_name,
        job_title: dataSponsor.job_title,
        phone_number: dataSponsor.phone_number,
        corporate_email: dataSponsor.corporate_email,
        country: dataSponsor.country,
        summit_name: dataSponsor.summit_name,
        comments: dataSponsor.comments,
        package_name: dataSponsor.package_name?.value,
        confirm: dataSponsor.confirm,
      }
      const { data } = await axios.post(
        'http://laratest.key-notion.com/api/sponsorship',
        dataToSendSponsor
      )
      if (data) {
        handleClose()
      }
    }
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
            width: '80%',
            maxHeight: '900px',
          },
        }}
      >
        <div className={styles.dialog_head}>
          <div className={styles.dialog_close} onClick={handleClose}>
            <Image src="/closeIcon.png" width={36} height={36} />
          </div>
        </div>
        <div className={styles.dialog_wrapper}>
          <div className={styles.dialog_left}>
            <div className={styles.left_title_block}>
              <p className={styles.left_title}>{title} </p>
              <span className={styles.noliner}>{subtitle}</span>
            </div>

            <div className={styles.left_img}>
              <Image src="/SponsorshipReq.png" width={388} height={401} />
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.dialog_right}
          >
            <div className={styles.dialog_filds}>
              <div className={styles.filds_half}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue={user.first_name}
                  render={({ field, fieldState: { error } }) => (
                    <div className={styles.dialog_content_}>
                      <Input type="text" {...field} placeholder="Name" />
                      <p className={styles.error}>{error?.message}</p>
                    </div>
                  )}
                />
                <Controller
                  name="surname"
                  control={control}
                  defaultValue={user.last_name}
                  render={({ field, fieldState: { error } }) => (
                    <div className={styles.dialog_content_}>
                      <Input type="text" {...field} placeholder="Surname" />
                      <p className={styles.error}>{error?.message}</p>
                    </div>
                  )}
                />
                <Controller
                  name="company_name"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <div className={styles.dialog_content_}>
                      <Input
                        type="text"
                        {...field}
                        placeholder="Company Name"
                      />
                      <p className={styles.error}>{error?.message}</p>
                    </div>
                  )}
                />
                <Controller
                  name="job_title"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <div className={styles.dialog_content_}>
                      <Input type="text" {...field} placeholder="Job Title" />
                      <p className={styles.error}>{error?.message}</p>
                    </div>
                  )}
                />
                <Controller
                  name="phone_number"
                  control={control}
                  defaultValue={user.phone}
                  render={({ field, fieldState: { error } }) => (
                    <div className={styles.dialog_content_}>
                      <Input
                        type="text"
                        {...field}
                        placeholder="Phone Number"
                      />
                      <p className={styles.error}>{error?.message}</p>
                    </div>
                  )}
                />
                <Controller
                  name="corporate_email"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <div className={styles.dialog_content_}>
                      <Input
                        type="text"
                        {...field}
                        placeholder="Corporate Email"
                      />
                      <p className={styles.error}>{error?.message}</p>
                    </div>
                  )}
                />
              </div>
              <div className={styles.dialog_filds_}>
                <Controller
                  name="country"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <div className={styles.dialog_content}>
                      <Input type="text" {...field} placeholder="Country" />
                      <p className={styles.error}>{error?.message}</p>
                    </div>
                  )}
                />
                <Controller
                  name="summit_name"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <div className={styles.dialog_content}>
                      <Input type="text" {...field} placeholder="Summit Name" />
                      <p className={styles.error}>{error?.message}</p>
                    </div>
                  )}
                />
                {Presentation && (
                  <Controller
                    name="presentation"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <div className={styles.dialog_content}>
                        <TextArea
                          litle={true}
                          placeholder="Proposal"
                          {...field}
                        />
                        <p className={styles.error}>{error?.message}</p>
                      </div>
                    )}
                  />
                )}
                {comments && (
                  <Controller
                    name="comments"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <div className={styles.dialog_content}>
                        <TextArea
                          litle={true}
                          placeholder="Comments"
                          {...field}
                        />
                        <p className={styles.error}>{error?.message}</p>
                      </div>
                    )}
                  />
                )}
                <Controller
                  name={Learn_about_us ? Learn_about_us : 'package_name'}
                  control={control}
                  render={({ value, field, fieldState: { error } }) => (
                    <div className={styles.dialog_content}>
                      <ReactSelect
                        placeholder={
                          Learn_about_us_placeholder
                            ? Learn_about_us_placeholder
                            : 'Package Name'
                        }
                        {...field}
                        options={options}
                        className={styles.selecttt}
                      />
                      <p className={styles.error}>{error?.message}</p>
                    </div>
                  )}
                />
                {comment && (
                  <Controller
                    name="comments"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <div className={styles.dialog_content}>
                        <TextArea placeholder="Comments" {...field} />
                        <p className={styles.error}>{error?.message}</p>
                      </div>
                    )}
                  />
                )}

                {your_way_get_us && (
                  <Controller
                    name="your_way_get_us"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <div className={styles.dialog_content}>
                        <Input
                          type="text"
                          {...field}
                          placeholder="If Others, Please Specify Below"
                        />
                        <p className={styles.error}>{error?.message}</p>
                      </div>
                    )}
                  />
                )}
                {check && (
                  <Controller
                    name="confirm"
                    control={control}
                    render={({ field }) => (
                      <div className={styles.remember}>
                        <Checkbox {...field} />
                        <p className={styles.remember_label}>
                          I Confirm That I Have Read And Agreed To Terms &
                          Conditions And Privacy Policy
                        </p>
                      </div>
                    )}
                  />
                )}
              </div>
            </div>

            <div className={styles.dialog_content_btn}>
              <div className={styles.btn}>
                <ButtonComp title="Send" big />
              </div>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  )
}
