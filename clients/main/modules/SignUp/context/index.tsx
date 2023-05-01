'use client'

import { useSignIn } from '@/hook'
import { ROUTES } from '@/models'
import { IdentityService } from '@/services/controllers/Identity/Identity.service'
import { IBodyRegister, IResponseAuth } from '@/services/controllers/Identity/models'
import { useMutation } from '@tanstack/react-query'
import { UseMutationResult } from '@tanstack/react-query/build/lib/types'
import { FC, createContext, useContext, ReactNode } from 'react'

interface IContextValue {
  registerController: UseMutationResult<IBodyRegister | undefined, unknown, IBodyRegister, unknown>
}

export const SignUpCtx = createContext<IContextValue | undefined>(undefined)

export const SignUpProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const IdentityServices = new IdentityService()
  const { signInHandler } = useSignIn()

  const registerReq = async (body: IBodyRegister) => {
    const res = await IdentityServices.register(body)
    if (res.status === 200) return body
  }

  const registerController = useMutation(registerReq, {
    onSuccess: data => {
      signInHandler({ email: data?.email!, password: data?.password! })
    },
  })

  const ctxValue: IContextValue = {
    registerController,
  }
  return <SignUpCtx.Provider value={ctxValue}>{children}</SignUpCtx.Provider>
}

export const useSignUpCtx = () => useContext(SignUpCtx)!
