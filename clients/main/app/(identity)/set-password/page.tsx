import SetPassword from '@/modules/SetPassword'
import React from 'react'

import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Set Password',
}

const page = () => {
  return <SetPassword />
}

export default page
