import { useLogin } from '@/hook'
import { ROUTES } from '@/models'
import { IdentityService } from '@/services/controllers/Identity/Identity.service'
import { IBodyRegister, IResponseAuth } from '@/services/controllers/Identity/models'
import useAuthStore from '@/store/auth'
import { useMutation } from '@tanstack/react-query'
import { UseMutationResult } from '@tanstack/react-query/build/lib/types'
import { useRouter } from 'next/navigation'
import { FC, createContext, useContext, ReactNode } from 'react'

interface IContextValue {
  registerController: UseMutationResult<IResponseAuth, unknown, IBodyRegister, unknown>
}

export const SignUpCtx = createContext<IContextValue | undefined>(undefined)

export const SignUpProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { loginHandler } = useLogin()
  const IdentityServices = new IdentityService()

  const registerReq = async (body: IBodyRegister) => {
    const res = await IdentityServices.register(body)
    return res.data
  }

  const registerController = useMutation(registerReq, {
    onSuccess: data => {
      loginHandler(data.token)
    },
  })

  const ctxValue: IContextValue = {
    registerController,
  }
  return <SignUpCtx.Provider value={ctxValue}>{children}</SignUpCtx.Provider>
}

export const useSignUpCtx = () => useContext(SignUpCtx)!
