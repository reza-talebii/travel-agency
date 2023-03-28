import ForgetPassword from '@/modules/ForgetPassword'
import React from 'react'

import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Forget Password',
}

const page = () => {
  return <ForgetPassword />
}

export default page
