import { useGetServerSession } from '@/hook'
import { ROUTES } from '@/models'
import Information from '@/modules/Information'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import React from 'react'

export const metadata: Metadata = {
  title: 'Account',
}

const Page = async () => {
  const data = await useGetServerSession()

  if (!data?.user) redirect(ROUTES.home)

  return <Information userInfo={data?.user} />
}

export default Page
