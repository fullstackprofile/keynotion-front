// import React, { useEffect } from 'react'
// import { Controller, useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'
// import { ButtonComp } from '../Button/Button'
// import { Input } from '../Input/Input'
// import styles from './KeynotionPayment.module.css'
// import Image from 'next/image'

// export const KeynotionPayment = ({ user }) => {
//   const ChangeSchema = yup.object().shape({
//     first_name: yup.string().required('please Enter Your First Name'),
//     last_name: yup.string().required('please Enter Your Last Name'),
//     phone: yup.number().required('please Enter Your Phone Number'),
//     email: yup.string().email().required('please Enter Your Email'),
//     current_password: yup
//       .string()
//       .required('please Enter Your Current Password'),
//     new_password: yup.string(),
//     new_password_confirmation: yup
//       .string()
//       .oneOf([yup.ref('new_password')], 'Your passwords do not match.'),
//   })

//   const { control, handleSubmit, reset } = useForm({
//     resolver: yupResolver(ChangeSchema),
//   })

//   const onSave = (dataSend) => {
//     console.log(dataSend)
//   }

//   useEffect(() => {
//     reset(user)
//   }, [user])

//   return (
//     <div className={styles.accountDetails_body}>
//       <div className={styles.left_img}>
//         <Image src="/paymentUser.png" width={388} height={401} />
//       </div>
//       <form onSubmit={handleSubmit(onSave)}>
//         <div className={styles.dialog_filds}>
//           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <Controller
//               name="price"
//               control={control}
//               render={({ field, fieldState: { error } }) => (
//                 <div className={styles.dialog_contentPaymentPrice}>
//                   <Input type="text" {...field} placeholder="Price" />
//                   <p className={styles.error}>{error?.message}</p>
//                 </div>
//               )}
//             />
//             <Controller
//               name="order_type"
//               control={control}
//               render={({ field, fieldState: { error } }) => (
//                 <div style={{ display: 'flex' }}>
//                   <div
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       marginRight: '30px',
//                     }}
//                   >
//                     <input {...field} type="radio" value="Visa" />
//                     <Image
//                       sx={{
//                         '& .MuiSvgIcon-root': {
//                           fontSize: 28,
//                         },
//                       }}
//                       src="/VisaCardLogo.png"
//                       width={60}
//                       height={46}
//                     />
//                   </div>
//                   <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <input {...field} type="radio" value="MasterCard" />
//                     <Image
//                       sx={{
//                         '& .MuiSvgIcon-root': {
//                           fontSize: 36,
//                         },
//                       }}
//                       src="/MasterCardLogo.png"
//                       width={60}
//                       height={46}
//                     />
//                   </div>
//                 </div>
//               )}
//             />
//           </div>
//           <Controller
//             name="card_holder_name "
//             control={control}
//             render={({ field, fieldState: { error } }) => (
//               <div className={styles.dialog_content}>
//                 <p className={styles.dialog_label}>Card Holder Number</p>
//                 <Input type="text" {...field} />
//                 <p className={styles.error}>{error?.message}</p>
//               </div>
//             )}
//           />
//           <div className={styles.passwordss}>
//             <div className={styles.passwordss_block}>
//               <Controller
//                 name="card_number"
//                 control={control}
//                 render={({ field, fieldState: { error } }) => (
//                   <div className={styles.dialog_content}>
//                     <p className={styles.dialog_label}>Card Number</p>
//                     <Input
//                       type="text"
//                       placeholder="xxxx xxxx xxxx xxxx"
//                       {...field}
//                     />
//                     <p className={styles.error}>{error?.message}</p>
//                   </div>
//                 )}
//               />
//             </div>
//           </div>
//         </div>
//         <div className={styles.half}>
//           <div className={styles.half_item}>
//             <Controller
//               name="expiry_date"
//               control={control}
//               render={({ field, fieldState: { error } }) => (
//                 <div className={styles.dialog_content}>
//                   <p className={styles.dialog_label}>Expiry Date</p>
//                   <Input type="text" {...field} placeholder="MM / YY" />
//                   <p className={styles.error}>{error?.message}</p>
//                 </div>
//               )}
//             />
//           </div>
//           <div className={styles.half_item}>
//             <Controller
//               name="security_code"
//               control={control}
//               render={({ field, fieldState: { error } }) => (
//                 <div className={styles.dialog_content}>
//                   <p className={styles.dialog_label}>Security Code</p>
//                   <Input type="text" {...field} placeholder="CVC" />
//                   <p className={styles.error}>{error?.message}</p>
//                 </div>
//               )}
//             />
//           </div>
//         </div>

