import { Autocomplete, Box, Dialog, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const VerificationSchema = yup.object().shape({
  first_name: yup.string().required('please Enter your Verification Code'),
})

export const SignUp = ({ open, handleClose }) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(VerificationSchema),
  })
}
