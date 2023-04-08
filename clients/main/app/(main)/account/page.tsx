import { ROUTES } from '@/models'
import Information from '@/modules/Information'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

export const metadata: Metadata = {
  title: 'Account',
}

const Page = async () => {
  const data = await getServerSession(authOptions)

  if (!data?.user) redirect(ROUTES.home)

  return <Information userInfo={data?.user} />
}

export default Page
