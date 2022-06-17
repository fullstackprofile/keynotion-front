import { Checkbox, Dialog } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Input } from '../Input/Input'

import { ButtonComp } from '../Button/Button'

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from 'react-hook-form'

import styles from "./Login.module.css"


const LoginSchema = yup.object().shape({
    Email: yup.string().email().required("please Enter your Email"),
    Password: yup.string().required("please Enter your Password"),
  });



export const Login = ({open,handleClose,handleClickOpenForgot}) => {


    const { control, handleSubmit } = useForm({
        defaultValues:{
            Checked : false
        },
        resolver: yupResolver(LoginSchema)
      });
    
    
      const onSubmit = data => {
        console.log(data);
      };


  return (
    <>
        <Dialog open={open} onClose={handleClose} >
          <div className={styles.dialog_head}>
          <p className={styles.dialog_title}>Log In</p>
          <div className={styles.dialog_close} onClick={handleClose}>
            <Image src="/closeIcon.png" width={36} height={36}/>
          </div>
          </div>
       <form onSubmit={handleSubmit(onSubmit)}>
       <Controller
        name="Email"
        control={control}
        render={({ field, fieldState: {error} }) =>  
        <div className={styles.dialog_content}>
          <p className={styles.dialog_label}>Username or Email Address</p>
          <Input type="text" {...field}/> 
          <p className={styles.error}>{error?.message}</p>
         </div>}
      />
      <Controller
        name="Password"
        control={control}
        render={({ field,fieldState: {error} }) =>  
        <div className={styles.dialog_content_pass}>
          <p className={styles.dialog_label}>Password</p>
          <Input type="text" showPass {...field}/> 
          <p className={styles.error}>{error?.message}</p>
         </div>}
      />
      <Controller
        name="Checked"
        control={control}
        render={({ field }) =>  
        <div className={styles.remember}>
        <Checkbox  {...field}/>
        <p className={styles.remember_label}>Remember me</p>
        </div>}
      />
          
   
          <div className={styles.dialog_content_btn}>
            <div className={styles.btn}>
              <ButtonComp title="Log In" big/>
            </div>
            
            <div className={styles.forget}>
              <p className={styles.forget_title} onClick={handleClickOpenForgot} >Forgot Password?</p>
            </div>
           
          </div>
        </form>
      </Dialog>
    </>
  )
}
