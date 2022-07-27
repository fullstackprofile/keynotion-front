import React from 'react'

import {Title} from "../TItle/Title"

import { Input } from '../Input/Input'
import { ButtonComp } from '../Button/Button'
import { TextArea } from '../TextArea/TextArea';

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


import styles from "./LeaveReply.module.css"
import { Controller, useForm } from 'react-hook-form';
import { Checkbox } from '@mui/material';

const LeaveReplySchema = yup.object().shape({
  name: yup.string().required("please Enter your Name"),
  email: yup.string().email().required("please Enter your Email"),
  comment: yup.string().required("please Enter your Comment"),
  website: yup.string(),
  save : yup.boolean()
});

export const LeaveReply = () => {

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(LeaveReplySchema)
  });


  const onSubmit = handleSubmit(data => {
    console.log(data);
  });


  return (
    <div className={styles.leaveReply}>
        <Title title_2="Leave a Reply" full/>
        <div className={styles.leaveReply_form}>
          <form onSubmit={onSubmit}>
          <Controller
                  name="comment"
                  control={control}
                  render={({ field,fieldState: {error} }) =>  
                  <div className={styles.dialog_content}>
                  <TextArea placeholder="Comment" {...field} />
                  <p className={styles.error}>{error?.message}</p>
                  </div>}
         
      />
        <div className={styles.row_block}>
          <div className={styles.row}>
          <Controller
                name="name"
                control={control}
                render={({ field,fieldState: {error} }) =>  
                <div className={styles.dialog_content}>
                <Input type="text" {...field} placeholder="Name"/> 
                <p className={styles.error}>{error?.message}</p>
                </div>}
         
      />
          </div>
          <div className={styles.row}>
          <Controller
                        name="email"
                        control={control}
                        render={({ field,fieldState: {error} }) =>  
                        <div className={styles.dialog_content}>
                        <Input type="text" {...field} placeholder="Email"/> 
                        <p className={styles.error}>{error?.message}</p>
                        </div>}
                
            />
          </div>
        </div>
        <div className={styles.website}>
        <Controller
                name="website"
                control={control}
                render={({ field,fieldState: {error} }) =>  
                <div className={styles.dialog_content}>
                <Input type="text" {...field} placeholder="website"/> 
                <p className={styles.error}>{error?.message}</p>
                </div>}
         
      />
        </div>
        <Controller
        name="save"
        control={control}
        render={({ field }) =>  
        <div className={styles.remember}>
        <Checkbox  {...field}/>
        <p className={styles.remember_label}>Save my name, email, and website in this browser for the next time I comment.</p>
        </div>}
      />
       <div className={styles.btn}>
              <ButtonComp title="Post Comment" big />
       </div>
        
          </form>
        </div>
    </div>
  )
}
