import React from 'react'
import SignUp from '@/modules/SignUp'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up',
}

const index = () => {
  return <SignUp />
}

export default index
