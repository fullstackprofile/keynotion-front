import Image from 'next/image'
import React from 'react'
import { ButtonComp } from '../Button/Button'
import { SponsorshipModal } from '../SponsorshipModal/SponsorshipModal'

import * as yup from "yup";


import styles from "./EventsInnerHeading.module.css"
import { useRouter } from 'next/router';


const options =[
    { value: "Linkedin", label: "Linkedin" },
    { value: "Social Media Sites", label: "Social Media Sites" },
    { value: "Keynotion Sales Representative", label: "Keynotion Sales Representative" },
    { value: "Direct Mailing", label: "Direct Mailing" },
    { value: "Colleague/Friend", label: "Colleague/Friend" },
    { value: "10times.com", label: "10times.com" },
    { value: "Clocate.com", label: "Clocate.com" },
    { value: "Others", label: "Others" },
  ]
  
  const ApplySchema = yup.object().shape({
    name: yup.string().required("please Enter your Name"),
    surname: yup.string().required("please Enter your Surname"),
    company_name: yup.string().required("please Enter your Company_name"),
    job_title: yup.string().required("please Enter your Job Title"),
    phone_number: yup.number().required("please Enter your Phone Number"),
    corporate_email: yup.string().email().required("please Enter your Corporative Email"),
    country: yup.string().required("please Enter your Country"),
    summit_name: yup.string().required("please Enter your Summit Name"),
    Learn_about_us : yup.object().shape({
        label: yup.string().required("Required"),
        value: yup.string().required("Required")
    }),
    presentation: yup.string().required("please Enter your Comment"),
    your_way_get_us: yup.string(),
    confirm : yup.boolean()
  });

  const BrochureSchema = yup.object().shape({
    name: yup.string().required("please Enter your Name"),
    surname: yup.string().required("please Enter your Surname"),
    company_name: yup.string().required("please Enter your Company_name"),
    job_title: yup.string().required("please Enter your Job Title"),
    phone_number: yup.number().required("please Enter your Phone Number"),
    corporate_email: yup.string().email().required("please Enter your Corporative Email"),
    country: yup.string().required("please Enter your Country"),
    summit_name: yup.string().required("please Enter your Summit Name"),
    Learn_about_us : yup.object().shape({
        label: yup.string().required("Required"),
        value: yup.string().required("Required")
    }),
    comments: yup.string().required("please Enter your Comment"),
    your_way_get_us: yup.string().when("Learn_about_us",{
      is : (Learn_about_us) => Learn_about_us.value === "Others",
      then : yup.string().required("Required")
    }),
    confirm : yup.boolean()
  });

export const EventsInnerHeading = ({title,small_description,cover,country,city,id,the_venue_logo,Past}) => {


    const [openLogin, setOpenLogin] = React.useState(false);
    const [openBrouchure, setOpenBrouchure] = React.useState(false);
    const handleClickOpen = () => {
      setOpenLogin(true);
    };

    const handleClickOpenBrochure = () => {
        setOpenBrouchure(true);
      };
  
    const handleClose = () => {
      setOpenLogin(false);
    };

    const handleCloseBrochure = () => {
        setOpenBrouchure(false);
      };


    const router =useRouter()

    const goTickets = () => router.push(`/Ticket/${id}`)
    const goSponsorShip = () => router.push(`/Sponsorship`)


  return (
    <div className={styles.eventsInnerHeading}>
        <div className={styles.eventsInnerHeading_body}>
            <div className={styles.left}>
                <div className={styles.titles}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.subTitle}>{small_description}</p>
                </div>
                <div className={styles.date_block}>
                    <p className={styles.date}>23rd - 25th of November 2022</p>
                    <p className={styles.country}>{country},{city}</p>
                </div>
                <div className={styles.logo}>
                    <Image src={the_venue_logo} width={82} height={64} />
                </div>
            </div>
            <div className={styles.right}>

        <Image src={cover} width={784} height={645} />
            </div>
        </div>
        {
          !Past &&  <div className={styles.btns}>
          <ButtonComp title="Brochure" transparent onClick={handleClickOpenBrochure}/>
          <ButtonComp title="Get Tickets" transparent onClick={goTickets}/>
          <ButtonComp title="Sponsorship" transparent onClick={goSponsorShip}/>
          <ButtonComp title="Apply to Speak" transparent onClick={handleClickOpen}/>
      </div>
        }
        
        <SponsorshipModal 
        open={openLogin} 
        handleClose={handleClose} 
        title="Apply " 
        subtitle="To Speak" 
        SponsorshipSchema={ApplySchema}
        options={options}
        Learn_about_us="Learn_about_us"
        Learn_about_us_placeholder="How Did You Learn About Us?"
        your_way_get_us
        Presentation
        />
         <SponsorshipModal 
        open={openBrouchure} 
        handleClose={handleCloseBrochure} 
        title="Brochure  " 
        subtitle="Request" 
        SponsorshipSchema={BrochureSchema}
        options={options}
        Learn_about_us="Learn_about_us"
        Learn_about_us_placeholder="How Did You Learn About Us?"
        your_way_get_us
        comments
        />
    </div>
  )
}
