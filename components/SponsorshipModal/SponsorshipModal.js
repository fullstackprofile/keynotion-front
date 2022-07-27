import React from 'react'
import ReactSelect from "react-select";

import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import { Checkbox, Dialog } from '@mui/material'
import { ButtonComp } from '../Button/Button';
import { Input } from '../Input/Input';

import { yupResolver } from "@hookform/resolvers/yup";


import styles from "./SponsorshipModal.module.css"
import { TextArea } from '../TextArea/TextArea';



  

  export const SponsorshipModal = (
    {open,
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
      comments
    }
    ) => {



    
    const { control, handleSubmit } = useForm({
      resolver: yupResolver(SponsorshipSchema)
      
    });
  
  
    const onSubmit = data => {
      console.log(data);
    };
  
  
    return (
      <>
      <Dialog open={open} onClose={handleClose} sx= {{
    "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
      width : "80%",
      maxHeight: "900px"
    } }} >
            <div className={styles.dialog_head}>
            
            <div className={styles.dialog_close} onClick={handleClose}>
              <Image src="/closeIcon.png" width={36} height={36}/>
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
            <form onSubmit={handleSubmit(onSubmit)} className={styles.dialog_right} >
            <div className={styles.dialog_filds}>
             <div className={styles.filds_half}>
             <Controller
                name="name"
                control={control}
                render={({ field,fieldState: {error} }) =>  <div className={styles.dialog_content_}>
                <Input type="text" {...field} placeholder="Name"/> 
                <p className={styles.error}>{error?.message}</p>
           </div>}
           
        />
        <Controller
          name="surname"
          control={control}
          render={({ field,fieldState: {error} }) =>  
          <div className={styles.dialog_content_}>
           
            <Input type="text" {...field} placeholder="Surname"/> 
            <p className={styles.error}>{error?.message}</p>
           </div>}
           
        />
        <Controller
          name="company_name"
          control={control}
          render={({ field,fieldState: {error} }) =>  
          <div className={styles.dialog_content_}>
           
            <Input type="text" {...field} placeholder="Company Name"/> 
            <p className={styles.error}>{error?.message}</p>
           </div>}
           
        />
        <Controller
          name="job_title"
          control={control}
          render={({ field,fieldState: {error} }) =>  
          <div className={styles.dialog_content_}>
           
            <Input type="text" {...field} placeholder="Job Title"/> 
            <p className={styles.error}>{error?.message}</p>
           </div>}
           
        />
        <Controller
          name="phone_number"
          control={control}
          render={({ field,fieldState: {error} }) =>  
          <div className={styles.dialog_content_}>
           
            <Input type="text" {...field} placeholder="Phone Number"/> 
            <p className={styles.error}>{error?.message}</p>
           </div>}
           
        />
        <Controller
          name="corporate_email"
          control={control}
          render={({ field,fieldState: {error} }) =>  
          <div className={styles.dialog_content_}>
           
            <Input type="text" {...field} placeholder="Corporate Email"/> 
            <p className={styles.error}>{error?.message}</p>
           </div>}
           
        />
             </div>
         <div className={styles.dialog_filds_}>
         <Controller
          name="country"
          control={control}
          render={({ field,fieldState: {error} }) =>  <div className={styles.dialog_content}>
          
          <Input type="text"  {...field} placeholder="Country"/> 
          <p className={styles.error}>{error?.message}</p>
           </div>}
        />
        <Controller
          name="summit_name"
          control={control}
          render={({ field,fieldState: {error} }) =>  <div className={styles.dialog_content}>
          
          <Input type="text"  {...field} placeholder="Summit Name"/> 
          <p className={styles.error}>{error?.message}</p>
           </div>}
        />
        {
          Presentation && <Controller
          name="presentation"
          control={control}
          render={({ field,fieldState: {error} }) =>  <div className={styles.dialog_content}>
          
          <Input type="text"  {...field} placeholder="Presentation Proposal"/> 
          <p className={styles.error}>{error?.message}</p>
           </div>}
        />
        }
        {
          comments && <Controller
          name="comments"
          control={control}
          render={({ field,fieldState: {error} }) =>  <div className={styles.dialog_content}>
          
          <Input type="text"  {...field} placeholder="Comments"/> 
          <p className={styles.error}>{error?.message}</p>
           </div>}
        />
        }
        <Controller
          name={Learn_about_us ? Learn_about_us : "package_name" }
          control={control}
          render={({ value, field,fieldState: {error} }) =>  
          <div className={styles.dialog_content}>
           <ReactSelect placeholder={Learn_about_us_placeholder ? Learn_about_us_placeholder  : "Package Name"} {...field} options={options} className={styles.selecttt}/>
           <p className={styles.error}>{error?.message}</p>
           </div>}
        />
        {
          comment && <Controller
          name="comments"
          control={control}
          render={({ field,fieldState: {error} }) =>  <div className={styles.dialog_content}>
          <TextArea placeholder="Comments" {...field} />
          <p className={styles.error}>{error?.message}</p>
          </div>}
        />
        }
        
        { your_way_get_us &&
          <Controller
          name="your_way_get_us"
          control={control}
          render={({ field,fieldState: {error} }) =>  <div className={styles.dialog_content}>
          
          <Input type="text"  {...field} placeholder="If Others, Please Specify Below"/> 
          <p className={styles.error}>{error?.message}</p>
           </div>}
        />
        }
        {
          check && 
          <Controller
          name="confirm"
          control={control}
          render={({ field }) =>  
          <div className={styles.remember}>
          <Checkbox  {...field}/>
          <p className={styles.remember_label}>I Confirm That I Have Read And Agreed To Terms & Conditions And Privacy Policy</p>
          </div>}
        />
        }
        
         </div>
       
        
         </div>
           
           
            <div className={styles.dialog_content_btn} >
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
  