//         <div className={styles.dialog_content_btn}>
//           <div className={styles.btn}>
//             <ButtonComp title="Pay" />
//           </div>
//         </div>
//       </form>
//     </div>
//   )
// }

import { memo, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Input } from '../Input/Input'

import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import { ButtonComp } from '../Button/Button'
import styles from './KeynotionPayment.module.css'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const AddPaymentMethod = () => {
  const [loading, setLoading] = useState(false)
  const [holderName, setHolderName] = useState('')
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()

  const ForgotPassSchema = yup.object().shape({
    holderName: yup.string().required('please Enter your holderName'),
    payment_method: yup.string().required(),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(ForgotPassSchema),
  })

  useEffect(() => {
    elements?.update({ locale: 'en' })
  }, [elements])
  console.log(holderName)

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      if (elements == null) {
        return
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: holderName,
        },
      })

      // if (error) {
      //   setLoading(false)
      // } else {
      //   Inertia.post(
      //     route('dashboard.payment-methods.store'),
      //     {
      //       payment_method: paymentMethod.id,
      //     },
      //     {
      //       onSuccess: () => {
      //         console.log('ok')
      //       },
      //       onError: (errors) => {
      //         console.log(errors)
      //       },
      //       onFinish: () => {
      //         setLoading(false)
      //       },
      //     }
      //   )
      // }
    } catch (e) {
      console.log(e?.message, 'error')
    }
  }

  return (
    <div className={styles.accountDetails_body}>
      <div className={styles.left_img}>
        <Image src="/paymentUser.png" width={388} height={401} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.priceWrapper}>
          <div className={styles.priceBlock}>
            <p>Price: €{94000}</p>
          </div>
          <div className={styles.cardWrapper}>
            <Controller
              name="order_type"
              control={control}
              render={({ ref, field, fieldState: { error } }) => (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '30px',
                  }}
                >
                  <input inputRef={ref} {...field} type="radio" value="Visa" />
                  <Image
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 28,
                      },
                    }}
                    src="/VisaCardLogo.png"
                    width={60}
                    height={46}
                  />
                </div>
              )}
            />
            <Controller
              name="order_type"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '30px',
                  }}
                >
                  <input {...field} type="radio" value="Visa" />
                  <Image
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 28,
                      },
                    }}
                    src="/VisaCardLogo.png"
                    width={60}
                    height={46}
                  />
                </div>
              )}
            />
            <Controller
              name="order_type"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '30px',
                  }}
                >
                  <input {...field} type="radio" value="Visa" />
                  <Image
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 36,
                      },
                    }}
                    src="/MasterCardLogo.png"
                    width={60}
                    height={46}
                  />
                </div>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className={styles.text}>Card Holder Number</p>
          <Controller
            name="holderName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className={styles.dialog_content}>
                <Input type="text" {...field} />
                <p className={styles.error}>{error?.message}</p>
              </div>
            )}
          />
        </div>
        <p className={styles.text}>Card Number</p>
        <div className={styles.cardNumber}>
          <CardNumberElement
            options={{
              placeholder: 'xxxx xxxx xxxx xxxx',
              style: {
                base: {
                  fontSize: '1.125rem',
                  lineHeight: '1.75rem',
                },
              },
              classes: {
                base: 'px-6 py-4 shadow-simpleCard rounded-xl text-textLighter',
              },
            }}
          />
        </div>

        <div className={styles.extryDateBlock}>
          <div>
            <p className={styles.text}>Expiry Date</p>
            <div className={styles.date}>
              <CardExpiryElement
                options={{
                  style: {
                    base: {
                      fontSize: '1.125rem',
                      lineHeight: '1.75rem',
                    },
                  },
                  classes: {
                    base: 'px-6 py-4 shadow-simpleCard rounded-xl text-textLighter',
                  },
                }}
              />
            </div>
          </div>
          <div>
            <p className={styles.text}>Security Code</p>
            <div className={styles.date}>
              <CardCvcElement
                options={{
                  placeholder: 'CVC',
                  style: {
                    base: {
                      fontSize: '1.125rem',
                      lineHeight: '1.75rem',
                    },
                  },
                  classes: {
                    base: 'px-6 py-4 shadow-simpleCard rounded-xl text-textLighter',
                  },
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.btnWrapper}>
          <div className={styles.btn}>
            <ButtonComp
              title="Pay"
              big
              disabled={!stripe || !elements || loading}
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default memo(AddPaymentMethod)
