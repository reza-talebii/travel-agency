'use client'

import { ROUTES } from '@/models'
import { message } from 'antd'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface ISignIn {
  email: string
  password: string
  callbackUrl?: string
}

export const useSignIn = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const signInHandler = async ({ email, password, callbackUrl }: ISignIn) => {
    setLoading(true)
    const callBack = (callbackUrl = callbackUrl || ROUTES.account)

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
        callbackUrl: callBack,
      })

      if (res?.ok) {
        router.push(callBack)
        message.success('successfully signed in')
        return
      }
      res?.error && message.error('invalid credentials')
    } finally {
      setLoading(false)
    }
  }

  return {
    signInHandler,
    loading,
  }
}
