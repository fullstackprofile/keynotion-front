import { Dialog } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { ButtonComp } from '../Button/Button';
import { Input } from '../Input/Input';

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./SignUp.module.css"



const RegisterSchema = yup.object().shape({
    firstName: yup.string().required("please Enter your First Name"),
    lastName: yup.string().required("please Enter your Last Name"),
    PhoneNumber: yup.number().required("please Enter your Phone Number"),
    Email: yup.string().email().required("please Enter your Email"),
    Country: yup.string().required("please Enter your Country"),
    Password: yup.string().required("please Enter your Password"),
    Password_2: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('Password')], 'Your passwords do not match.')
  });


export const SignUp = ({open,handleClose}) => {

    
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(RegisterSchema)
  });


  const onSubmit = data => {
    console.log(data);
  };


  return (
    <>
    <Dialog open={open} onClose={handleClose} >
          <div className={styles.dialog_head}>
          <p className={styles.dialog_title}>Sign Up</p>
          <div className={styles.dialog_close} onClick={handleClose}>
            <Image src="/closeIcon.png" width={36} height={36}/>
          </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
       <div className={styles.dialog_filds}>
       <Controller
        name="firstName"
        control={control}
        render={({ field,fieldState: {error} }) =>  
        <div className={styles.dialog_content}>
          <p className={styles.dialog_label}>First Name</p>
          <Input type="text" {...field}/> 
          <p className={styles.error}>{error?.message}</p>
         </div>}
         
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field,fieldState: {error} }) =>  <div className={styles.dialog_content}>
        <p className={styles.dialog_label}>Last Name</p>
        <Input type="text"  {...field}/> 
        <p className={styles.error}>{error?.message}</p>
         </div>}
      />
      <Controller
        name="PhoneNumber"
        control={control}
        render={({ field,fieldState: {error} }) =>  <div className={styles.dialog_content}>
        <p className={styles.dialog_label}>Phone Number</p>
        <Input type="text"  {...field}/> 
        <p className={styles.error}>{error?.message}</p>
         </div>}
      />
      <Controller
        name="Email"
        control={control}
        render={({ field,fieldState: {error} }) =>  <div className={styles.dialog_content}>
        <p className={styles.dialog_label}>Email</p>
        <Input type="text"  {...field}/> 
        <p className={styles.error}>{error?.message}</p>
         </div>}
      />
      <Controller
        name="Country"
        control={control}
        render={({ field,fieldState: {error} }) =>  <div className={styles.dialog_content}>
        <p className={styles.dialog_label}>Country</p>
        <Input type="text"  {...field}/> 
        <p className={styles.error}>{error?.message}</p>
         </div>}
      />
      <Controller
        name="Password"
        control={control}
        render={({ field,fieldState: {error} }) =>  <div className={styles.dialog_content}>
        <p className={styles.dialog_label}>Password</p>
        <Input type="text" showPass  {...field}/> 
        <p className={styles.error}>{error?.message}</p>
         </div>}
      />
      <Controller
        name="Password_2"
        control={control}
        render={({ field,fieldState: {error} }) =>  <div className={styles.dialog_content}>
        <p className={styles.dialog_label}>Repet Password</p>
        <Input type="text" showPass  {...field}/> 
        <p className={styles.error}>{error?.message}</p>
         </div>}
      />
       </div>
         
         
          <div className={styles.dialog_content_btn}>
            <div className={styles.btn}>
              <ButtonComp title="Sign Up" big type/>
            
            </div>
            
          </div>
          </form>
      </Dialog>
    </>
  )
}
