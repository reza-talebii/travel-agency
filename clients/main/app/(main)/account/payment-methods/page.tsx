'use client'

import React from 'react'
import PaymentsMethods from '@/modules/Payments'
import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { BankService } from '@/services/controllers/Bank/Bank.service'
import { redirect } from 'next/navigation'
import { ROUTES } from '@/models'
import { apiCaller } from '@/services/apiCaller'
import { ICard } from '@/services/controllers/Bank/models'
import { BankUrls } from '@/services/controllers/Bank/urls'
import axios from 'axios'

// export const metadata: Metadata = {
//   title: 'Payment Methods',
// }

const Page = async () => {
  const session = await getServerSession(authOptions)

  if (!session) redirect(ROUTES.home)

  const res = await axios.get<ICard[]>(BankUrls.getCards, {
    headers: {
      Authorization: 'Bearer ' + session.user.token,
    },
  })

  return <PaymentsMethods cards={res.data} />
}

export default Page
