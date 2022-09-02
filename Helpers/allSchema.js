import * as yup from 'yup'
import { phoneRegExp } from './help'

export const AnyQuestionsSchema = yup.object().shape({
  name: yup.string().required('Please Enter your Name'),
  email: yup
    .string()
    .email('Invalid Email')
    .required('Please Enter your Email'),
  number: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Please Enter your Phone'),
  message: yup.string().required('Please Enter your Message'),
})

export const SubscribeSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid Email')
    .required('Please Enter your Email'),
})

export const ConectUsAnyQuestionsSchema = yup.object().shape({
  name: yup.string().required('Please Enter your First Name'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Please Enter your Phone Number'),
  company: yup.string().required('Please Enter your Company Name'),
  email: yup
    .string()
    .email('Invalid Email')
    .required('Please Enter your Email'),
  attending: yup.boolean(),
  speaking: yup.boolean(),
  sponsoring: yup.boolean(),
  event: yup.string().required('Please Enter your Event'),
  question: yup.string().required('Please Enter your Question'),
})

export const SponsorshipSchema = yup.object().shape({
  name: yup.string().required('Please Enter your Name'),
  surname: yup.string().required('Please Enter your Surname'),
  company_name: yup.string().required('Please Enter your Company_name'),
  job_title: yup.string().required('Please Enter your Job Title'),
  phone_number: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Please Enter your Phone Number'),
  corporate_email: yup
    .string()
    .email()
    .required('Please Enter your Corporative Email'),
  country: yup.string().required('please Enter your Country'),
  summit_name: yup.string().required('Please Enter your Summit Name'),
  package_name: yup.object().shape({
    label: yup.string().required('Required'),
    value: yup.string().required('Required'),
  }),
  comments: yup.string().required('Please Enter your Comment'),
  confirm: yup.boolean(),
})

export const ApplySchema = yup.object().shape({
  name: yup.string().required('Please Enter your Name'),
  surname: yup.string().required('Please Enter your Surname'),
  company_name: yup.string().required('Please Enter your Company_name'),
  job_title: yup.string().required('Please Enter your Job Title'),
  phone_number: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Please Enter your Phone Number'),
  corporate_email: yup
    .string()
    .email()
    .required('Please Enter your Corporative Email'),
  country: yup.string().required('Please Enter your Country'),
  summit_name: yup.string().required('Please Enter your Summit Name'),
  Learn_about_us: yup.object().shape({
    label: yup.string().required('Required'),
    value: yup.string().required('Required'),
  }),
  presentation: yup.string().required('Please Enter your Comment'),
  your_way_get_us: yup.string(),
  confirm: yup.boolean(),
})

export const BrochureSchema = yup.object().shape({
  name: yup.string().required('Please Enter your Name'),
  surname: yup.string().required('Please Enter your Surname'),
  company_name: yup.string().required('Please Enter your Company_name'),
  job_title: yup.string().required('Please Enter your Job Title'),
  phone_number: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Please Enter your Phone Number'),
  corporate_email: yup
    .string()
    .email()
    .required('Please Enter your Corporative Email'),
  country: yup.string().required('Please Enter your Country'),
  summit_name: yup.string().required('Please Enter your Summit Name'),
  Learn_about_us: yup.object().shape({
    label: yup.string().required('Required'),
    value: yup.string().required('Required'),
  }),
  comments: yup.string().required('Please Enter your Comment'),
  your_way_get_us: yup.string().when('Learn_about_us', {
    is: (Learn_about_us) => Learn_about_us.value === 'Others',
    then: yup.string().required('Required'),
  }),
  confirm: yup.boolean(),
})

export const CardContentsSchema = yup.object().shape({
  code: yup.string().required('Please Enter Coupont Code'),
})

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required('Please Enter your Email'),
  password: yup.string().required('Please Enter your Password'),
})

export const RegisterSchema = yup.object().shape({
  first_name: yup.string().required('Please Enter your First Name'),
  last_name: yup.string().required('Please Enter your Last Name'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Please Enter your Phone Number'),
  email: yup.string().email().required('Please Enter your Email'),
  country: yup.string().required('Please Enter your Country'),
  password: yup.string().required('Please Enter your Password'),
  password_confirmation: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('password')], 'Your passwords do not match.'),
})

export const ForgotPassSchema = yup.object().shape({
  email: yup.string().email().required('please Enter your Email'),
})

export const ResendPasswordSchema = yup.object().shape({
  email: yup.string().email().required('Please Enter your Email'),
  password: yup.string().required('please Enter your Password'),
  password_confirmation: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('password')], 'Your passwords do not match.'),
})

export const CheckOutBodysSchema = yup.object().shape({
  full_name: yup.string().required('please Enter your Full Name'),
  last_name: yup.string().required('please Enter your Last Name'),
  first_name: yup.string().required('please Enter your First Name'),
  job_title: yup.string().required('please Enter your Job Title'),
  company_name: yup.string().required('please Enter your Company Name'),
  country_region: yup.string().required('please Enter your Country'),
  town_city: yup.string().required('please Enter Your City Name'),
  street_address: yup.string().required('please Enter Street Address'),
  postcode_zip: yup.string().required('please Enter PostCode/ZIP'),
  email: yup.string().email().required('please Enter your Email'),
  phone: yup.string().required('please Enter your Phone Number'),
  payment_method: yup.string().required(),
})
