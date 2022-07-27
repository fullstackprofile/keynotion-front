import React from 'react'

import styles from "./CouponForm.module.css"

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from 'react-hook-form'
import { Input } from '../../Input/Input'
import { ButtonComp } from '../../Button/Button'

const CardContentsSchema = yup.object().shape({
    coupon: yup.string().required("please Enter Coupont Code"),
});

export const CouponForm = () => {

    const { control, handleSubmit} = useForm({
        
        resolver: yupResolver(CardContentsSchema)
      });
    
    
      const onSubmit = handleSubmit(data => {
        console.log(data);
      });
    
  return (
    <div className={styles.coupon_form_block} >
        <div className={styles.coupon_body}>
            <p className={styles.coupon_body_title}>If you have a coupon code, please apply it below.</p>
                <form onSubmit={onSubmit}>
                    <div className={styles.coupon_form}>
                        <div className={styles.coupon_form_input}>
                            <Controller
                                      name="coupon"
                                      control={control}
                                      render={({ field,fieldState: {error} }) =>  
                                      <div className={styles.dialog_content}>
                                      <Input type="text" {...field} placeholder="Coupon Code"/> 
                                     {error?.message && <p className={styles.error}>{error?.message}</p>}
                                      </div>}
                            />
                        </div>
                                <div className={styles.btn}>
                                    <ButtonComp title="Apply Coupon"  type="submit"/>
                                </div>
                    </div>
                </form>
        </div>
    </div>
  )
}
