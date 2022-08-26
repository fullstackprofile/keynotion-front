import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import AddPaymentMethod from './AddPaymentMethod'

const AddCart = () => {
  const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')
  return (
    <>
      <div className="w-full bg-white p-6 flex flex-col gap-4 rounded-xl">
        <div>
          <Elements stripe={stripePromise}>
            <AddPaymentMethod />
          </Elements>
        </div>
      </div>
    </>
  )
}

export default AddCart
