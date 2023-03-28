import React from 'react'
import PaymentsMethods from '@/modules/Payments'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payment Methods',
}

const Page = () => {
  return <PaymentsMethods />
}

export default Page
