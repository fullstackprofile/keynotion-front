import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form'
import { Title } from '../Title/Title'
import { Input } from '../Input/Input'
import { ButtonComp } from '../Button/Button'
import { TextArea } from '../TextArea/TextArea';

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./AnyQuestions.module.css"
import axios from 'axios';
import { parseCookies } from 'nookies';

const AnyQuestionsSchema = yup.object().shape({
    name: yup.string().required("please Enter your Name"),
    email: yup.string().email().required("please Enter your Email"),
    number: yup.number().required("please Enter your Phone Number"),
    message: yup.string().required("please Enter your Message"),
});

export const AnyQuestions = () => {

    const cookie=parseCookies("token")
  const config = {
        headers: { Authorization: `Bearer ${cookie.token}` }
        };

  const onSubmita = async () => {

      const users = await axios.get('http://laratest.key-notion.com/api/profile', config);
      setUser (users.data)
    }

    
    
    
    const[user,setUser]= useState()


    
    useEffect( () => {
      onSubmita()
    }, [])

    useEffect(() => {
        
        reset(user);
    }, [user]);
    

    


    const { control, handleSubmit,reset } = useForm({
        
        resolver: yupResolver(AnyQuestionsSchema)
      });
    
    
      const onSubmit = handleSubmit(data => {
        console.log(data);
      });

  return (
    <div className={styles.anyQuestions}>
        <Title title="Any?" title_2="Questions" nogradiental/>
        <div className={styles.anyQuestions_content}>
            <div className={styles.anyQuestions_form}>
                <form onSubmit={onSubmit}>
            <Controller
                name="first_name"
                control={control}
                render={({ field,fieldState: {error} }) =>  
                <div className={styles.dialog_content}>
                <Input type="text" {...field} placeholder="Name"/> 
                <p className={styles.error}>{error?.message}</p>
                </div>}
         
      />

            <Controller
                        name="email"
                        control={control}
                        render={({ field,fieldState: {error} }) =>  
                        <div className={styles.dialog_content}>
                        <Input type="text" {...field} placeholder="Email"/> 
                        <p className={styles.error}>{error?.message}</p>
                        </div>}
                
            />
            <Controller
                        name="phone"
                        control={control}
                        render={({ field,fieldState: {error} }) =>  
                        <div className={styles.dialog_content}>
                        <Input type="text" {...field} placeholder="Number"/> 
                        <p className={styles.error}>{error?.message}</p>
                        </div>}
                
            />
            <Controller
                        name="message"
                        control={control}
                        render={({ field,fieldState: {error} }) =>  
                        <div className={styles.dialog_content}>
                        <TextArea placeholder="Message" {...field} />
                        <p className={styles.error}>{error?.message}</p>
                        </div>}
         
      />
            <div className={styles.dialog_content_btn}>
                    <div className={styles.btn}>
                    <ButtonComp title="Send"  type="submit" big/>
                    
                    </div>
                    <div className={styles.dialog_content_info}>
                        <Image src="/PhoneIcon.svg" alt="PhoneIcon.svg" width={34} height={34}/>
                        <p className={styles.dialog_content_info_title}>+44 203 773 8656</p>
                    </div>
                </div>
      </form>
            </div>
            <div>
                <Image src="/AnyQuestion.png" alt='AnyQuestion.png' width={632} height={504} />
            </div>
        </div>
    </div>
  )
}
